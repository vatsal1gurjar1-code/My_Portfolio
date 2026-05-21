import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vatsalgurjar" },
  { label: "GitHub", icon: Github, href: "https://github.com/" },
  { label: "Email", icon: Mail, href: "mailto:vatsal1gurjar1@gmail.com" },
];

const siteLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12">
      <div className="page-shell">
        {/* Top row - brand + social */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-bold">Vatsal K. Gurjar</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Full Stack Software Engineer &amp; Web Developer
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Vadodara, Gujarat, India
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={link.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/30 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Internal site links - crawlable by Google */}
        <nav aria-label="Site links" className="mt-8 border-t border-white/10 pt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Quick Links
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {siteLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom row */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Vatsal K. Gurjar. Full Stack Software Engineer &amp; Web Developer Portfolio.
          </p>
          <p>Built with React, TypeScript &amp; FastAPI</p>
        </div>
      </div>
    </footer>
  );
}
