import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
      delay: 0.15 + i * 0.1,
    },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl w-full pt-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="font-mono text-xs text-fg-tertiary tracking-widest uppercase mb-8"
            >
              Full-stack engineer
            </motion.p>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-fg-primary leading-[0.9]">
              <motion.span
                variants={headingVariants}
                custom={0}
                className="block"
              >
                Allif
              </motion.span>
              <motion.span
                variants={headingVariants}
                custom={1}
                className="block"
              >
                Alfikri
              </motion.span>
            </h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-lg md:text-xl text-fg-secondary mt-8 max-w-xl leading-relaxed"
            >
              Building modern web and mobile applications with clean
              architecture, thoughtful systems design, and a focus on real user
              experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg
                           hover:bg-accent/90 transition-colors duration-200 text-sm"
              >
                View projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border-subtle text-fg-secondary font-medium rounded-lg
                           hover:border-border-hover hover:text-fg-primary transition-all duration-200 text-sm"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo — bareng heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-56 sm:w-64 lg:w-72">
              <div className="absolute -inset-2 rounded-2xl border border-border-subtle" />
              <img
                src="/photo.jpeg"
                alt="Allif Alfikri"
                className="relative w-full aspect-[2/3] object-cover rounded-xl grayscale-[20%]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
