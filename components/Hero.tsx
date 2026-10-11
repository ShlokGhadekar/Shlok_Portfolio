export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__statement">
        I build backend systems and ML pipelines. I measure them, and I write down what didn’t work.
      </h1>

      <p className="hero__evidence">
        Lately that’s been a secrets manager that served{" "}
        <a href="#vaultik" className="mark" style={{ "--i": 0 } as React.CSSProperties}>
          56,334 requests without a single failure
        </a>
        , a demand forecaster that beats its baseline by{" "}
        <a href="#shelfwise" className="mark" style={{ "--i": 1 } as React.CSSProperties}>
          28% per store but only 0.5% per item
        </a>
        , and a code search tool that{" "}
        <a href="#repolens" className="mark" style={{ "--i": 2 } as React.CSSProperties}>
          says &ldquo;not found&rdquo; instead of guessing
        </a>
        .
      </p>

      <p className="hero__status">
        Final-year Computer Science at VIT, Vellore. Looking for software engineering roles.
      </p>
    </section>
  );
}
