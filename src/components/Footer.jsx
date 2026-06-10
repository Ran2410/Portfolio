import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-center gap-2 text-sm text-secondary"
          >
            <span className="font-heading font-bold text-foreground">AA</span>
            <span>© {new Date().getFullYear()} Allif Alfikri</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-center gap-6 text-sm text-secondary"
          >
            {["Home", "Projects", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>

          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            href="#"
            className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
          >
            Back to top
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-secondary/50">
            Designed with Liquid Glass • Built with React + Motion + Tailwind
            CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
