import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import site from '../data/site'

export default function MobileHeader({ activeSection, onNavigate }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const closeAndNavigate = (anchor) => {
    setOpen(false)
    onNavigate(anchor)
  }

  return (
    <header className="mobile-header">
      <div className="mobile-header__bar">
        <a
          className="mobile-header__brand"
          href="#home"
          onClick={() => closeAndNavigate('#home')}
          aria-label={`${site.owner.name} — home`}
        >
          <span className="mobile-header__monogram">{site.content.common.monogram}</span>
          <span>{site.owner.name}</span>
        </a>
        <button
          ref={buttonRef}
          type="button"
          className="mobile-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? site.content.a11y.closeMenu : site.content.a11y.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-header__nav"
          aria-label={site.content.a11y.mobileNavigation}
        >
          <ul>
            {site.navigation.map((item) => (
              <li key={item.anchor}>
                <a
                  href={item.anchor}
                  className={
                    activeSection === item.anchor ? 'mobile-header__link is-active' : 'mobile-header__link'
                  }
                  aria-current={activeSection === item.anchor ? 'location' : undefined}
                  onClick={() => closeAndNavigate(item.anchor)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
