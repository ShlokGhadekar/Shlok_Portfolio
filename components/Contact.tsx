"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-brand-blue rounded-3xl p-12 text-center text-white relative overflow-hidden"
                >
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-white blur-3xl" />
                        <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-purple-500 blur-3xl opacity-50" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s build something intelligent.</h2>
                        <p className="text-blue-100 text-lg mb-10">
                            Open to opportunities in AI Engineering, Backend Development, and Scalable Systems.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                            <Link
                                href="mailto:shlok.cse@gmail.com"
                                className="flex items-center gap-3 px-6 py-3 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-50 transition-colors"
                            >
                                <Mail size={20} />
                                shlok.cse@gmail.com
                            </Link>
                            <Link
                                href="tel:+917058352354"
                                className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors border border-blue-500"
                            >
                                <Phone size={20} />
                                +91-7058352354
                            </Link>
                        </div>

                        <div className="flex justify-center gap-6">
                            <Link href="https://www.linkedin.com/in/shlokghadekar/" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="https://github.com/ShlokGhadekar" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Github size={24} />
                            </Link>
                            {/* Codolio */}
                            <Link href="https://codolio.com/profile/shlokg1611" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white" title="Codolio">
                                <Code size={24} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
