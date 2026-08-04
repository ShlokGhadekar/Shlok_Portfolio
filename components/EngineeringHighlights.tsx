"use client";

import { motion } from "framer-motion";
import { Bot, Braces, CloudCog, Cpu, Network, Radio } from "lucide-react";

const highlights = [
    {
        title: "Real-time Systems",
        description: "WebSocket and Pub/Sub architectures built for low-latency collaboration and synchronized state.",
        icon: Radio,
    },
    {
        title: "Distributed Architecture",
        description: "Horizontally scalable services designed around clear boundaries, messaging, and resilient data flow.",
        icon: Network,
    },
    {
        title: "Concurrent Programming",
        description: "Thread-safe storage and workload testing grounded in synchronization, contention, and latency tradeoffs.",
        icon: Cpu,
    },
    {
        title: "Backend APIs",
        description: "Modular APIs with authentication, persistence, integrations, and production-focused failure handling.",
        icon: Braces,
    },
    {
        title: "AI Agents",
        description: "Tool-using software with persistent memory and practical integrations, treated as engineered systems.",
        icon: Bot,
    },
    {
        title: "Cloud Deployment",
        description: "Containerized services deployed across modern cloud platforms with portability and operability in mind.",
        icon: CloudCog,
    },
];

export default function EngineeringHighlights() {
    return (
        <section className="pb-24 md:pb-28 bg-bg-primary" aria-labelledby="engineering-highlights-title">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">{"// engineering/highlights"}</div>
                    <h2 id="engineering-highlights-title" className="text-3xl font-bold mb-10 text-text-primary">
                        Engineering Highlights
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon;

                            return (
                                <motion.article
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: index * 0.06 }}
                                    whileHover={{ y: -3 }}
                                    className="premium-card group rounded-2xl border border-border bg-bg-card p-6"
                                >
                                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-elevated text-accent transition-colors duration-300 group-hover:border-accent/30">
                                        <Icon size={18} aria-hidden="true" />
                                    </div>
                                    <h3 className="text-base font-bold text-text-primary">{highlight.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-text-secondary">{highlight.description}</p>
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
