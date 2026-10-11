import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import OpenFromHash from "@/components/OpenFromHash";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <>
      <header className="masthead page">
        <a href="#top" className="masthead__name">
          Shlok Ghadekar
        </a>
        <nav aria-label="Primary" className="masthead__nav">
          <a href="#work">Work</a>
          <a href={links.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="top" className="page">
        <Hero />
        <Work />
        <Background />
        <Contact />
      </main>
      <OpenFromHash />
    </>
  );
}
