import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText, Presentation, Github, CheckCircle2 } from "lucide-react";
import { projects } from "./Projects";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects" className={buttonVariants({ variant: "secondary" })}>
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="page-shell pt-6 pb-12 sm:pt-10 sm:pb-20"
    >
      <Link
        to="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} className="bg-secondary/50">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-3xl border border-white/10 bg-secondary/20 shadow-2xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>
        </div>

        <div className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-white/10 bg-secondary/20 p-8">
            <h3 className="mb-6 text-xl font-semibold">Key Features</h3>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Resources & Links</h3>
            <div className="grid gap-4">
              {project.resources?.report && (
                <a
                  href={project.resources.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "secondary",
                    className: "justify-start gap-3 h-14 rounded-2xl border-white/5 hover:border-primary/20",
                  })}
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold">Technical Report</span>
                    <span className="text-xs text-muted-foreground">PDF Documentation</span>
                  </div>
                </a>
              )}
              {project.resources?.ppt && (
                <a
                  href={project.resources.ppt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "secondary",
                    className: "justify-start gap-3 h-14 rounded-2xl border-white/5 hover:border-primary/20",
                  })}
                >
                  <Presentation className="h-5 w-5 text-primary" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold">Presentation</span>
                    <span className="text-xs text-muted-foreground">PowerPoint Slides</span>
                  </div>
                </a>
              )}
              <a
                href="#"
                className={buttonVariants({
                  variant: "secondary",
                  className: "justify-start gap-3 h-14 rounded-2xl border-white/5 hover:border-primary/20 opacity-50 cursor-not-allowed",
                })}
              >
                <Github className="h-5 w-5 text-primary" />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">Source Code</span>
                  <span className="text-xs text-muted-foreground">GitHub Repository</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
