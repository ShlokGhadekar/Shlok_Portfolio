"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const certifications = [
    {
        name: "AWS Certified Solutions Architect",
        level: "Associate",
        code: "SAA-C03",
        issuer: "Amazon Web Services",
        color: "#F0A500",
        bgClass: "bg-gold/5 border-gold/20 hover:border-gold/40",
        textClass: "text-gold",
        badgeBg: "bg-gold/10",
        featured: true,
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" fill="#F0A500" fillOpacity="0.15" stroke="#F0A500" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 18.5L18.5 25L28 15" stroke="#F0A500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "Java SE 17 Developer",
        level: "Professional",
        code: "1Z0-829",
        issuer: "Oracle",
        color: "#E5534B",
        bgClass: "bg-ruby/5 border-ruby/20 hover:border-ruby/40",
        textClass: "text-ruby",
        badgeBg: "bg-ruby/10",
        featured: false,
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" fill="#E5534B" fillOpacity="0.15" stroke="#E5534B" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M15 14C15 14 14 19 17 21C20 23 18 27 18 27M20 13C20 13 21.5 16.5 20 19C18.5 21.5 22 26 22 26" stroke="#E5534B" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14 29H26" stroke="#E5534B" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="section-divider py-24 md:py-28 bg-bg-primary">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-xs text-accent mb-3 opacity-70">{"// certifications/"}</div>
                    <h2 className="text-3xl font-bold mb-12 text-text-primary">Certifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`premium-card relative bg-bg-card border rounded-2xl p-7 transition-all cursor-default overflow-hidden ${cert.bgClass} ${cert.featured ? "md:col-span-3 md:p-8" : "md:col-span-2"}`}
                            >
                                {/* Ambient glow in corner */}
                                <div
                                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                                    style={{ background: cert.color }}
                                />

                                {cert.featured && (
                                    <span className="absolute right-5 top-5 rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                                        Cloud
                                    </span>
                                )}

                                <div className="flex items-start gap-5 relative z-10">
                                    <div className={`p-3 rounded-xl ${cert.badgeBg} shrink-0`}>
                                        {cert.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <ShieldCheck size={14} className={cert.textClass} />
                                            <span className={`font-mono text-xs ${cert.textClass} uppercase tracking-widest`}>
                                                Certified
                                            </span>
                                        </div>
                                        <h3 className={`font-bold text-text-primary leading-snug ${cert.featured ? "text-lg" : "text-base"}`}>
                                            {cert.name}
                                        </h3>
                                        <p className={`text-sm font-semibold ${cert.textClass} mt-0.5`}>
                                            {cert.level}
                                        </p>
                                        <div className="mt-3 flex items-center gap-3">
                                            <span className="text-xs text-text-muted">{cert.issuer}</span>
                                            <span className={`font-mono text-xs px-2 py-0.5 rounded border ${cert.bgClass} ${cert.textClass}`}>
                                                {cert.code}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
