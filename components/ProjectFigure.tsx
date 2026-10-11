import Image from "next/image";
import type { Figure } from "@/lib/projects";

function Bars({ figure }: { figure: Extract<Figure, { type: "bars" }> }) {
  const max = Math.max(...figure.rows.map((row) => row.value));
  return (
    <div className="plate">
      <p className="plate__title">{figure.title}</p>
      <ul className="bars">
        {figure.rows.map((row) => (
          <li key={row.label} className={row.picked ? "is-picked" : undefined} title={`${row.label}: ${row.value.toFixed(3)}`}>
            <span className="bars__label">{row.label}</span>
            <span className="bars__track">
              <span className="bars__bar" style={{ width: `${(row.value / max) * 100}%` }} />
            </span>
            <span className="bars__value">{row.value.toFixed(3)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dots({ figure }: { figure: Extract<Figure, { type: "dots" }> }) {
  const at = (value: number) => `${((value - figure.min) / (figure.max - figure.min)) * 100}%`;
  const ticks: number[] = [];
  for (let t = figure.min; t <= figure.max + 1e-9; t += 0.01) ticks.push(Number(t.toFixed(2)));

  return (
    <div className="plate">
      <p className="plate__title">{figure.title}</p>
      <ul className="dots">
        {figure.rows.map((row) => (
          <li key={row.label} className={row.picked ? "is-picked" : undefined} title={`${row.label}: ${row.value.toFixed(3)}`}>
            <span className="dots__label">{row.label}</span>
            <span className="dots__track">
              {ticks.map((t) => (
                <span key={t} className="dots__grid" style={{ left: at(t) }} />
              ))}
              <span className="dots__dot" style={{ left: at(row.value) }} />
            </span>
            <span className="dots__value">{row.value.toFixed(3)}</span>
          </li>
        ))}
        <li className="dots__axis" aria-hidden="true">
          <span />
          <span className="dots__track">
            {ticks.map((t) => (
              <span key={t} className="dots__tick" style={{ left: at(t) }}>
                {t.toFixed(2)}
              </span>
            ))}
          </span>
          <span />
        </li>
      </ul>
    </div>
  );
}

function Steps({ figure }: { figure: Extract<Figure, { type: "steps" }> }) {
  return (
    <div className="plate">
      <p className="steps__command">“{figure.command}”</p>
      <ol className="steps">
        {figure.steps.map((step) => (
          <li key={step.text}>
            <span className="steps__tool">{step.tool}</span>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function ProjectFigure({ figure }: { figure: Figure }) {
  return (
    <figure className="project-figure">
      {figure.type === "image" && (
        <Image className="screen" src={figure.src} width={figure.width} height={figure.height} alt={figure.alt} sizes="(max-width: 52rem) 100vw, 40rem" />
      )}
      {figure.type === "bars" && <Bars figure={figure} />}
      {figure.type === "dots" && <Dots figure={figure} />}
      {figure.type === "steps" && <Steps figure={figure} />}
      <figcaption className="caption">{figure.caption}</figcaption>
    </figure>
  );
}
