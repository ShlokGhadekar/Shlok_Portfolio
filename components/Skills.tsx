"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: ["Python", "Java", "TypeScript", "JavaScript", "Swift", "C/C++", "SQL"],
    },
    {
        category: "AI & Agents",
        items: ["FastAPI", "MCP", "Groq", "ChromaDB", "TensorFlow", "HuggingFace", "LangChain"],
    },
    {
        category: "Backend & Databases",
        items: ["Spring Boot 3", "Node.js", "WebSocket/STOMP", "PostgreSQL", "Redis", "SQLite"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Electron", "Monaco Editor"],
    },
    {
        category: "DevOps & Cloud",
        items: ["Docker", "AWS", "Git", "Google Cloud", "Vercel", "Render", "Linux"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-bg-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">// skills.json</div>
                    <h2 className="text-3xl font-bold mb-12 text-text-primary">Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {skills.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-muted transition-colors"
                            >
                                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-4 opacity-80">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.05 + i * 0.04 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-1.5 bg-bg-elevated text-text-secondary text-xs font-mono rounded-md border border-border hover:border-accent/30 hover:text-accent transition-all cursor-default"
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
