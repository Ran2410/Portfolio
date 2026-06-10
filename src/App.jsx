import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-background font-body text-foreground">
      {/* Background grid overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'radial-gradient(circle, #22C55E 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App