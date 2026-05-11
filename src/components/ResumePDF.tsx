import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const BLUE = "#2563eb";
const DARK = "#0f172a";
const MUTED = "#475569";
const LIGHT_BG = "#f1f5f9";
const BORDER = "#e2e8f0";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: DARK,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    backgroundColor: "#ffffff",
  },

  // ── Header ──────────────────────────────────────────────────────
  header: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: BLUE,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    letterSpacing: 0.5,
  },
  nameAccent: {
    color: BLUE,
  },
  title: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    marginTop: 3,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 7,
  },
  contactItem: {
    fontSize: 8.5,
    color: MUTED,
  },

  // ── Two-column layout ───────────────────────────────────────────
  body: {
    flexDirection: "row",
    gap: 18,
    flex: 1,
  },
  leftCol: {
    width: "35%",
    gap: 14,
  },
  rightCol: {
    flex: 1,
    gap: 14,
  },

  // ── Section ─────────────────────────────────────────────────────
  section: {
    gap: 6,
  },
  sectionLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },

  // ── Summary ─────────────────────────────────────────────────────
  summary: {
    fontSize: 8.5,
    color: MUTED,
    lineHeight: 1.6,
  },

  // ── Skills ──────────────────────────────────────────────────────
  skillGroup: {
    marginBottom: 5,
  },
  skillGroupTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 3,
  },
  skillPills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  pill: {
    backgroundColor: LIGHT_BG,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 7.5,
    color: DARK,
  },

  // ── Experience / Education entries ──────────────────────────────
  entry: {
    marginBottom: 8,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  entryTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    flex: 1,
  },
  // Education-specific title (no flex:1 since it's not in a row)
  eduTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  entryDuration: {
    fontSize: 7.5,
    color: MUTED,
    textAlign: "right",
  },
  entryCompany: {
    fontSize: 8.5,
    color: BLUE,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 2,
  },
  bulletDot: {
    fontSize: 8.5,
    color: BLUE,
    marginTop: 0.5,
  },
  bulletText: {
    fontSize: 8,
    color: MUTED,
    lineHeight: 1.5,
    flex: 1,
  },

  // ── Projects ────────────────────────────────────────────────────
  projectEntry: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 8,
    color: MUTED,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  techChip: {
    backgroundColor: "#dbeafe",
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 7,
    color: BLUE,
  },

  // ── Achievements ────────────────────────────────────────────────
  achieveEntry: {
    marginBottom: 5,
  },
  achieveTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  achieveDesc: {
    fontSize: 8,
    color: MUTED,
    marginTop: 1,
  },
});

// ── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return <Text style={styles.sectionLabel}>{label}</Text>;
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>›</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

// ── Document ─────────────────────────────────────────────────────────────────

export function ResumePDF() {
  return (
    <Document
      title="Vatsal K. Gurjar – Resume"
      author="Vatsal K. Gurjar"
      subject="Full Stack Software Engineer"
    >
      <Page size="A4" style={styles.page}>
        {/* ── HEADER ── */}
        <View style={styles.header}>
          <Text style={styles.name}>
            Vatsal K. <Text style={styles.nameAccent}>Gurjar</Text>
          </Text>
          <Text style={styles.title}>Full Stack & AI Automation Engineer</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>Location: Vadodara, Gujarat, India</Text>
            <Text style={styles.contactItem}>Email: vatsal1gurjar1@gmail.com</Text>
            <Text style={styles.contactItem}>LinkedIn: linkedin.com/in/vatsalgurjar</Text>
          </View>
        </View>

        {/* ── BODY ── */}
        <View style={styles.body}>
          {/* ── LEFT COLUMN ── */}
          <View style={styles.leftCol}>
            {/* Summary */}
            <View style={styles.section}>
              <SectionLabel label="Summary" />
              <Text style={styles.summary}>
                Full-stack Software Engineer and AI/ML Automation Engineer with hands-on production
                experience building SaaS platforms, AI automation pipelines, and role-based
                enterprise systems. Currently working at Rang Digitech LLC delivering
                production-grade software and intelligent automation systems.
              </Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <SectionLabel label="Skills" />
              {[
                {
                  title: "Languages",
                  skills: ["Python", "TypeScript", "JavaScript", "C", "R"],
                },
                {
                  title: "AI & Automation",
                  skills: ["LangChain", "n8n", "OpenAI APIs", "OpenCV", "Mediapipe", "RAG"],
                },
                {
                  title: "Frontend",
                  skills: ["React 18", "Vite", "Tailwind CSS", "Zustand", "shadcn/ui"],
                },
                {
                  title: "Backend & DB",
                  skills: ["FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "PostgreSQL", "JWT Auth"],
                },
              ].map((group) => (
                <View key={group.title} style={styles.skillGroup}>
                  <Text style={styles.skillGroupTitle}>{group.title}</Text>
                  <View style={styles.skillPills}>
                    {group.skills.map((s) => (
                      <Text key={s} style={styles.pill}>{s}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            {/* Certifications */}
            <View style={styles.section}>
              <SectionLabel label="Certifications" />
              {[
                { title: "Claude AI with Bedrock", issuer: "Anthropic", date: "2026" },
                { title: "Model Context Protocol", issuer: "Anthropic", date: "2026" },
                { title: "Machine Learning", issuer: "Stanford", date: "2024" },
                { title: "UX Design Foundations", issuer: "Google", date: "2024" },
              ].map((c) => (
                <View key={c.title} style={styles.achieveEntry}>
                  <Text style={styles.achieveTitle}>{c.title}</Text>
                  <Text style={styles.achieveDesc}>{c.issuer} | {c.date}</Text>
                </View>
              ))}
            </View>

            {/* Education */}
            <View style={styles.section}>
              <SectionLabel label="Education" />
              <View style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.eduTitle}>B.Tech, Computer Science</Text>
                  <Text style={styles.entryDuration}>2021 – 2025</Text>
                </View>
                <Text style={styles.entryCompany}>ITM (SLS) University, Vadodara</Text>
              </View>
            </View>
          </View>

          {/* ── RIGHT COLUMN ── */}
          <View style={styles.rightCol}>
            {/* Experience */}
            <View style={styles.section}>
              <SectionLabel label="Experience" />

              {[
                {
                  title: "Junior Software Engineer",
                  company: "Rang Digitech LLC",
                  duration: "Jan 2026 – Present",
                  points: [
                    "Developed a SaaS Daily Reporting System using React 18 and FastAPI, serving 10-25 active users.",
                    "Built a configurable report template engine for custom KRA structures and approval workflows.",
                    "Implemented JWT auth and used SQLAlchemy 2.0 with Pydantic v2 for data handling.",
                    "Eliminated manual reporting through PostgreSQL-backed automation pipelines.",
                  ],
                },
                {
                  title: "AI Automation Engineer",
                  company: "Rang Digitech LLC",
                  duration: "Sep 2025 – Dec 2025",
                  points: [
                    "Developed AI automation pipelines using n8n, LangChain, and OpenAI APIs.",
                    "Engineered end-to-end Python workflows connecting LLMs to business systems.",
                  ],
                },
                {
                  title: "Web Management Head",
                  company: "Hexsociety",
                  duration: "Mar 2023 – Oct 2024",
                  points: [
                    "Led development of community platform Hexsociety.in using Node.js.",
                    "Managed tech logistics for 10+ events with 50-200 attendees.",
                  ],
                },
                {
                  title: "Software Developer",
                  company: "MSK Solutions",
                  duration: "Feb 2024 – Apr 2024",
                  points: [
                    "Built gesture recognition system (OpenCV) with 84% accuracy.",
                    "Top 10 Finalist at GTU Code Unnati Innovation Marathon.",
                  ],
                },
              ].map((exp) => (
                <View key={exp.title} style={styles.entry}>
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>{exp.title}</Text>
                    <Text style={styles.entryDuration}>{exp.duration}</Text>
                  </View>
                  <Text style={styles.entryCompany}>{exp.company}</Text>
                  {exp.points.map((p) => (
                    <Bullet key={p} text={p} />
                  ))}
                </View>
              ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
              <SectionLabel label="Projects" />

              {[
                {
                  title: "Cloverse – AI Collaborative Platform",
                  desc: "Built full-stack platform with real-time chat, WebRTC video, and AI-driven note summarization/quiz generation.",
                  tech: ["React", "Node.js", "WebRTC", "OpenAI", "Auth0"],
                },
                {
                  title: "S-mart – Recommendation Engine",
                  desc: "Developed personalized grocery recommendation engine using collaborative filtering and scikit-learn.",
                  tech: ["Python", "scikit-learn", "Pandas"],
                },
                {
                  title: "Silence Sense",
                  desc: "Gesture-to-text translation app with 84% accuracy; integrated Google Speech/Translation APIs.",
                  tech: ["Python", "OpenCV", "Mediapipe", "Google APIs"],
                },
              ].map((proj) => (
                <View key={proj.title} style={styles.projectEntry}>
                  <Text style={styles.projectTitle}>{proj.title}</Text>
                  <Text style={styles.projectDesc}>{proj.desc}</Text>
                  <View style={styles.techRow}>
                    {proj.tech.map((t) => (
                      <Text key={t} style={styles.techChip}>{t}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
