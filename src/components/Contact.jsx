import { useState } from "react";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault()
  
  const res = await fetch('https://formspree.io/f/xdavdbaq', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })

  if (res.ok) {
    alert('Message sent! ✅')
    setForm({ name: '', email: '', message: '' })
  } else {
    alert('Failed to send. Try again.')
  }
}

  const contactLinks = [
    {
      type: "email",
      href: "mailto:ran241027@gmail.com",
      label: "ran241027@gmail.com",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      type: "location",
      label: "Depok, Indonesia",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      type: "github",
      href: "https://github.com/Ran2410",
      label: "@Ran2410",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/allif-alfikri-4b5041377",
      label: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3">// Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-secondary">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            {["name", "email", "message"].map((field) => (
              <motion.div key={field} variants={fadeIn}>
                <label className="block text-sm text-secondary mb-2 capitalize">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 glass rounded-xl text-foreground placeholder:text-secondary/40 
                               focus:outline-none focus:border-accent/30 focus:shadow-[0_0_20px_rgba(34,197,94,0.06)]
                               transition-all duration-300 resize-none"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    placeholder={
                      field === "email" ? "your@email.com" : `Your ${field}`
                    }
                    className="w-full px-4 py-3 glass rounded-xl text-foreground placeholder:text-secondary/40 
                               focus:outline-none focus:border-accent/30 focus:shadow-[0_0_20px_rgba(34,197,94,0.06)]
                               transition-all duration-300"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              variants={fadeIn}
              type="submit"
              disabled={isSubmitting}
              whileHover={{ y: -2, boxShadow: "0 0 30px rgba(34,197,94,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-accent text-black font-semibold rounded-xl
                         transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                         hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
            className="md:col-span-2 space-y-4"
          >
            <motion.div
              variants={fadeIn}
              className="glass rounded-2xl p-6 space-y-4"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Contact Info
              </h3>

              {contactLinks.map((item, index) => (
                <motion.div
                  key={item.type}
                  variants={fadeIn}
                  custom={index}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-secondary hover:text-foreground transition-colors group"
                    >
                      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-sm group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-secondary">
                      <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}