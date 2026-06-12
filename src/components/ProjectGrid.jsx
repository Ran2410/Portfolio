import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";
import SplitReveal from "./SplitReveal";

const projects = [
  {
    id: 1,
    title: "Sisfo Sarpras",
    description:
      "School infrastructure management system with Laravel backend and Flutter mobile app for borrowing & returning items.",
    tags: ["Laravel", "MySQL", "Flutter"],
    category: "fullstack",
    image: "/projects/sarpras.png",
    link: "https://github.com/Ran2410/Web-Laravel-Sarpras",
    featured: true,
  },
  {
    id: 2,
    title: "Schedulingo",
    description:
      "Modern task management web app with to-do lists, editing, and reminder features for daily productivity.",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    category: "web",
    image: "/projects/schedulingo.png",
    link: "https://github.com/Ran2410/Schedulingo",
    featured: true,
  },
  {
    id: 3,
    title: "AI Knowledge Base",
    description:
      "Full-stack RAG system with Express, PostgreSQL pgvector, and OpenRouter AI integration.",
    tags: ["Express", "PostgreSQL", "OpenRouter"],
    category: "fullstack",
    image: "/projects/aibase.png",
    link: "https://github.com/Ran2410/ai-knowledge-base",
    featured: false,
  },
  {
    id: 4,
    title: "KlikAja",
    description:
      "E-commerce platform with Laravel & Livewire — seamless product exploration, cart, and checkout.",
    tags: ["Laravel", "Livewire", "TailwindCSS"],
    category: "web",
    image: "/projects/klikaja.png",
    link: "https://github.com/Ran2410/e-commerce",
    featured: false,
  },
  {
    id: 5,
    title: "StarMart",
    description:
      "Food ordering mobile application built with Flutter — responsive interface and fast ordering experience.",
    tags: ["Flutter", "Dart"],
    category: "mobile",
    image: "/projects/starmart.png",
    link: "https://github.com/Ran2410/Flutter-Slicing",
    featured: false,
  },
  {
    id: 6,
    title: "Slapp",
    description:
      "Real-time chat application built with Node.js and Socket.io for seamless communication.",
    tags: ["Node.js", "Socket.io"],
    category: "web",
    image: "/projects/slapp.png",
    link: "#",
    featured: false,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs text-fg-tertiary tracking-widest uppercase mb-4">
              Selected work
            </p>
            <SplitReveal
              as="h2"
              className="font-display text-4xl md:text-5xl font-bold text-fg-primary tracking-tight"
            >
              Projects
            </SplitReveal>
          </div>

          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.value
                    ? "bg-fg-primary text-bg-primary"
                    : "bg-bg-surface text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated border border-border-subtle"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                isTouch={isTouch}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-mono text-sm text-fg-tertiary">
              No projects in this category
            </p>
          </motion.div>
        )}

        <div className="text-center mt-16">
          <a
            href="https://github.com/Ran2410"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-200 font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all on GitHub
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// === ProjectCard component (extracted for tilt logic) ===
function ProjectCard({ project, index, hoveredId, setHoveredId, isTouch }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    damping: 20,
    stiffness: 200,
  });

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (isTouch || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredId(null);
  };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target={project.link.startsWith("http") ? "_blank" : undefined}
      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`group block bg-bg-surface rounded-xl border border-border-subtle
                 hover:border-border-hover transition-colors duration-300 overflow-hidden relative
                 ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <motion.div
        style={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-bg-elevated">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
              loading="lazy"
              animate={{ scale: hoveredId === project.id ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-xs text-fg-tertiary">
                {project.category.toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-fg-primary group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <svg
              className={`w-4 h-4 mt-1 text-fg-tertiary transition-all duration-300 flex-shrink-0 ${
                hoveredId === project.id
                  ? "opacity-100 -translate-y-0.5 translate-x-0.5"
                  : "opacity-0"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>

          <p className="font-body text-sm text-fg-secondary mt-2 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex gap-2 flex-wrap mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-fg-tertiary bg-bg-elevated px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Glare effect */}
      {!isTouch && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.06), transparent 50%)`,
            mixBlendMode: "overlay",
          }}
        />
      )}
    </motion.a>
  );
}
