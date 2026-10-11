"use client";

import { useEffect, useRef } from "react";

// The AuraOS demo plays muted on a loop, unless the visitor has asked for reduced motion.
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
        src="/work/auraos.mp4"
        poster="/work/auraos.jpg"
        width={1600}
        height={900}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="AuraOS demo: the request “continue my auraos project” recalls the last session and opens the workspace"
      />
      <figcaption className="caption">
        <a href="#auraos">AuraOS</a>, my macOS agent. “Continue my auraos project” pulls up the last session’s next step and
        open GitHub issues, then opens the workspace.
      </figcaption>
    </figure>
  );
}
