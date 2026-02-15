"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: ["Python", "Java", "C/C++", "SQL", "HTML/CSS", "JavaScript", "TypeScript"],
    },
    {
        category: "Frameworks & Tools",
        items: ["TensorFlow", "Keras", "Scikit-learn", "HuggingFace", "Next.js", "React", "Node.js"],
    },
    {
        category: "Platforms",
        items: ["Firebase", "Google Cloud", "DigitalOcean", "Render", "Railway", "Vercel"],
    },
    {
        category: "DevOps",
        items: ["Git", "Docker", "Postman", "Linux"],
    },
    {
        category: "Libraries",
        items: ["Pandas", "NumPy", "Seaborn", "Matplotlib"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-bg-mint/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-12 text-text-primary">Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-gray-200 pb-2">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-white text-text-secondary text-sm font-medium rounded-full border border-gray-100 shadow-sm hover:shadow-md hover:text-brand-blue transition-all cursor-default"
                                        >
                                            {item}
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
