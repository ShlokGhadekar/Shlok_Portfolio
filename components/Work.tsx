import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section__head">
        <h2 id="work-title" className="section__title">
          Work
        </h2>
        <p className="section__hint">Open a project to see how it works, what I measured, and what went wrong.</p>
      </div>

      <ul className="index">
        {projects.map((project, i) => (
          <li key={project.id}>
            <details id={project.id} className="entry" open={i === 0}>
              <summary className="entry__row">
                <span className="entry__name">{project.name}</span>
                <span className="entry__line">{project.line}</span>
                <span className="entry__kind">{project.kind}</span>
                <span className="entry__toggle" aria-hidden="true" />
              </summary>

              <div className="entry__body">
                <div className="entry__main">
                  <p className="entry__about">{project.about}</p>
                  <p className="entry__stack">{project.stack.join(", ")}</p>
                  <p className="entry__links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </p>
                </div>

                <div className="entry__side">
                  {project.results.length > 0 && (
                    <dl className="results">
                      {project.results.map((result) => (
                        <div key={result.value} className="results__item">
                          <dt>
                            <span className="mark mark--static">{result.value}</span>
                          </dt>
                          <dd>{result.text}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <div className="note">
                    <p className="note__label">{project.note.label}</p>
                    <p className="note__text">{project.note.text}</p>
                  </div>
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
