"use client";

import { useEffect, useRef } from "react";

// The AgentHQ demo plays muted on a loop, unless the visitor has asked for reduced motion.
export default function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) el.pause();
    else el.play().catch(() => {});
  }, []);

  return (
    <figure className="hero__media">
      <video
        ref={video}
        className="screen"
        src="/work/agenthq.mp4"
        poster="/work/agenthq.jpg"
        width={1600}
        height={900}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="AgentHQ demo: four agents take “add rate limiting to /login” to a reviewed, tested change, then wait for sign-off"
      />
      <figcaption className="caption">
        <a href="#agenthq">AgentHQ</a> on a real run. Four agents plan, research, write and review a change, re-run the
        tests themselves, then stop and wait for a person to approve the pull request.
      </figcaption>
    </figure>
  );
}
