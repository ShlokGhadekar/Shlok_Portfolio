export default function Background() {
  return (
    <section id="background" className="section" aria-labelledby="background-title">
      <div className="section__head">
        <h2 id="background-title" className="section__title">
          Background
        </h2>
      </div>

      <dl className="facts">
        <div className="facts__item">
          <dt>Experience</dt>
          <dd>
            <p className="facts__lead">AI Engineering Intern, Bitlance Tech Hub</p>
            <p className="facts__meta">May to July 2025</p>
            <p>
              Built a phone voice agent on GPT-4, Whisper and Google TTS that holds a live conversation over Twilio
              WebSockets, a sentiment-aware assistant workflow in n8n, and a pipeline that turns news into illustrated
              WordPress posts with GPT-4 and DALL·E. Deployed on Google Cloud.
            </p>
          </dd>
        </div>

        <div className="facts__item">
          <dt>Education</dt>
          <dd>
            <p className="facts__lead">B.Tech Computer Science and Engineering</p>
            <p className="facts__meta">Vellore Institute of Technology, CGPA 8.89</p>
          </dd>
        </div>

        <div className="facts__item">
          <dt>Certified</dt>
          <dd>
            <p className="facts__lead">AWS Certified AI Practitioner</p>
            <p className="facts__meta">AIF-C01</p>
            <p className="facts__lead">AWS Certified Solutions Architect, Associate</p>
            <p className="facts__meta">SAA-C03</p>
            <p className="facts__lead">Oracle Certified Professional, Java SE 17 Developer</p>
            <p className="facts__meta">1Z0-829</p>
          </dd>
        </div>

        <div className="facts__item">
          <dt>Tools</dt>
          <dd>
            <p>
              For AI work: Python, PyTorch, retrieval with BM25, embeddings and ChromaDB, MCP and tool-using agents, and
              the Claude, OpenAI and Groq APIs. Underneath: FastAPI, Java with Spring Boot, PostgreSQL, Redis, Docker and
              Kubernetes.
            </p>
          </dd>
        </div>
      </dl>
    </section>
  );
}
