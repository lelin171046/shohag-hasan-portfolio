import { useCallback, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import Footer from './components/Footer'
import MediaModal from './components/MediaModal'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Works from './sections/Works'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import site from './data/site'

export default function App() {
  const [activeSection, setActiveSection] = useState(site.navigation[0]?.anchor || '#home')
  const [activeProject, setActiveProject] = useState(null)

  const handleNavigate = useCallback((anchor) => {
    setActiveSection(anchor)
  }, [])

  const handleCloseModal = useCallback(() => {
    setActiveProject(null)
  }, [])

  useEffect(() => {
    const sections = site.navigation
      .map((item) => document.querySelector(item.anchor))
      .filter((element) => element instanceof HTMLElement)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {site.content.a11y.skipToContent}
      </a>

      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileHeader activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="main-shell" id="main-content">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Services />
        <Works onOpenProject={setActiveProject} />
        <Clients />
        <Contact />
        <Footer />
      </main>

      {activeProject && <MediaModal project={activeProject} onClose={handleCloseModal} />}
    </div>
  )
}
