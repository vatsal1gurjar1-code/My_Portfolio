import { motion } from "framer-motion";
import { SkillCard } from "@/components/SkillCard";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C", "R"],
  },
  {
    title: "AI & Automation",
    skills: ["LangChain", "n8n", "OpenAI APIs", "OpenCV", "Mediapipe", "RAG Systems", "Document Processing"],
  },
  {
    title: "Frontend",
    skills: ["React 18", "Vite", "Tailwind CSS", "Zustand", "React Hook Form", "Recharts", "shadcn/ui"],
  },
  {
    title: "Backend & DB",
    skills: ["FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "PostgreSQL", "Node.js", "REST APIs", "JWT Auth"],
  },
];

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <SEOHead
        title="Technical Skills | Vatsal K. Gurjar"
        description="Technical skills of Vatsal K. Gurjar. Proficient in React 18, TypeScript, Python, FastAPI, PostgreSQL, LangChain, Node.js, and AI automation workflows."
        canonical="/skills"
      />

      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Skills</h2>
        <h1 className="section-title mt-4">A stack built for modern product engineering.</h1>
        <p className="section-copy mt-4">
          Strong across frontend web development, backend APIs, AI automation tooling, and data-driven
          product workflows. From React and TypeScript to FastAPI and PostgreSQL.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/projects" className="text-sm font-medium text-primary hover:underline">See Projects →</Link>
        <Link to="/experience" className="text-sm font-medium text-primary hover:underline">Work Experience →</Link>
      </div>
    </motion.section>
  );
}
