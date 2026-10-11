import ProjectFigure from "@/components/ProjectFigure";
import { alsoBuilt, featured, type Project } from "@/lib/projects";

function Details({ project }: { project: Project }) {
  return (
    <>
      <p className="entry__about">{project.about}</p>

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

      <p className="entry__stack">{project.stack.join(", ")}</p>
      <p className="entry__links">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </p>
    </>
  );
}

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section__head">
        <h2 id="work-title" className="section__title">
          Selected work
        </h2>
        <p className="section__hint">Each project lists what I measured and what didn’t work.</p>
      </div>

      {featured.map((project) => (
        <article key={project.id} id={project.id} className="feature" aria-labelledby={`${project.id}-title`}>
          <header className="feature__head">
            <h3 id={`${project.id}-title`} className="feature__name">
              {project.name}
            </h3>
            <p className="feature__kind">{project.kind}</p>
            <p className="feature__line">{project.line}</p>
          </header>
          <div className="feature__grid">
            <div className="feature__text">
              <Details project={project} />
            </div>
            {project.figure && <ProjectFigure figure={project.figure} />}
          </div>
        </article>
      ))}

      <h3 className="subhead">Also built</h3>
      <ul className="index">
        {alsoBuilt.map((project) => (
          <li key={project.id}>
            <details id={project.id} className="entry">
              <summary className="entry__row">
                <span className="entry__name">{project.name}</span>
                <span className="entry__line">{project.line}</span>
                <span className="entry__kind">{project.kind}</span>
                <span className="entry__toggle" aria-hidden="true" />
              </summary>
              <div className="entry__body">
                <div className="entry__main">
                  <Details project={project} />
                </div>
                {project.figure && <ProjectFigure figure={project.figure} />}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
