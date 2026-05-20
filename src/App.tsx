import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/pages/About";
import { Achievements } from "@/pages/Achievements";
import { Certifications } from "@/pages/Certifications";
import { Contact } from "@/pages/Contact";
import { Experience } from "@/pages/Experience";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Skills } from "@/pages/Skills";

// Lazy-loaded: Three.js + react-three-fiber are ~500 KB — keep them out of the
// initial bundle so the first paint is fast. The canvas fades in asynchronously.
const MeshBackground = lazy(() =>
  import("@/components/MeshBackground").then((m) => ({ default: m.MeshBackground }))
);

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <Suspense fallback={<div className="pointer-events-none fixed inset-0 z-0 bg-slate-50 dark:bg-[#020617]" />}>
        <div className="overflow-hidden">
          <MeshBackground />
        </div>
      </Suspense>
      <Navbar />
      <main className="relative overflow-visible">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
