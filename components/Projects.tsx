"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "AuraOS",
        subtitle: "AI-Powered Personal Computing Agent for macOS",
        github: "https://github.com/ShlokGhadekar/AuraOS",
        tech: ["Python", "FastAPI", "MCP", "Groq", "SQLite", "ChromaDB", "Electron", "Swift"],
        highlights: [
            "Three-tier memory (SQLite · ChromaDB · in-process) for persistent semantic recall of project goals across sessions via vector search.",
            "5 modular MCP FastAPI servers with real write capabilities — GitHub repo/PR creation and native Swift/EventKit calendar integration.",
            "Diagnosed and fixed a multi-process SQLite write-contention bug via single-writer redesign.",
        ],
        accentColor: "#00D87E",
        accentClass: "text-accent border-accent/30 bg-accent/5",
        glowClass: "glow-green",
        dotColor: "#00D87E",
    },
    {
        title: "CollabEditor",
        subtitle: "Real-Time Collaborative Code Editor",
        github: "https://github.com/ShlokGhadekar/realtime-collab-editor",
        tech: ["Java 17", "Spring Boot 3", "WebSocket/STOMP", "React", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
        highlights: [
            "Multi-user editor with live sync across 7 languages (Monaco) and in-browser execution for Java, Python, and JavaScript via JWT-authenticated room sessions.",
            "Custom STOMP ChannelInterceptor for JWT auth on WebSocket frames; fixed React StrictMode double-mount and Monaco keystroke loss with uncontrolled-mode + 150ms debounce.",
            "Redis Pub/Sub for horizontal scaling across server instances — deployed with Docker on Render (backend) and Vercel (frontend).",
        ],
        accentColor: "#4493F8",
        accentClass: "text-brand-blue border-brand-blue/30 bg-brand-blue/5",
        glowClass: "glow-blue",
        dotColor: "#4493F8",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-bg-primary">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">// projects/</div>
                    <h2 className="text-3xl font-bold mb-12 text-text-primary">Featured Projects</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: index * 0.12 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`group bg-bg-card border border-border hover:border-opacity-60 rounded-2xl overflow-hidden transition-all hover:${project.glowClass} flex flex-col`}
                            >
                                {/* Terminal window bar */}
                                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-bg-elevated">
                                    <span className="w-3 h-3 rounded-full bg-ruby/70" />
                                    <span className="w-3 h-3 rounded-full bg-gold/60" />
                                    <span className="w-3 h-3 rounded-full bg-accent/60" />
                                    <span className="font-mono text-xs text-text-muted ml-3">
                                        ~/{project.title.toLowerCase()}
                                    </span>
                                </div>

                                <div className="p-7 flex flex-col flex-grow">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-text-muted mt-0.5">{project.subtitle}</p>
                                        </div>
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="text-text-muted hover:text-text-secondary transition-colors ml-4 shrink-0 mt-0.5"
                                        >
                                            <Github size={20} />
                                        </Link>
                                    </div>

                                    {/* Bullet highlights */}
                                    <ul className="space-y-3 my-5 flex-grow">
                                        {project.highlights.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                                                <span
                                                    className="font-mono text-xs shrink-0 mt-0.5 opacity-80"
                                                    style={{ color: project.accentColor }}
                                                >
                                                    //
                                                </span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 pt-5 border-t border-border mt-auto">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`font-mono text-xs px-2.5 py-1 rounded-md border ${project.accentClass}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
