"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-bg-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">// about.md</div>
                    <h2 className="text-3xl font-bold mb-10 text-text-primary">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="md:col-span-2 space-y-5 text-base text-text-secondary leading-relaxed">
                            <p>
                                I&apos;m Shlok Ghadekar, a final year Computer Science student passionate about building
                                production-grade software — from agentic AI systems with multi-tier memory to real-time
                                collaborative editors that scale horizontally.
                            </p>
                            <p>
                                I enjoy working across the full stack: designing modular backend architectures, solving
                                tricky concurrency bugs, and shipping clean frontends. Currently focused on MCP-based
                                AI agents and distributed systems.
                            </p>
                        </div>

                        <div className="bg-bg-card border border-border rounded-2xl p-7 space-y-7">
                            <div>
                                <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">Education</h4>
                                <p className="font-bold text-text-primary leading-snug">B.Tech Computer Science &amp; Engineering</p>
                                <p className="text-text-secondary text-sm mt-1">Vellore Institute of Technology</p>
                                <p className="font-mono text-xs text-accent mt-1.5">Final Year</p>
                            </div>

                            <div className="border-t border-border pt-5">
                                <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">Performance</h4>
                                <p className="font-bold text-text-primary text-4xl font-mono">
                                    8.89
                                    <span className="text-base font-normal text-text-muted ml-1.5">CGPA</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
