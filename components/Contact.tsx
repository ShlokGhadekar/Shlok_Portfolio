"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-bg-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-bg-card border border-border rounded-3xl p-12 text-center overflow-hidden"
                >
                    {/* Ambient glows */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Dot grid overlay */}
                    <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none rounded-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="font-mono text-xs text-accent mb-4 opacity-70">// contact.sh</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-text-primary">
                            Let&apos;s build something{" "}
                            <span className="shimmer-text">intelligent.</span>
                        </h2>
                        <p className="text-text-secondary text-base mb-10 leading-relaxed">
                            Open to opportunities in AI Engineering, Backend Development, and Scalable Systems.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                            <Link
                                href="mailto:shlok.cse@gmail.com"
                                className="flex items-center gap-2.5 px-6 py-3 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-all text-sm glow-green"
                            >
                                <Mail size={16} />
                                shlok.cse@gmail.com
                            </Link>
                            <Link
                                href="tel:+917058352354"
                                className="flex items-center gap-2.5 px-6 py-3 bg-bg-elevated border border-border text-text-primary font-semibold rounded-full hover:border-border-muted transition-all text-sm"
                            >
                                <Phone size={16} />
                                +91-7058352354
                            </Link>
                        </div>

                        <div className="flex justify-center gap-4">
                            {[
                                { href: "https://www.linkedin.com/in/shlokghadekar/", icon: <Linkedin size={20} />, label: "LinkedIn" },
                                { href: "https://github.com/ShlokGhadekar", icon: <Github size={20} />, label: "GitHub" },
                                { href: "https://codolio.com/profile/shlokg1611", icon: <Code size={20} />, label: "Codolio" },
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    title={social.label}
                                    className="p-3 bg-bg-elevated border border-border rounded-full hover:border-accent/40 hover:text-accent text-text-secondary transition-all"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
