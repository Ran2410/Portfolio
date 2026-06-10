import { motion } from 'motion/react'
import { 
  SiReact, SiNodedotjs, SiExpress, SiLaravel, 
  SiPostgresql, SiMysql, SiFlutter, SiTailwindcss, 
  SiJavascript, SiPhp, SiPython, SiGit 
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
  }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

const skillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }
  }
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3">// About</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="font-body text-secondary max-w-md">
            Full-stack developer passionate about building products that make an impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Bio */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-6"
          >
            <motion.h3 
              variants={fadeIn}
              className="font-heading text-2xl font-bold text-foreground"
            >
              Who Am I?
            </motion.h3>
            <motion.div variants={fadeIn} className="space-y-4 text-secondary leading-relaxed">
              <p>
                I'm a full-stack developer and mobile app developer with expertise in creating modern, 
                responsive applications. I love turning complex problems into simple, elegant solutions 
                through clean code and thoughtful architecture.
              </p>
              <p>
                With a strong foundation in both web and mobile technologies, I focus on delivering 
                high-quality solutions that provide exceptional user experiences.
              </p>
              <p>
                Based in Depok, Indonesia — open to remote collaborations worldwide.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-3 gap-3 pt-4">
              {[
                { value: '10+', label: 'Projects' },
                { value: '3+', label: 'Years Exp' },
                { value: '12+', label: 'Technologies' },
              ].map(stat => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3 
              variants={fadeIn}
              className="font-heading text-2xl font-bold text-foreground mb-8"
            >
              Tech Stack
            </motion.h3>
            <motion.div variants={stagger} className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {skills.map(skill => {
                const IconComponent = skill.icon
                return (
                  <motion.div 
                    key={skill.name}
                    variants={skillItem}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass rounded-xl p-4 flex flex-col items-center gap-2 
                               hover:border-accent/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.06)]
                               transition-all duration-300 group cursor-default"
                  >
                    <IconComponent 
                      className="w-8 h-8"
                      color={skill.color}
                    />
                    <span className="text-xs text-secondary text-center group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}