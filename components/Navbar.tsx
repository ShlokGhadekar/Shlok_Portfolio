"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certs", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-bg-primary/90 backdrop-blur-md border-b border-border py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-mono text-sm font-semibold tracking-tight text-text-primary z-50 flex items-center gap-1"
                >
                    <span className="text-accent">~/</span>
                    shlok-ghadekar
                    <span className="cursor-blink text-accent ml-0.5">▋</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-mono text-xs text-text-secondary hover:text-accent transition-colors relative group uppercase tracking-widest"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-accent transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden z-50 text-text-primary rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                {/* Mobile menu */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={
                        isMobileMenuOpen
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.97, pointerEvents: "none" }
                    }
                    transition={{ duration: 0.2 }}
                    className="absolute top-0 left-0 w-full h-screen bg-bg-primary border-r border-border flex flex-col items-center justify-center gap-8 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-mono text-lg text-text-secondary hover:text-accent transition-colors uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            </div>
        </header>
    );
}
