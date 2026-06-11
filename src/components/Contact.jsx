import { useState } from 'react'
import { motion } from 'motion/react'

const contactLinks = [
  {
    type: 'email',
    href: 'mailto:ran241027@gmail.com',
    label: 'ran241027@gmail.com',
  },
  {
    type: 'github',
    href: 'https://github.com/Ran2410',
    label: 'GitHub',
  },
  {
    type: 'linkedin',
    href: 'https://www.linkedin.com/in/allif-alfikri-4b5041377',
    label: 'LinkedIn',
  },
  {
    type: 'location',
    label: 'Depok, Indonesia',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const res = await fetch('https://formspree.io/f/xdavdbaq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-fg-tertiary tracking-widest uppercase mb-4">
            Start a conversation
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fg-primary tracking-tight">
            Get in touch
          </h2>
          <p className="font-body text-fg-secondary mt-4 max-w-md">
            Have a project in mind or just want to connect? Drop a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-fg-tertiary mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-bg-surface border border-border-subtle rounded-lg
                           text-fg-primary placeholder:text-fg-tertiary
                           focus:outline-none focus:border-accent/30 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-fg-tertiary mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-bg-surface border border-border-subtle rounded-lg
                           text-fg-primary placeholder:text-fg-tertiary
                           focus:outline-none focus:border-accent/30 transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-fg-tertiary mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-bg-surface border border-border-subtle rounded-lg
                           text-fg-primary placeholder:text-fg-tertiary resize-none
                           focus:outline-none focus:border-accent/30 transition-colors duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg
                         hover:bg-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="font-mono text-xs text-red-400">Failed to send. Try again or email directly.</p>
            )}
          </motion.form>

          {/* Contact info — simplified, no glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="font-display text-sm font-semibold text-fg-primary mb-5">
              Also here
            </h3>
            <div className="space-y-3">
              {contactLinks.map((item) => (
                <div key={item.type}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-fg-secondary hover:text-fg-primary transition-colors duration-200 group"
                    >
                      <span className="font-mono text-[11px] text-fg-tertiary w-16 uppercase">
                        {item.type}
                      </span>
                      <span className="text-sm group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-fg-secondary">
                      <span className="font-mono text-[11px] text-fg-tertiary w-16 uppercase">
                        {item.type}
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
