import { useState } from 'react'
import {
  Facebook,
  Globe,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'
import site from '../data/site'
import { isImageSource } from '../utils/media'

const socialIcons = {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Globe,
}

function OwnerPortrait() {
  const [failed, setFailed] = useState(false)
  const image =
    site.sectionImages.sidebar.src || site.owner.portrait || site.owner.cutoutPortrait

  if (image && isImageSource(image) && !failed) {
    return (
      <img
        className="sidebar__portrait-image"
        src={image}
        alt={site.sectionImages.sidebar.alt || `${site.content.a11y.portraitOf} ${site.owner.name}`}
        width="132"
        height="132"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span className="sidebar__portrait-monogram" aria-label="Portrait placeholder">
      {site.content.common.monogram}
    </span>
  )
}

export default function Sidebar({ activeSection, onNavigate }) {
  const socialLinks = site.socialLinks.filter((link) => link.href && link.label)
  const year = new Date().getFullYear()

  return (
    <aside className="sidebar" aria-label={site.content.a11y.siteIntro}>
      <div className="sidebar__top">
        <div className="sidebar__portrait">
          <OwnerPortrait />
        </div>
        <div className="sidebar__identity">
          <span className="sidebar__signature" aria-hidden="true">
            {site.content.common.monogram}
          </span>
          <p className="sidebar__name">{site.owner.name}</p>
          <p className="sidebar__role">{site.owner.role}</p>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label={site.content.a11y.primaryNavigation}>
        <ul>
          {site.navigation.map((item) => (
            <li key={item.anchor}>
              <a
                href={item.anchor}
                className={
                  activeSection === item.anchor ? 'sidebar__link is-active' : 'sidebar__link'
                }
                aria-current={activeSection === item.anchor ? 'location' : undefined}
                onClick={() => onNavigate(item.anchor)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__bottom">
        {socialLinks.length > 0 && (
          <ul className="social-row" aria-label={site.content.a11y.socialLinks}>
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon] || Globe
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        )}
        <p className="sidebar__copyright">
          {site.content.common.copyrightPrefix} {year} {site.owner.name}.{' '}
          {site.content.common.rights}
        </p>
      </div>
    </aside>
  )
}
