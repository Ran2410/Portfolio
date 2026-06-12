import { motion } from 'motion/react'

export default function SplitReveal({
    as: Tag = 'span',
    children,
    className = '',
    delay = 0,
    stagger = 0.04,
    duration = 0.5,
    ...rest
}) {
    const text = typeof children === 'string' ? children : ''
    const letters = text.split('')

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    }

    const letterVariants = {
        hidden: {opacity: 0, y: '100%'},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                ease: [0.22, 0.61, 0.36, 1],
            },
        },
    }

    return (
    <Tag className={className} {...rest}>
      <motion.span
        className="inline-block overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={letterVariants}
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
