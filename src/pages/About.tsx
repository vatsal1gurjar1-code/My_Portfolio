import { motion } from "framer-motion";
import { BriefcaseBusiness, Cpu, Database, Layers3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    title: "Enterprise Engineering",
    icon: BriefcaseBusiness,
    copy: "Building enterprise-grade reporting systems, approval workflows, and analytics-heavy interfaces for production teams.",
  },
  {
    title: "Modern Full Stack Web Development",
    icon: Layers3,
    copy: "Delivering React and FastAPI web applications with strong type safety, clean API design, and maintainable frontend architecture.",
  },
  {
    title: "Data Systems & PostgreSQL",
    icon: Database,
    copy: "Designing application flows backed by PostgreSQL, efficient schemas, and operational reporting requirements.",
  },
  {
    title: "AI Automation Engineering",
    icon: Cpu,
    copy: "Connecting LangChain, OpenAI APIs, and workflow tools to reduce repetitive work and accelerate internal operations.",
  },
];

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <SEOHead
        title="About Vatsal K. Gurjar | React & FastAPI Web Developer — Vadodara, India"
        description="Learn about Vatsal K. Gurjar — Full Stack Software Engineer and Web Developer from Vadodara, Gujarat, India. Specializing in React, FastAPI, TypeScript, PostgreSQL, and AI automation pipelines."
        canonical="/about"
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">About</h2>
          <h1 className="section-title mt-4">Engineering products with scale, clarity, and automation in mind.</h1>
        </div>
        <div className="space-y-6 text-base leading-8 text-muted-foreground">
          <p>
            Vatsal Gurjar is a full-stack software engineer and web developer working at
            Rang Digitech LLC where he builds enterprise-grade SaaS systems and AI automation pipelines.
          </p>
          <p>
            He specializes in modern web development using <strong className="text-foreground">React</strong>,{" "}
            <strong className="text-foreground">FastAPI</strong>, <strong className="text-foreground">TypeScript</strong>, and{" "}
            <strong className="text-foreground">PostgreSQL</strong>. His portfolio spans scalable web applications, automation
            workflows, and intelligent software systems.
          </p>
          <p>
            His work sits at the intersection of frontend architecture, backend reliability, operational analytics,
            and AI-driven workflow automation — making him a versatile full-stack web developer and engineer.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/projects" className="text-sm font-medium text-primary hover:underline">View Projects →</Link>
            <Link to="/skills" className="text-sm font-medium text-primary hover:underline">Technical Skills →</Link>
            <Link to="/experience" className="text-sm font-medium text-primary hover:underline">Work Experience →</Link>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-muted-foreground">
                  {area.copy}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
