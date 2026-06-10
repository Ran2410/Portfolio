import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5
      
      const orb = heroRef.current.querySelector('.hero-orb')
      if (orb) {
        orb.style.transform = `translate(${x * 30}px, ${y *
            30}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div 
        className="hero-orb absolute top-1/3 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-secondary">Available for work</span>
        </motion.div>

        <motion.h1 
          variants={item}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
        >
          Allif <span className="text-accent">Alfikri</span>
        </motion.h1>

        <motion.p variants={item} className="font-body text-xl md:text-2xl text-secondary mb-4">
          Full Stack Developer
        </motion.p>

        <motion.p variants={item} className="font-body text-lg text-secondary/70 mb-10 max-w-lg mx-auto leading-relaxed">Building modern web & mobile applications with clean architecture and great user experience.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects"
            className="px-8 py-4 bg-accent text-black font-semibold rounded-xl 
                       hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 glass rounded-xl font-semibold text-foreground 
                       hover:border-accent/30 hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mt-12">
          {['React', 'Node.js', 'PostgreSQL', 'Laravel', 'Flutter'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 glass rounded-full text-sm text-secondary 
                         hover:text-accent hover:border-accent/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}