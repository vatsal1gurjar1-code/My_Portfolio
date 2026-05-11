import { motion } from "framer-motion";
import { Timeline, type TimelineItem } from "@/components/Timeline";

const experienceItems: TimelineItem[] = [
  {
    title: "Junior Software Engineer",
    company: "Rang Digitech LLC",
    duration: "Jan 2026 - Present",
    points: [
      "Designed and developed a production-ready SaaS Daily Reporting System using React 18, TypeScript, and FastAPI, currently serving 10-25 active users.",
      "Built a configurable report template engine allowing admins to define custom KRA structures and role-based approval workflows.",
      "Implemented JWT authentication, Zustand state management, and used SQLAlchemy 2.0 with Pydantic v2 for robust data handling.",
      "Architected a flexible hierarchy model enabling admin-defined approval chains across unlimited organizational levels.",
      "Eliminated manual reporting processes through automated PostgreSQL-backed data pipelines.",
    ],
  },
  {
    title: "AI Automation Engineer (Intern)",
    company: "Rang Digitech LLC",
    duration: "Sep 2025 - Dec 2025",
    points: [
      "Developed AI-powered automation pipelines using n8n, LangChain, and OpenAI APIs for intelligent document processing.",
      "Engineered end-to-end Python automation workflows connecting LLMs to business systems via REST APIs.",
      "Integrated automation systems with FastAPI backends to reduce manual workflow overhead across the organization.",
    ],
  },
  {
    title: "Web Management Head",
    company: "Hexsociety",
    duration: "Mar 2023 - Oct 2024",
    points: [
      "Led development of Hexsociety.in using Node.js, HTML, CSS, and JavaScript, building a community platform with forums and events.",
      "Managed end-to-end technical setup, AV coordination, and logistics for 10+ community events with 50-200 attendees.",
    ],
  },
  {
    title: "Software Developer",
    company: "MSK Solutions",
    duration: "Feb 2024 - Apr 2024",
    points: [
      "Built a multimodal communication system integrating gesture recognition (OpenCV + Mediapipe), real-time speech-to-text, and multilingual translation.",
      "Trained a custom gesture recognition model achieving 84% accuracy on a self-curated dataset.",
      "Project advanced to Top 10 at GTU Code Unnati Innovation Marathon (600+ teams nationwide).",
    ],
  },
];

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Experience</p>
        <h1 className="section-title mt-4">Career timeline across software and automation roles.</h1>
      </div>
      <Timeline items={experienceItems} />
    </motion.section>
  );
}
