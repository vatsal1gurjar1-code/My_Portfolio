import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";

export const blogPosts = [
  {
    slug: "building-saas-reporting-system-react-fastapi",
    title: "Building a Production SaaS Daily Reporting System with React 18 & FastAPI",
    excerpt:
      "How I designed and shipped a role-based approval reporting SaaS used by 10–25 active users - covering the React 18 frontend, FastAPI backend, PostgreSQL schema design, JWT auth, and Zustand state management.",
    date: "2026-05-10",
    readTime: "8 min read",
    tags: ["React", "FastAPI", "SaaS", "PostgreSQL", "TypeScript"],
    coverAlt: "React 18 and FastAPI SaaS architecture diagram",
  },
  {
    slug: "automating-business-workflows-langchain-n8n",
    title: "How I Automated Business Workflows with LangChain and n8n",
    excerpt:
      "A practical guide to building AI-powered automation pipelines - using n8n as the orchestration layer, LangChain for LLM chaining, and FastAPI to expose business logic as REST APIs.",
    date: "2026-04-22",
    readTime: "6 min read",
    tags: ["LangChain", "n8n", "AI Automation", "Python", "FastAPI"],
    coverAlt: "AI automation pipeline diagram with LangChain and n8n",
  },
  {
    slug: "full-stack-engineer-journey-tech-stack",
    title: "From Intern to Full-Stack Engineer: My Tech Stack Journey",
    excerpt:
      "How I went from building gesture-recognition projects to shipping production SaaS platforms - the web development tools, frameworks, and skills that shaped my journey as a full-stack software engineer.",
    date: "2026-04-05",
    readTime: "5 min read",
    tags: ["Career", "Full Stack", "Web Development", "React", "Python"],
    coverAlt: "Full stack web developer journey from beginner to engineer",
  },
  {
    slug: "gesture-recognition-accessibility-silence-sense",
    title: "Gesture Recognition for Accessibility - Building Silence Sense",
    excerpt:
      "Inside the build of Silence Sense - an assistive technology web app using OpenCV and Mediapipe for real-time hand gesture recognition, achieving 84% accuracy and advancing to Top 10 at the GTU Innovation Marathon.",
    date: "2026-03-18",
    readTime: "7 min read",
    tags: ["Python", "OpenCV", "Accessibility", "Machine Learning", "Mediapipe"],
    coverAlt: "Hand gesture recognition assistive technology app built with OpenCV and Mediapipe",
  },
];

export function Blog() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <SEOHead
        title="Blog | Vatsal K. Gurjar"
        description="Technical blog by Vatsal K. Gurjar. Articles on React, FastAPI, SaaS development, PostgreSQL, and AI automation with LangChain and n8n."
        canonical="/blog"
      />

      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Blog</h2>
        <h1 className="section-title mt-4">Web development & AI automation articles.</h1>
        <p className="section-copy mt-4">
          Practical write-ups on full-stack web development, React, FastAPI, AI automation pipelines,
          and lessons from building production SaaS systems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <Link to={`/blog/${post.slug}`} className="block h-full">
              <Card className="group h-full transition-all hover:border-primary/30 hover:bg-secondary/40">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/projects" className="text-sm font-medium text-primary hover:underline">View Projects →</Link>
        <Link to="/skills" className="text-sm font-medium text-primary hover:underline">Technical Skills →</Link>
      </div>
    </motion.section>
  );
}
