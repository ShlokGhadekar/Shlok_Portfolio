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
              Built a phone voice agent on GPT-4, Whisper and Google TTS that streams audio both ways over Twilio
              WebSockets, and a pipeline that turns news into published WordPress posts without anyone touching it.
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
            <p className="facts__lead">AWS Solutions Architect, Associate</p>
            <p className="facts__lead">Oracle Java SE 17 Developer, Professional</p>
          </dd>
        </div>

        <div className="facts__item">
          <dt>Tools</dt>
          <dd>
            <p>
              Mostly Java with Spring Boot and Python with FastAPI. PostgreSQL and Redis underneath, Docker and
              Kubernetes to run it, PyTorch and LightGBM when there’s a model involved.
            </p>
          </dd>
        </div>
      </dl>
    </section>
  );
}
