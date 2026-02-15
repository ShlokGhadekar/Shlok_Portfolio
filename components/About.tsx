"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8 text-text-primary">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6 text-lg text-text-secondary leading-relaxed">
                            <p>
                                I’m Shlok Lobhas Ghadekar, a Computer Science student passionate about building production-grade AI systems. My work spans conversational AI, machine learning, backend architecture, and cloud deployment.
                            </p>
                            <p>
                                I enjoy turning complex problems into real-world AI solutions that scale. Currently, I'm focusing on building intelligent voice agents and optimizing ML pipelines.
                            </p>
                        </div>

                        <div className="bg-bg-lavender p-8 rounded-2xl space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Education</h4>
                                <p className="font-bold text-text-primary">B.Tech Computer Science & Engineering</p>
                                <p className="text-text-secondary">Vellore Institute of Technology</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Performance</h4>
                                <p className="font-bold text-text-primary text-3xl">8.77 <span className="text-base font-normal text-text-secondary">CGPA</span></p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
