import HeroVideo from "@/components/HeroVideo";
import { links } from "@/lib/links";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__statement">
          I build AI agents that check their own work and ask before they ship.
        </h1>

        <p className="hero__intro">
          I’m an AI engineer. My latest project, AgentHQ, is a team of four agents that took a goal to a reviewed, tested
          change in{" "}
          <a href="#agenthq" className="mark" style={{ "--i": 0 } as React.CSSProperties}>
            46 seconds for about 3 cents
          </a>
          , and solved{" "}
          <a href="#agenthq" className="mark" style={{ "--i": 1 } as React.CSSProperties}>
            10 of 10 eval tasks on 18% fewer tokens
          </a>{" "}
          than one agent working alone. Its Researcher finds code with RepoLens, my{" "}
          <a href="#repolens" className="mark" style={{ "--i": 2 } as React.CSSProperties}>
            search tool that says “not found” instead of guessing
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
