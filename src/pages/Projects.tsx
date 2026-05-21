import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

export const projects = [
  {
    slug: "silence-sense",
    title: "Silence Sense",
    description: "Assistive technology and accessibility web app integrating gesture recognition and real-time speech translation for the hearing impaired - built with Python, OpenCV, and Mediapipe.",
    longDescription: "Silence Sense is a groundbreaking assistive technology communication tool designed to bridge the gap between the hearing impaired and the general public. By utilizing MediaPipe and OpenCV for machine learning-based hand gesture recognition, it achieves 84% accuracy in recognizing complex hand gestures and translating them into spoken language in real-time. The system also features reverse translation (speech-to-text) and supports multiple languages via Google APIs - a true accessibility web app built for impact.",
    features: [
      "Gesture recognition (84% accuracy) using OpenCV and Mediapipe machine learning",
      "Real-time speech-to-text and text-to-speech integration",
      "Multilingual translation via Google APIs",
      "Top 10 Finalist at GTU Code Unnati Innovation Marathon (600+ teams)",
    ],
    tech: ["Python", "OpenCV", "Mediapipe", "Tkinter", "Google APIs"],
    heroImage: "/projects/silent-sense-hero.png",
    resources: {
      report: "/projects/silent-sense-report.pdf",
      ppt: "/projects/silent-sense-presentation.pptx",
      logo: "/projects/silent-sense-logo.png",
    },
  },
  {
    slug: "cloverse",
    title: "Cloverse",
    description: "AI-powered EdTech SaaS platform for collaborative learning - real-time video conferencing, AI document summarization, and automatic quiz generation for distributed student teams.",
    longDescription: "Cloverse is a comprehensive EdTech SaaS ecosystem for modern students. It combines real-time video conferencing (WebRTC) with AI-driven document summarization and automatic quiz generation using OpenAI APIs. Built with a full MERN stack and Auth0 for secure authentication, this collaborative learning software empowers teams to work effectively across borders. A full-stack web development project demonstrating real-world AI integration.",
    features: [
      "Real-time chat and video conferencing via WebRTC",
      "Collaborative document editing and AI note summarization (OpenAI APIs)",
      "AI-driven quiz generation and performance feedback",
      "Secure cross-platform authentication using Auth0",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "OpenAI APIs", "Auth0"],
    heroImage: "/projects/cloverse-hero.png",
    resources: {
      ppt: "/projects/cloverse-presentation.pptx",
    },
  },
  {
    slug: "s-mart",
    title: "S-mart",
    description: "Machine learning recommendation system for personalized grocery shopping - Python data science project using collaborative filtering to match dietary patterns and user preferences.",
    longDescription: "S-mart is a Python data science project that leverages machine learning to transform the grocery shopping experience. By analyzing past purchase history and user-defined dietary goals, it uses collaborative filtering via scikit-learn to provide highly accurate grocery recommendation results. This recommendation system ensures users discover healthy alternatives that match their lifestyle - demonstrating practical applications of data science in e-commerce.",
    features: [
      "Collaborative filtering recommendation system using scikit-learn",
      "Analyzing user purchase history and dietary patterns",
      "Optimized grocery selection workflows using data science",
    ],
    tech: ["Python", "scikit-learn", "NumPy", "Pandas"],
    heroImage: "/projects/smart-hero.png",
  },
  {
    slug: "linkedin-outreach",
    title: "LinkedIn Outreach Platform",
    description: "B2B SaaS sales automation and lead generation tool - enterprise platform automating LinkedIn connection requests, follow-up sequences, and campaign analytics for outreach workflows.",
    longDescription: "This B2B SaaS platform automates the tedious parts of LinkedIn networking and lead generation. It features automated connection requests, personalized follow-up sequences, and an integrated analytics dashboard to track campaign performance. Built for scalability using Node.js, Puppeteer, PostgreSQL, and React - it handles complex outreach logic while maintaining a human-centric approach to sales automation.",
    features: [
      "Automated connection requests and follow-up sequences (sales automation)",
      "Campaign-based outreach and message sequencing for lead generation",
      "Integrated analytics dashboard for B2B campaign performance tracking",
    ],
    tech: ["Node.js", "Puppeteer", "PostgreSQL", "React"],
    heroImage: "/projects/linkedin-hero.png",
  },
];

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <SEOHead
        title="Projects | Web Developer Portfolio - React, FastAPI, AI Apps | Vatsal K. Gurjar"
        description="Portfolio projects by Vatsal K. Gurjar - Assistive technology apps, AI-powered EdTech SaaS platforms, machine learning recommendation systems, and B2B sales automation tools built with React, Python, FastAPI."
        canonical="/projects"
      />

      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Projects</h2>
        <h1 className="section-title mt-4">Selected web development and AI automation portfolio.</h1>
        <p className="section-copy mt-4">
          A mix of accessibility-focused web apps, AI-powered SaaS platforms, machine learning projects, and
          B2B automation tools - built for real-world business outcomes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/skills" className="text-sm font-medium text-primary hover:underline">Technical Skills Used →</Link>
        <Link to="/experience" className="text-sm font-medium text-primary hover:underline">Work Experience →</Link>
        <Link to="/blog" className="text-sm font-medium text-primary hover:underline">Read the Blog →</Link>
      </div>
    </motion.section>
  );
}
