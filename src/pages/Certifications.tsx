import { motion } from "framer-motion";
import { ExternalLink, FileCheck, GraduationCap, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const certifications = [
  {
    title: "Claude AI with Amazon Bedrock",
    issuer: "Anthropic",
    date: "April 2026",
    icon: ShieldCheck,
    link: "/certificates/claude-in-action.pdf",
    description: "Advanced implementation of Claude AI models using Amazon Bedrock infrastructure.",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "March 2026",
    icon: FileCheck,
    link: "/certificates/mcp-advanced.pdf",
    description: "Deep dive into MCP for building sophisticated AI agent ecosystems and tool integrations.",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "March 2026",
    icon: FileCheck,
    link: "/certificates/intro-to-mcp.pdf",
    description: "Foundational knowledge of the Model Context Protocol for standardizing AI communication.",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University",
    date: "January 2024",
    icon: GraduationCap,
    link: "/certificates/machine-learning.pdf",
    description: "Core machine learning concepts including linear regression, logistic regression, and neural networks.",
  },
  {
    title: "Foundations of UX Design",
    issuer: "Google",
    date: "January 2024",
    icon: GraduationCap,
    link: "/certificates/google-ux.pdf",
    description: "Principles of user-centered design, accessibility, and high-fidelity prototyping.",
  },
];

export function Certifications() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <SEOHead
        title="Certifications | Vatsal K. Gurjar — AI, Machine Learning & Software Developer"
        description="Professional certifications of Vatsal K. Gurjar — Claude AI with Amazon Bedrock (Anthropic), Model Context Protocol, Supervised Machine Learning (Stanford), Google UX Design. Full Stack Software Engineer credentials."
        canonical="/certifications"
      />
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Credentials</h2>
        <h1 className="section-title mt-4">Verified expertise and certifications in AI, ML & software engineering.</h1>
        <p className="section-copy mt-4">
          Professional certifications from industry-leading institutions — Anthropic, Stanford University,
          and Google — covering AI engineering, machine learning, and software development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Card className="group relative flex h-full flex-col overflow-hidden border-white/10 bg-secondary/20 transition-all hover:bg-secondary/40">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />

                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/80">
                      {cert.issuer}
                    </p>
                    <CardTitle className="text-xl leading-tight transition-colors group-hover:text-primary">
                      {cert.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>
                    <p className="text-xs font-medium text-foreground/60">{cert.date}</p>
                  </div>

                  <div className="mt-auto">
                    {cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                          variant: "secondary",
                          size: "default",
                          className: "w-fit rounded-full",
                        })}
                      >
                        View Credential
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
