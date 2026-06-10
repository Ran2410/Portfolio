import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
    gradient: "from-blue-500/20 to-cyan-500/20",
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
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "StarMart",
    description:
      "Food ordering mobile application built with Flutter — responsive interface and fast ordering experience.",
    tags: ["Flutter", "Dart"],
    category: "mobile",
    image: "/projects/starmart.png",
    link: "https://github.com/Ran2410/Flutter-Slicing",
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20",
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
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "AI Knowledge Base",
    description:
      "Full-stack RAG system with Express, PostgreSQL pgvector, and OpenRouter AI integration.",
    tags: ["Express", "PostgreSQL", "AI"],
    category: "fullstack",
    image: "/projects/aibase.png",
    link: "https://github.com/Ran2410/ai-knowledge-base",
    featured: false,
    gradient: "from-violet-500/20 to-indigo-500/20",
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
    gradient: "from-cyan-500/20 to-blue-500/20",
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
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setVisibleProjects(
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-accent text-sm mb-3 inline-flex items-center gap-2"
              >
                <span className="w-8 h-px bg-accent/50" />
                // Portfolio
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="font-body text-secondary max-w-md"
              >
                A selection of recent work showcasing full-stack development and
                mobile applications.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2 flex-wrap"
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.value
                      ? "bg-accent text-black shadow-lg shadow-accent/25"
                      : "glass text-secondary hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <span>{filter.icon}</span>
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 flex justify-between items-center px-6 py-4 glass rounded-2xl max-w-md mx-auto"
        >
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-accent">
              {visibleProjects.length}
            </div>
            <div className="text-xs text-secondary">Projects</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-accent">
              {visibleProjects.filter((p) => p.featured).length}
            </div>
            <div className="text-xs text-secondary">Featured</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-accent">
              {new Set(visibleProjects.flatMap((p) => p.tags)).size}
            </div>
            <div className="text-xs text-secondary">Technologies</div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                onHoverStart={() => setHoveredCard(project.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative glass rounded-2xl overflow-hidden group
                           transition-all duration-500
                           ${project.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""}
                           hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 flex flex-col gap-4">
                  {/* Project media area */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-surface/80 to-surface/30">
                    {/* Project screenshot */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Fallback icon kalau gak ada gambar */
                      <motion.div
                        animate={{
                          scale: hoveredCard === project.id ? 1.1 : 1,
                          rotate: hoveredCard === project.id ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center text-6xl opacity-30"
                      >
                        {project.category === "mobile"
                          ? "📱"
                          : project.category === "fullstack"
                            ? "⚡"
                            : "🌐"}
                      </motion.div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                        View Project →
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <motion.div
                        animate={{ x: hoveredCard === project.id ? 5 : 0 }}
                        className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </motion.div>
                    </div>

                    <p className="font-body text-sm text-secondary/80 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tags with animation */}
                    <div className="flex gap-2 flex-wrap mt-3">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.05 }}
                          className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full
                                     hover:bg-accent/20 transition-colors duration-300 cursor-pointer
                                     border border-accent/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Tech stack icons placeholder */}
                    <div className="flex gap-1 mt-2 pt-2 border-t border-white/5">
                      <span className="text-xs text-secondary/60">
                        Tech stack:
                      </span>
                      <span className="text-xs text-accent/80">
                        {project.tags.slice(0, 2).join(" · ")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {visibleProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No projects found
            </h3>
            <p className="text-secondary">Try a different filter category</p>
          </motion.div>
        )}

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Ran2410"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full text-secondary hover:text-accent transition-all duration-300 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>View all projects on GitHub</span>
            <motion.svg
              animate={{ x: hoveredCard ? 5 : 0 }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
