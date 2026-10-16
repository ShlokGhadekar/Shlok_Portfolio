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

function Pairs({ figure }: { figure: Extract<Figure, { type: "pairs" }> }) {
  return (
    <div className="plate">
      <p className="plate__title">{figure.title}</p>
      <p className="legend">
        {figure.series.map((name, s) => (
          <span key={name} className={`legend__item legend__item--${s}`}>
            {name}
          </span>
        ))}
      </p>
      {/* Each metric is its own small chart, scaled from zero to the larger of the two values. */}
      <dl className="pairs">
        {figure.rows.map((row) => {
          const max = Math.max(...row.values);
          return (
            <div key={row.label} className="pairs__row">
              <dt>{row.label}</dt>
              {row.values.map((value, s) => (
                <dd key={s} className={`pairs__item pairs__item--${s}`} title={`${figure.series[s]}: ${row.format.replace("{}", String(value))}`}>
                  <span className="pairs__track">
                    <span className="pairs__bar" style={{ width: `${(value / max) * 100}%` }} />
                  </span>
                  <span className="pairs__value">
                    <span className="sr-only">{figure.series[s]}: </span>
                    {row.format.replace("{}", String(value))}
                  </span>
                </dd>
              ))}
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default function ProjectFigure({ figure }: { figure: Figure }) {
  return (
    <figure className="project-figure">
      {figure.type === "video" && (
        <video
          className="screen"
          src={figure.src}
          poster={figure.poster}
          width={figure.width}
          height={figure.height}
          controls
          muted
          playsInline
          preload="none"
          aria-label={figure.label}
        />
      )}
      {figure.type === "image" && (
        <Image className="screen" src={figure.src} width={figure.width} height={figure.height} alt={figure.alt} sizes="(max-width: 52rem) 100vw, 40rem" />
      )}
      {figure.type === "bars" && <Bars figure={figure} />}
      {figure.type === "dots" && <Dots figure={figure} />}
      {figure.type === "pairs" && <Pairs figure={figure} />}
      <figcaption className="caption">{figure.caption}</figcaption>
    </figure>
  );
}
