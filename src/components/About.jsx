import { motion } from 'motion/react'
import {
  SiReact, SiNodedotjs, SiExpress, SiLaravel,
  SiPostgresql, SiMysql, SiFlutter, SiTailwindcss,
  SiJavascript, SiPhp, SiPython, SiGit
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'PHP', icon: SiPhp },
  { name: 'Python', icon: SiPython },
  { name: 'Git', icon: SiGit },
]

const stats = [
  { value: '10+', label: 'Projects shipped' },
  { value: '3+', label: 'Years building' },
  { value: '12+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-fg-tertiary tracking-widest uppercase mb-4">
            Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fg-primary tracking-tight">
            About
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5 text-fg-secondary leading-relaxed">
              <p>
                I'm a full-stack developer and mobile app engineer based in Depok, Indonesia. 
                I focus on building applications that are fast, maintainable, and genuinely useful 
                — from backend architecture to polished interfaces.
              </p>
              <p>
                My stack spans Laravel, Express, React, and Flutter. I care about clean architecture, 
                thoughtful database design, and the systems thinking that ties it all together.
              </p>
              <p>
                Currently open to remote collaborations and interesting projects worldwide.
              </p>
            </div>

            {/* Stats — compact row, not glass cards */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-border-subtle">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-fg-primary">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] text-fg-tertiary mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills — solid grid, no glass */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold text-fg-primary mb-6">
              Tech stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-bg-surface border border-border-subtle
                               hover:border-border-hover transition-colors duration-200 group cursor-default"
                  >
                    <Icon className="w-6 h-6 text-fg-tertiary group-hover:text-fg-secondary transition-colors" />
                    <span className="font-mono text-[10px] text-fg-tertiary group-hover:text-fg-secondary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
