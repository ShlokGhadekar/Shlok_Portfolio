import HeroVideo from "@/components/HeroVideo";
import { links } from "@/lib/links";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__statement">
          I build AI systems that know when they don’t know.
        </h1>

        <p className="hero__intro">
          I’m an AI engineer working on retrieval, agents, and the backend underneath them. Lately that’s been a code
          search tool that{" "}
          <a href="#repolens" className="mark" style={{ "--i": 0 } as React.CSSProperties}>
            says “not found” instead of guessing
          </a>
          , an agent for macOS that{" "}
          <a href="#auraos" className="mark" style={{ "--i": 1 } as React.CSSProperties}>
            remembers where you left off
          </a>
          , and a secrets manager that{" "}
          <a href="#vaultik" className="mark" style={{ "--i": 2 } as React.CSSProperties}>
            served 56,334 requests without a failure
          </a>
          .
        </p>

        <p className="hero__status">Final-year Computer Science at VIT. Looking for AI engineering roles.</p>

        <p className="hero__actions">
          <a href="#work" className="button button--solid">
            See the work
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer" className="button">
            Resume
          </a>
        </p>
      </div>

      <HeroVideo />
    </section>
  );
}
