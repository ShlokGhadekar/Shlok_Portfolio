"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-lavender/30 pt-20">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-40">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                        x: [0, 50, -30, 0],
                        y: [0, -30, 20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -40, 30, 0],
                        y: [0, 40, -20, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-40 right-20 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.1]"
                    >
                        AI Engineer building <span className="text-brand-blue">intelligent systems</span> that talk, think, and scale.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-lg leading-relaxed"
                    >
                        3rd-year Computer Science student at VIT building AI voice agents, ML systems, and scalable backend infrastructure.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-hover transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand-blue/20"
                        >
                            View Projects
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1YziHS98DvuKtK4QmI3usyxFMkSlzRnoU/view?usp=sharing"
                            target="_blank"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-text-primary font-medium rounded-lg hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 hover:shadow-md"
                        >
                            View Resume
                            <Download className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Content - Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* A more concrete SVG representation or image could go here, for now using abstract shapes code */}
                    <div className="relative w-full h-[600px] flex items-center justify-center">
                        <motion.div
                            animate={{
                                borderRadius: [
                                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                                ]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-[400px] h-[400px] bg-gradient-to-br from-brand-blue/10 to-purple-500/10 backdrop-blur-3xl"
                        />
                        {/* Floating Elements/Icons representing Tech Stack could be added here for more visual interest */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
