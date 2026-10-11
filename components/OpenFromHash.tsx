"use client";

import { useEffect } from "react";

// Opens a project's <details> when it's linked to (from the hero, or a shared URL).
export default function OpenFromHash() {
  useEffect(() => {
    const open = (hash: string) => {
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (target instanceof HTMLDetailsElement) target.open = true;
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest?.('a[href^="#"]');
      if (link) open(link.getAttribute("href") ?? "");
    };

    open(window.location.hash);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
