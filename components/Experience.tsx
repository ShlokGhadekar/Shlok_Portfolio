"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "AI Engineering Intern",
        company: "Bitlance Tech Hub",
        duration: "May 2025 – July 2025",
        description: [
            "Built production-grade AI voice agent using GPT-4, Whisper, and Google TTS.",
            "Integrated Twilio WebSockets with Express.js for real-time audio streaming.",
            "Built sentiment-aware assistant pipeline using n8n and OpenAI.",
            "Developed automated SEO blog generator using GNews, GPT-4, DALL·E, and WordPress REST API.",
            "Dockerized and deployed services across Google Cloud and Twilio.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-bg-card">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">// experience/</div>
                    <h2 className="text-3xl font-bold mb-12 text-text-primary">Experience</h2>

                    <div className="max-w-3xl space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-bg-elevated border border-border rounded-2xl p-8 hover:border-border-muted transition-colors"
                            >
                                <div className="flex flex-col md:flex-row justify-between mb-6 gap-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                                        <p className="text-accent font-mono text-sm mt-0.5">{exp.company}</p>
                                    </div>
                                    <span className="font-mono text-xs text-text-muted bg-bg-card border border-border rounded-full px-3 py-1.5 h-fit">
                                        {exp.duration}
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                                            <span className="text-accent font-mono text-xs shrink-0 mt-0.5 opacity-70">//</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
