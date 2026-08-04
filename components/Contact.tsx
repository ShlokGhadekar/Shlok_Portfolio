"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="section-divider py-24 md:py-28 bg-bg-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-panel relative bg-bg-card border border-border rounded-3xl p-7 sm:p-10 md:p-12 text-center overflow-hidden"
                >
                    {/* Ambient glows */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Dot grid overlay */}
                    <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none rounded-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="font-mono text-xs text-accent mb-4 opacity-70">{"// contact.sh"}</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-text-primary">
                            Let&apos;s build something{" "}
                            <span className="shimmer-text">dependable.</span>
                        </h2>
                        <p className="text-text-secondary text-base mb-10 leading-relaxed">
                            Open to software engineering opportunities across backend, distributed systems, and scalable products.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                            <Link
                                href="mailto:shlok.cse@gmail.com"
                                className="group flex items-center gap-2.5 px-6 py-3 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm glow-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
                            >
                                <Mail size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                                shlok.cse@gmail.com
                            </Link>
                            <Link
                                href="tel:+917058352354"
                                className="group flex items-center gap-2.5 px-6 py-3 bg-bg-elevated border border-border text-text-primary font-semibold rounded-full hover:border-accent/30 hover:bg-bg-elevated/80 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                            >
                                <Phone size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
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
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="p-3 bg-bg-elevated border border-border rounded-full hover:border-accent/40 hover:text-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 text-text-secondary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
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
