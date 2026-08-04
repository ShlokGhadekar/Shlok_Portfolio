"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Backend & Databases",
        items: ["Spring Boot 3", "Node.js", "FastAPI", "WebSocket/STOMP", "PostgreSQL", "Redis", "SQLite"],
    },
    {
        category: "Languages",
        items: ["Java", "Python", "TypeScript", "JavaScript", "Swift", "C/C++", "SQL"],
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "Google Cloud", "Git", "Linux", "Vercel", "Render"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Electron", "Monaco Editor"],
    },
    {
        category: "AI & ML",
        items: ["AI Agents", "MCP", "Groq", "ChromaDB", "TensorFlow", "HuggingFace", "LangChain"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-divider py-24 md:py-28 bg-bg-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">{"// skills.json"}</div>
                    <h2 className="text-3xl font-bold mb-12 text-text-primary">Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                        {skills.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="premium-card bg-bg-card border border-border rounded-2xl p-6 md:p-7"
                            >
                                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-4 opacity-80">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {group.items.map((item, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.05 + i * 0.04 }}
                                            whileHover={{ y: -1 }}
                                            className="px-3 py-1.5 bg-bg-elevated text-text-secondary text-xs font-mono rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
