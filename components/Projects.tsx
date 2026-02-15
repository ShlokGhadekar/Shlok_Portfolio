"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Conversational AI Sales Agent",
        description: "Real-time outbound AI voice agent with emotional intelligence and low-latency response.",
        tech: ["GPT-4", "Whisper", "Express.js", "Google TTS", "Twilio"],
        metrics: "Reduced latency dropouts by 40%",
        github: "#", // Placeholder
    },
    {
        title: "Dog Breed Identification",
        description: "Deep learning model for accurate dog breed classification using transfer learning.",
        tech: ["TensorFlow", "Keras", "OpenCV"],
        metrics: "85% validation accuracy",
        github: "#", // Placeholder
    },
    {
        title: "Heart Disease Prediction",
        description: "Machine learning model to predict heart disease risk factors with high accuracy.",
        tech: ["Scikit-learn", "Pandas", "NumPy"],
        metrics: "82% test accuracy",
        github: "#", // Placeholder
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-12 text-text-primary">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group bg-bg-lavender/30 border border-transparent hover:border-brand-blue/20 rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-brand-blue/5 flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white rounded-xl shadow-sm">
                                        <div className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue font-bold">
                                            {project.title[0]}
                                        </div>
                                    </div>
                                    <Link href={project.github} className="text-text-secondary hover:text-brand-blue transition-colors">
                                        <Github size={20} />
                                    </Link>
                                </div>

                                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-text-secondary mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <span className="text-sm font-semibold text-brand-blue bg-brand-blue/5 px-3 py-1 rounded-full">
                                        {project.metrics}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-text-secondary bg-white px-2.5 py-1 rounded-md border border-gray-100">
                                            {tech}
                                        </span>
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
