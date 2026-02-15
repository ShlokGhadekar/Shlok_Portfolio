export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-gray-100">
            <div className="container-custom text-center text-text-secondary text-sm">
                <p>© {new Date().getFullYear()} Shlok Ghadekar. All rights reserved.</p>
                <p className="mt-2 text-xs text-gray-400">Built with Next.js, TailwindCSS & Framer Motion</p>
            </div>
        </footer>
    );
}
