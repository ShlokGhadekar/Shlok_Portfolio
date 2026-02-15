"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "AI Engineering Intern",
        company: "Bitlance Tech Hub",
        duration: "May 2025 – July 2025",
        description: [
            "Built production-grade AI voice agent using GPT-4, Whisper, and Google TTS.",
            "Integrated Twilio WebSockets with Express.js for real-time streaming.",
            "Built sentiment-aware assistant using n8n and OpenAI.",
            "Developed automated SEO blog generator using GNews, GPT-4, DALL·E, and WordPress REST API.",
            "Dockerized and deployed services across Google Cloud and Twilio.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-bg-blue/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-12 text-text-primary text-center">Experience</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                                        <p className="text-brand-blue font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-text-secondary mt-2 md:mt-0 font-medium">{exp.duration}</span>
                                </div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-text-secondary">
                                            <span className="mr-3 text-brand-blue mt-1.5">•</span>
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
