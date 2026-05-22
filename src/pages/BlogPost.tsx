import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { blogPosts } from "./Blog";

const blogContent: Record<string, React.ReactNode> = {
  "building-saas-reporting-system-react-fastapi": (
    <article className="prose prose-invert max-w-none">
      <h2>Why We Built a Custom Reporting System</h2>
      <p>
        At Rang Digitech LLC, the team was drowning in manual daily reports sent over WhatsApp and email.
        Managers had no central visibility, and approvals were done informally. We needed a production-grade
        <strong> SaaS Daily Reporting System</strong> - one that could handle role-based approval workflows,
        configurable KRA structures, and real-time data across the organisation.
      </p>

      <h2>The Tech Stack</h2>
      <p>
        We chose <strong>React 18 + Vite</strong> for the frontend for its fast HMR and excellent TypeScript
        support. <strong>FastAPI</strong> powered the backend - its async performance and automatic OpenAPI docs
        made it perfect for a data-heavy application. <strong>PostgreSQL</strong> with <strong>SQLAlchemy 2.0</strong>{" "}
        and <strong>Pydantic v2</strong> gave us strict schema validation and efficient ORM queries.
      </p>

      <h2>Authentication & State</h2>
      <p>
        JWT authentication is handled server-side with FastAPI's dependency injection. On the frontend,
        <strong> Zustand</strong> manages auth state and the active report context. We deliberately avoided
        Redux - Zustand's minimal API kept the bundle lean and the code readable.
      </p>

      <h2>Role-Based Approval Workflows</h2>
      <p>
        The most complex feature was the multi-level approval chain. Admins define the hierarchy -
        Team Lead → Manager → Director - and the system routes each daily report through those levels
        automatically. SQLAlchemy handles the recursive approval chain model cleanly via self-referential
        foreign keys on the <code>approval_levels</code> table.
      </p>

      <h2>Lessons Learned</h2>
      <p>
        Ship with a simple schema first and add complexity iteratively. Our initial PostgreSQL schema
        was over-normalised. We simplified it in the second sprint and query performance improved by ~40%.
        For any <strong>full stack web development</strong> project, always profile your database queries early.
      </p>

      <h2>Results</h2>
      <p>
        The system now serves 10–25 active users daily with zero downtime. Manual reporting overhead was
        eliminated completely. This project demonstrated how a focused <strong>React and FastAPI web application</strong>{" "}
        can replace an entire operational process.
      </p>
    </article>
  ),

  "automating-business-workflows-langchain-n8n": (
    <article className="prose prose-invert max-w-none">
      <h2>The Problem: Repetitive Manual Workflows</h2>
      <p>
        Every business has workflows that follow the same pattern: receive a document, extract data,
        route it somewhere, send a notification. Doing this manually is expensive and error-prone.
        <strong> AI automation engineering</strong> with <strong>LangChain</strong> and <strong>n8n</strong>{" "}
        can eliminate these bottlenecks entirely.
      </p>

      <h2>Why n8n + LangChain?</h2>
      <p>
        <strong>n8n</strong> is a self-hostable workflow automation tool - think Zapier but with full
        code access. It handles triggers, routing, and integrations visually. <strong>LangChain</strong>{" "}
        sits inside n8n's Python nodes to chain LLM calls, embeddings, and retrieval-augmented generation (RAG).
        Together they form a powerful <strong>AI automation pipeline</strong>.
      </p>

      <h2>Architecture: Document Processing Pipeline</h2>
      <p>
        Our pipeline: an email arrives with a PDF attachment → n8n triggers a webhook → a Python service
        extracts text → LangChain sends it to GPT-4o with a structured extraction prompt → the result is
        written to PostgreSQL via our FastAPI REST API. The whole pipeline runs in under 8 seconds.
      </p>

      <h2>Connecting to FastAPI</h2>
      <p>
        We exposed business logic as FastAPI endpoints that n8n calls via HTTP nodes. This kept the LLM
        logic decoupled from the business layer - a clean separation that made testing and iteration much
        easier for our <strong>Python automation workflows</strong>.
      </p>

      <h2>Key Takeaways</h2>
      <p>
        Design your LLM prompts as versioned templates. Use structured output (JSON mode / Pydantic models)
        to make LLM responses deterministic. And always add a human-in-the-loop review step for high-stakes
        decisions - <strong>AI automation</strong> augments humans, it doesn't replace judgement.
      </p>
    </article>
  ),

  "full-stack-engineer-journey-tech-stack": (
    <article className="prose prose-invert max-w-none">
      <h2>Starting Out: Python and Machine Learning</h2>
      <p>
        My first serious project was <strong>Silence Sense</strong> - an accessibility web app using
        Python, OpenCV, and Mediapipe. I didn't know React existed. I barely knew what a REST API was.
        That project taught me that real <strong>software engineering</strong> is about solving problems,
        not knowing every framework.
      </p>

      <h2>The Web Development Jump</h2>
      <p>
        When I joined Hexsociety as Web Management Head, I was writing plain HTML, CSS, and JavaScript.
        Then I discovered <strong>React</strong> - and everything changed. Component thinking, state
        management, declarative UI. It clicked immediately. This was the foundation of my
        <strong> full-stack web development</strong> journey.
      </p>

      <h2>Going Full Stack with FastAPI</h2>
      <p>
        Node.js was my first backend. But when I discovered <strong>FastAPI</strong> - async Python,
        automatic docs, Pydantic validation - I made the switch. Paired with <strong>PostgreSQL</strong>{" "}
        and SQLAlchemy, it gave me a backend stack I could ship production systems on with confidence.
      </p>

      <h2>The Current Stack</h2>
      <p>
        Today I build with <strong>React 18 + TypeScript + Vite</strong> on the frontend,
        <strong> FastAPI + PostgreSQL + SQLAlchemy 2.0</strong> on the backend, and
        <strong> LangChain + n8n</strong> for AI automation layers. This full-stack combination
        covers 95% of what modern product teams actually need.
      </p>

      <h2>Advice for Aspiring Web Developers</h2>
      <p>
        Pick one thing, go deep, ship something real. A deployed project - no matter how small - teaches
        you more than 10 courses. Your <strong>web developer portfolio</strong> is your strongest job application.
      </p>
    </article>
  ),

  "gesture-recognition-accessibility-silence-sense": (
    <article className="prose prose-invert max-w-none">
      <h2>The Idea: Communication Without Barriers</h2>
      <p>
        Speech and hearing impairment affects hundreds of millions globally. Most communication tools
        require the other person to know sign language. <strong>Silence Sense</strong> was built to
        remove that barrier - an <strong>assistive technology</strong> application that translates hand
        gestures to speech in real time, using only a standard webcam.
      </p>

      <h2>How the Gesture Recognition Works</h2>
      <p>
        We use <strong>MediaPipe Hands</strong> to detect 21 hand landmarks per frame at ~30 FPS. These
        landmarks feed into a custom classifier built with <strong>scikit-learn</strong>. After iterating
        on the dataset and feature engineering, we achieved <strong>84% accuracy</strong> on a self-curated
        dataset of 26 static gestures (A–Z ASL alphabet).
      </p>

      <h2>Real-Time Speech Output</h2>
      <p>
        Recognised gestures are assembled into words and sentences. The text-to-speech conversion uses
        Python's <strong>pyttsx3</strong> library for offline synthesis. For reverse communication
        (speech-to-text), we integrated Google's Speech Recognition API - keeping the full pipeline
        real-time and bilingual.
      </p>

      <h2>Multilingual Support</h2>
      <p>
        By routing recognised text through <strong>Google Translate API</strong>, the system supports
        multiple output languages. A user signs in English ASL and the other party can hear the output
        in Hindi, Gujarati, or any supported language.
      </p>

      <h2>Competition Result</h2>
      <p>
        Silence Sense was submitted to the <strong>GTU Code Unnati Innovation Marathon</strong> - a
        national competition with 600+ teams, developed in collaboration with SAP Labs India and Edunet
        Foundation. We advanced to the <strong>Top 10 at the GTU level</strong>. The project validated
        that <strong>machine learning for accessibility</strong> has immediate real-world impact.
      </p>
    </article>
  ),
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const content = blogContent[slug!];

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <SEOHead
        title={`${post.title} | Vatsal K. Gurjar Blog`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />

      {/* Back link */}
      <Link
        to="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10 mt-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary"
            >
              <Tag className="h-2.5 w-2.5" aria-hidden="true" />
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
        <p className="mt-4 text-lg text-muted-foreground leading-8 max-w-3xl">{post.excerpt}</p>
      </header>

      <hr className="border-white/10 mb-10" />

      {/* Article body */}
      <div className="max-w-3xl space-y-6 text-base leading-8 text-muted-foreground
        [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3
        [&_strong]:text-foreground [&_code]:rounded [&_code]:bg-secondary/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-primary">
        {content}
      </div>

      <hr className="border-white/10 mt-12 mb-8" />

      {/* Footer nav */}
      <div className="flex flex-wrap gap-4">
        <Link to="/blog" className="text-sm font-medium text-primary hover:underline">← All Articles</Link>
        <Link to="/projects" className="text-sm font-medium text-primary hover:underline">View Projects →</Link>
        <Link to="/contact" className="text-sm font-medium text-primary hover:underline">Hire Me →</Link>
      </div>
    </motion.section>
  );
}
