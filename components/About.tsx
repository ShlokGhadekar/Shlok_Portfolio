"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="section-divider py-24 md:py-28 bg-bg-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">{"// about.md"}</div>
                    <h2 className="text-3xl font-bold mb-10 text-text-primary">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                        <div className="md:col-span-2 space-y-5 text-base text-text-secondary leading-8">
                            <p>
                                I&apos;m Shlok Ghadekar, a final-year Computer Science student focused on backend engineering,
                                distributed systems, and production-quality software — from persistent storage engines to
                                real-time collaborative applications that scale horizontally.
                            </p>
                            <p>
                                I enjoy designing modular architectures, reasoning through concurrency and data consistency,
                                and shipping clean interfaces around dependable systems. AI agents are one area of interest,
                                alongside scalable APIs, storage, and distributed backend design.
                            </p>

                            <div className="terminal-panel mt-8" aria-label="Currently building">
                                <div className="terminal-panel__bar">
                                    <span className="w-2.5 h-2.5 rounded-full bg-ruby/70" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold/60" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                                    <span className="ml-2 font-mono text-[11px] text-text-muted">currently-building.log</span>
                                </div>
                                <div className="p-5 font-mono text-sm space-y-2.5">
                                    <p className="text-accent">Currently Building</p>
                                    {["AuraOS", "Persistent AI memory", "Concurrent storage engines", "Distributed backend systems"].map((item) => (
                                        <p key={item} className="text-text-secondary">
                                            <span className="text-text-muted mr-2">&gt;</span>{item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="premium-card bg-bg-card border border-border rounded-2xl p-7 space-y-7 h-fit">
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
