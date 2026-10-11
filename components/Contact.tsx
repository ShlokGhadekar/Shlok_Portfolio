import { links } from "@/lib/links";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        If you’re hiring, or building something you want a second pair of hands on, email me.
      </h2>
      <a href={`mailto:${links.email}`} className="contact__email">
        {links.email}
      </a>
      <p className="contact__elsewhere">
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={links.codolio} target="_blank" rel="noreferrer">
          Codolio
        </a>
        <a href={links.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </p>
    </section>
  );
}
