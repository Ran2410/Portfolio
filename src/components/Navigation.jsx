import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show nav on scroll
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
      
      // Check if scrolled for background effect
      setIsScrolled(currentScrollY > 50);

      // Active section detection
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (currentScrollY >= sectionTop && currentScrollY < sectionBottom) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileOpen && !e.target.closest('.nav-container')) {
        setMobileOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-container ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-4 mt-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className={`rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'glass shadow-lg shadow-accent/5 backdrop-blur-xl' 
              : 'glass/70 backdrop-blur-md'
          }`}
        >
          {/* Logo */}
          <motion.a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#')}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-heading text-xl font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              AA
            </span>
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </motion.a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  activeSection === link.href.slice(1) || (link.href === '#' && !activeSection)
                    ? 'text-accent'
                    : 'text-secondary hover:text-foreground'
                }`}
              >
                <span className="relative z-10">
                  {link.label}
                </span>
                {activeSection === link.href.slice(1) || (link.href === '#' && !activeSection) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <motion.button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-secondary hover:text-accent transition-colors relative z-50"
            whileTap={{ scale: 0.9 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="md:hidden mx-4 relative z-50"
            >
              <div className="glass rounded-2xl p-4 mt-2 flex flex-col gap-2 shadow-2xl">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href.slice(1) || (link.href === '#' && !activeSection)
                        ? 'bg-accent/10 text-accent'
                        : 'text-secondary hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="mobileActive"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}