export default function Footer() {
    return (
        <footer className="py-8 bg-bg-primary border-t border-border">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3 text-text-muted text-xs font-mono">
                <p>© {new Date().getFullYear()} Shlok Ghadekar</p>
                <p>Built with Next.js · Tailwind v4 · Framer Motion</p>
            </div>
        </footer>
    );
}
