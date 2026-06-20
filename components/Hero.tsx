"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const roles = [
  "AI Systems Engineer",
  "Backend Developer",
  "Full-Stack Builder",
  "Final Year @ VIT",
];

const codeSnippets = [
  {
    code: `async def semantic_search(query: str):\n    return await chromadb.find(query)`,
    top: "12%",
    right: "3%",
    delay: 0.6,
    duration: 5,
  },
  {
    code: `@mcp.tool()\ndef create_github_repo(name: str):\n    return gh.create(name)`,
    top: "68%",
    left: "2%",
    delay: 1.2,
    duration: 6,
  },
  {
    code: `// STOMP ChannelInterceptor\nJWT.verify(msg.headers["Authorization"])`,
    top: "22%",
    left: "2%",
    delay: 0.9,
    duration: 7,
  },
  {
    code: `redis.publish("room:42", delta)`,
    top: "78%",
    right: "4%",
    delay: 1.5,
    duration: 4.5,
  },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && chars < current.length) {
      timer = setTimeout(() => setChars((c) => c + 1), 75);
    } else if (!deleting && chars === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && chars > 0) {
      timer = setTimeout(() => setChars((c) => c - 1), 38);
    } else if (deleting && chars === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [chars, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-20">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-transparent to-bg-primary pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ duration: 1.5, delay: snippet.delay }}
          style={{
            top: snippet.top,
            left: "left" in snippet ? snippet.left : undefined,
            right: "right" in snippet ? snippet.right : undefined,
            animationDuration: `${snippet.duration}s`,
          }}
          className="absolute hidden xl:block font-mono text-xs text-text-secondary whitespace-pre bg-bg-card/70 border border-border/50 rounded-lg px-4 py-3 backdrop-blur-sm pointer-events-none select-none float-animate"
        >
          {snippet.code}
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent mb-6 flex items-center gap-1.5"
          >
            <span className="text-text-muted">~/shlok-ghadekar</span>
            <span className="text-text-muted">$</span>
            <span className="text-accent">whoami</span>
            <span className="cursor-blink text-accent ml-0.5">▋</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-text-primary leading-[1.0] mb-5"
          >
            Shlok<span className="text-accent">.</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 mb-8 h-10"
          >
            <span className="font-mono text-accent text-xl">//</span>
            <span className="font-mono text-xl text-text-secondary">
              {roles[roleIdx].slice(0, chars)}
            </span>
            <span className="cursor-blink font-mono text-xl text-accent">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl"
          >
            Final year CS student at VIT building agentic AI systems, real-time
            collaborative tools, and production-grade backend infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-bg-primary font-semibold rounded-lg hover:bg-accent-hover transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20 text-sm glow-green"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1YziHS98DvuKtK4QmI3usyxFMkSlzRnoU/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-border text-text-primary font-semibold rounded-lg hover:bg-bg-elevated hover:border-border-muted transition-all transform hover:-translate-y-0.5 text-sm"
            >
              View Resume
              <Download className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 pt-8 border-t border-border flex flex-wrap gap-10"
          >
            {[
              { value: "8.89", label: "CGPA" },
              { value: "2+", label: "Major Projects" },
              { value: "2", label: "Certifications" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-text-primary font-mono">
                  {stat.value}
                </p>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
