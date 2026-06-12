import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MagneticCursor from './components/MagneticCursor'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary font-body text-fg-primary">
      <MagneticCursor />
      <Navigation />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App