export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-bold text-fg-primary">AA</span>
          <span className="font-mono text-xs text-fg-tertiary">
            © {new Date().getFullYear()} Allif Alfikri
          </span>
        </div>

        <div className="flex items-center gap-6">
          {['Projects', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="flex items-center gap-1.5 text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-200"
        >
          Top
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
