export type Figure =
  | { type: "video"; src: string; poster: string; width: number; height: number; label: string; caption: string }
  | { type: "pairs"; title: string; series: [string, string]; rows: { label: string; values: [number, number]; format: string }[]; caption: string }
  | { type: "image"; src: string; width: number; height: number; alt: string; caption: string }
  | { type: "bars"; title: string; rows: { label: string; value: number; picked?: boolean }[]; caption: string }
  | { type: "dots"; title: string; min: number; max: number; rows: { label: string; value: number; picked?: boolean }[]; caption: string };

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
  figure?: Figure;
};

export const featured: Project[] = [
  {
    id: "agenthq",
    name: "AgentHQ",
    line: "A team of four AI agents that turns a goal for a GitHub repo into a tested change, then waits for a person before opening the pull request.",
    kind: "Multi-agent systems",
    about:
      "A Manager splits the goal into tasks. A Researcher finds the relevant code through RepoLens, an Engineer makes the change in a sandboxed clone, and a Reviewer reads the diff and re-runs the tests itself before anything reaches a person. The orchestration is plain Python and asyncio, with no agent framework. Every event goes through one pipeline onto Redis Streams, so the live dashboard, step-by-step replay and eval metrics are all built from the same log. Step limits, a token cap, loop detection and pause or stop keep a run inside its budget.",
    results: [
      { value: "46 seconds", text: "and about 3 cents to get from “add rate limiting to /login” to a reviewed, tested change waiting for sign-off, on a real run." },
      { value: "18% fewer tokens", text: "than a single agent with the same tools, across 10 eval tasks with hidden acceptance tests. Both solved all 10." },
    ],
    note: {
      label: "What didn’t work",
      text: "The team lost on the hardest task: the Reviewer sent the work back over a lint error, and the extra round cost 100k tokens. And since both setups solved everything, the eval doesn’t yet show a team succeeding where one agent fails. Harder tasks are next.",
    },
    stack: ["Python", "asyncio", "FastAPI", "Redis Streams", "PostgreSQL", "Docker", "React", "React Flow", "Gemini / Groq / Anthropic"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/AgentHQ" }],
    figure: {
      type: "pairs",
      title: "Four-agent team vs one agent, averaged over 10 tasks",
      series: ["Team", "Single agent"],
      rows: [
        { label: "Tokens", values: [103, 126], format: "{}k" },
        { label: "Cost", values: [0.033, 0.042], format: "${}" },
        { label: "Time", values: [1.3, 1.8], format: "{} min" },
      ],
      caption: "Same runtime, tools, guardrails and token cap for both. Each agent on the team holds a short conversation about one task instead of one long one about everything.",
    },
  },
  {
    id: "repolens",
    name: "RepoLens",
    line: "Ask a codebase questions in plain English and get answers that cite exact files and lines.",
    kind: "Retrieval-augmented generation",
    about:
      "Code is chunked by function with Python’s ast, then searched two ways at once: BM25 for exact identifiers and embeddings for meaning, merged with Reciprocal Rank Fusion. Weak retrieval means no LLM call at all. The prompt demands a citation for every claim, and any citation that doesn’t point at a chunk the model was actually given is dropped before you see it. It’s also the Researcher’s search tool inside AgentHQ.",
    results: [
      {
        value: "0.889",
        text: "MRR@6 for hybrid search, up from 0.850 after capping chunks at 30 lines so long functions stop getting cut off by the embedding model.",
      },
    ],
    note: {
      label: "What didn’t work",
      text: "Cross-encoder rerankers. They’re trained on prose, so they kept ranking the docs above the code that actually answered the question. The reranker is still in the code, switched off.",
    },
    stack: ["Python", "FastAPI", "ChromaDB", "sentence-transformers", "BM25", "Claude / Groq", "Streamlit"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/RepoLens" }],
    figure: {
      type: "bars",
      title: "MRR@6 on the itsdangerous eval set",
      rows: [
        { label: "Hybrid, no reranker", value: 0.85, picked: true },
        { label: "+ ms-marco-MiniLM", value: 0.799 },
        { label: "+ mxbai-rerank-xsmall", value: 0.736 },
        { label: "+ bge-reranker-base", value: 0.701 },
      ],
      caption: "Every reranker I tried made retrieval worse. Measured on 12 questions with the earlier 40-line chunks; the gap held after re-chunking.",
    },
  },
  {
    id: "auraos",
    name: "AuraOS",
    line: "A hotkey agent for macOS that remembers what you were working on and acts on it.",
    kind: "Agents and MCP",
    about:
      "Type what you want in plain English. A planning agent breaks it into steps across five MCP servers (GitHub, files, Calendar through a native Swift bridge, a real browser, and memory) and shows the plan before running it. Memory has three tiers: in-process for the session, SQLite for what happened, and ChromaDB so “that NLP thing” still finds the right project. Anything that writes to the outside world waits behind a confirmation.",
    results: [],
    note: {
      label: "What broke",
      text: "Every server wrote to SQLite on its own connection, and concurrent workflow steps kept hitting “database is locked”. Instead of adding retries, I routed every write through a single memory server, and the errors stopped.",
    },
    stack: ["Python", "FastAPI", "MCP", "Groq", "SQLite", "ChromaDB", "Electron", "Swift", "Playwright"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/AuraOS" }],
    figure: {
      type: "video",
      src: "/work/auraos.mp4",
      poster: "/work/auraos.jpg",
      width: 1600,
      height: 900,
      label: "AuraOS demo video",
      caption: "20-second demo. “Continue my auraos project” pulls up the last session’s next step and open issues, then opens the workspace.",
    },
  },
  {
    id: "retentia",
    name: "Retentia",
    line: "Predicts which online-retail customers will stop buying, and explains why for each one.",
    kind: "Deep learning",
    about:
      "The dataset (1.07M real transactions) has no churn label, so I defined one: no purchase in the three months after a cutoff, with every feature built only from data before it. I compared logistic regression, random forest and XGBoost against an MLP, a GRU over monthly purchase sequences, and a fusion of the two. Predictions are served through FastAPI with a SHAP explanation for each customer.",
    results: [
      { value: "0.811", text: "ROC-AUC on a test set touched exactly once, after every modelling choice was final." },
      { value: "0.16", text: "decision threshold instead of 0.5, once a missed churner is costed at five times a wasted retention offer." },
    ],
    note: {
      label: "What didn’t work",
      text: "Fusing the MLP and the GRU didn’t beat either one on its own. Both read the same purchase history, just encoded differently, so the second branch added nothing new.",
    },
    stack: ["Python", "PyTorch", "XGBoost", "scikit-learn", "SHAP", "FastAPI", "Streamlit"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/Retentia" }],
    figure: {
      type: "dots",
      title: "Validation ROC-AUC",
      min: 0.76,
      max: 0.79,
      rows: [
        { label: "MLP", value: 0.787, picked: true },
        { label: "MLP + GRU fusion", value: 0.785 },
        { label: "Logistic regression", value: 0.781 },
        { label: "GRU, sequences only", value: 0.778 },
        { label: "Random forest", value: 0.776 },
        { label: "XGBoost", value: 0.767 },
      ],
      caption: "Six models within 0.02 of each other. The fusion model landed between its two branches, so I shipped the simpler MLP.",
    },
  },
];

export const alsoBuilt: Project[] = [
  {
    id: "shelfwise",
    name: "ShelfWise",
    line: "Forecasts 28 days of sales for 30,490 Walmart products and turns them into order quantities.",
    kind: "Forecasting",
    about:
      "A Postgres warehouse (about 59M rows) handles cleaning, data-quality checks, incremental loads and feature engineering in SQL. A LightGBM model is backtested walk-forward over three folds and checked for significance. A newsvendor rule turns each forecast into an order, and a simulation prices those orders against naive ordering.",
    results: [
      { value: "−28%", text: "error at store level against the best baseline (WRMSSE 0.614 vs 0.854). It also beat ETS and SARIMA." },
      { value: "~20%", text: "lower simulated inventory cost than naive ordering." },
    ],
    note: {
      label: "What didn’t work",
      text: "Per item, the model beat a 28-day moving average by only 0.5%. Statistically real, practically small. Its prediction intervals were also too wide, so a much simpler quantile policy ordered slightly cheaper.",
    },
    stack: ["Python", "PostgreSQL", "SQL", "LightGBM", "DuckDB", "FastAPI", "Streamlit", "Docker"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/ShelfWise" }],
    figure: {
      type: "image",
      src: "/work/shelfwise.jpg",
      width: 800,
      height: 563,
      alt: "ShelfWise dashboard showing an item's daily sales history and a 28-day forecast with a P10 to P90 band",
      caption: "The dashboard: an item’s sales history, the 28-day forecast with its P10–P90 band, and the naive baseline it has to beat.",
    },
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
      { value: "1,598", text: "requests let through to a client firing 300 a second, exactly what its rate limit allows. Everyone else saw no errors." },
    ],
    note: {
      label: "Before this",
      text: "Vaultik started as a single-node key-value store with LRU/LFU eviction and a write-ahead log. I rebuilt it into something a team would actually deploy. The storage engine lives on the kv-engine branch.",
    },
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "Kubernetes", "Prometheus", "Testcontainers", "k6"],
    links: [{ label: "Code", href: "https://github.com/ShlokGhadekar/Vaultik" }],
  },
  {
    id: "collabeditor",
    name: "CollabEditor",
    line: "A browser code editor where several people edit and run the same file together, live.",
    kind: "Real-time backend",
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
    figure: {
      type: "image",
      src: "/work/collabeditor.jpg",
      width: 1600,
      height: 777,
      alt: "CollabEditor with two people editing the same Python file, one collaborator's cursor labelled",
      caption: "Two people in one room. The labelled cursor is the other person.",
    },
  },
];
