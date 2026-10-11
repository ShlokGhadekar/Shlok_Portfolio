export type Project = {
  id: string;
  name: string;
  line: string;
  kind: string;
  about: string;
  results: { value: string; text: string }[];
  note: { label: string; text: string };
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "repolens",
    name: "RepoLens",
    line: "Ask a codebase questions in plain English and get answers that cite exact files and lines.",
    kind: "AI tooling",
    about:
      "Code is chunked by function with Python’s ast, then searched two ways at once: BM25 for exact identifiers and embeddings for meaning, merged with Reciprocal Rank Fusion. If retrieval comes back weak, it says it couldn’t find the answer instead of guessing, and any citation that doesn’t point at a retrieved chunk is dropped before you see it.",
    results: [
      {
        value: "0.889",
        text: "MRR@6 for hybrid search, up from 0.850 after capping chunks at 30 lines so long functions stop getting cut off by the embedding model.",
      },
    ],
    note: {
      label: "What didn’t work",
      text: "A cross-encoder reranker made results worse (MRR 0.750). It was trained on prose, so it ranked the docs above the code that actually answered the question. It ships switched off.",
    },
    stack: ["Python", "FastAPI", "ChromaDB", "sentence-transformers", "BM25", "Claude / Groq", "Streamlit"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/RepoLens" }],
  },
  {
    id: "shelfwise",
    name: "ShelfWise",
    line: "Forecasts 28 days of sales for 30,490 Walmart products and turns them into order quantities.",
    kind: "Data and ML",
    about:
      "A Postgres warehouse (about 59M rows) handles cleaning, data-quality checks, incremental loads and feature engineering in SQL. A LightGBM model is backtested walk-forward over three folds and checked for significance. A newsvendor rule turns each forecast into an order, and a simulation prices those orders against naive ordering.",
    results: [
      { value: "−28%", text: "error at store level against the best baseline (WRMSSE 0.614 vs 0.854). It also beat ETS and SARIMA." },
      { value: "~20%", text: "lower simulated inventory cost than naive ordering." },
    ],
    note: {
      label: "What didn’t work",
      text: "Per item, the model beat a 28-day moving average by only 0.5%. That gap is statistically real (p = 5×10⁻⁶) but small. Its prediction intervals also came out too wide, so a much simpler quantile policy ordered slightly cheaper.",
    },
    stack: ["Python", "PostgreSQL", "SQL", "LightGBM", "DuckDB", "FastAPI", "Streamlit", "Docker"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/ShelfWise" }],
  },
  {
    id: "vaultik",
    name: "Vaultik",
    line: "A secrets manager for Kubernetes: a small, working version of what HashiCorp Vault does.",
    kind: "Backend",
    about:
      "Each secret version gets its own data key (AES-256-GCM envelope encryption), so rotating the master key re-encrypts 32 bytes per secret instead of the data. Services can only read the paths their policy allows. Pods log in with the service account token Kubernetes already gives them, so there’s no bootstrap password to hand out. Every read lands in a hash-chained, append-only audit log.",
    results: [
      { value: "0 of 56,334", text: "requests failed from 40 services under load, at 17 ms p99, while the cluster scaled from 3 to 6 replicas." },
      { value: "1,598", text: "requests let through to a client firing 300 per second, which is exactly what its rate limit allows. Everyone else saw no errors." },
    ],
    note: {
      label: "Before this",
      text: "Vaultik started as a single-node key-value store with LRU/LFU eviction and a write-ahead log. I rebuilt it into something a team would actually deploy. The storage engine lives on the kv-engine branch.",
    },
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "Kubernetes", "Prometheus", "Testcontainers", "k6"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/Vaultik" }],
  },
  {
    id: "retentia",
    name: "Retentia",
    line: "Predicts which online-retail customers will stop buying, and explains why for each one.",
    kind: "ML",
    about:
      "The dataset (1.07M real transactions) has no churn label, so I defined one: no purchase in the three months after a cutoff, with every feature built only from data before it. I compared logistic regression, random forest and XGBoost against an MLP, a GRU over monthly purchase sequences, and a fusion of the two. Predictions are served through FastAPI with SHAP explanations for each customer.",
    results: [
      { value: "0.811", text: "ROC-AUC on a test set that was touched exactly once, after every modelling choice was final." },
      { value: "0.16", text: "decision threshold, not 0.5, once a missed churner is costed at five times a wasted retention offer." },
    ],
    note: {
      label: "What didn’t work",
      text: "Fusing the MLP and the GRU didn’t beat either one on its own. Both were reading the same purchase history, just encoded differently, so the second branch added nothing new.",
    },
    stack: ["Python", "PyTorch", "XGBoost", "scikit-learn", "SHAP", "FastAPI", "Streamlit"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/Retentia" }],
  },
  {
    id: "auraos",
    name: "AuraOS",
    line: "A hotkey agent for macOS that remembers what you were working on.",
    kind: "AI tooling",
    about:
      "Type what you want in plain English. It plans a sequence of real actions across GitHub, your files, Calendar and a browser, and shows the plan before running it. Five MCP servers sit behind a planning agent. Session history lives in SQLite and semantic recall in ChromaDB, so “that NLP thing” finds the right project.",
    results: [],
    note: {
      label: "What broke",
      text: "Every server wrote to SQLite on its own connection, and concurrent workflow steps kept hitting “database is locked”. Instead of adding retries, I routed every write through a single memory server, and the errors stopped.",
    },
    stack: ["Python", "FastAPI", "MCP", "Groq", "SQLite", "ChromaDB", "Electron", "Swift", "Playwright"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/AuraOS" }],
  },
  {
    id: "collabeditor",
    name: "CollabEditor",
    line: "A browser code editor where several people edit and run the same file together, live.",
    kind: "Backend",
    about:
      "A Spring Boot WebSocket server checks a JWT on every STOMP frame, not just at connect. Redis Pub/Sub carries edits between server instances, so a room works no matter which instance you land on. The front end is Monaco with seven languages, and Java, Python and JavaScript run in the browser.",
    results: [],
    note: {
      label: "What broke",
      text: "Monaco dropped keystrokes whenever React controlled its value, and StrictMode mounted the socket twice. Running the editor uncontrolled with a 150 ms debounce fixed it.",
    },
    stack: ["Java 17", "Spring Boot 3", "WebSocket / STOMP", "Redis", "PostgreSQL", "Next.js", "TypeScript", "Docker"],
    links: [
      { label: "Live demo", href: "https://realtime-collab-editor-two.vercel.app" },
      { label: "Code", href: "https://github.com/ShlokGhadekar/realtime-collab-editor" },
    ],
  },
];
