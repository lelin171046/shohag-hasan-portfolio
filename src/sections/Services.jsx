import {
  Bot,
  Clapperboard,
  Image as ImageIcon,
  Mic,
  Plane,
  Smartphone,
  Sparkles,
  Youtube,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SectionImage from '../components/SectionImage'
import site from '../data/site'

const icons = {
  Clapperboard,
  Sparkles,
  Youtube,
  Smartphone,
  Plane,
  Mic,
  Image: ImageIcon,
  Bot,
}

export default function Services() {
  const { services, content } = site
  const copy = content.services

  return (
    <section id="services" className="section section--alt" aria-labelledby="services-heading">
      <div className="section__container">
        <SectionHeading
          id="services-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <SectionImage image={site.sectionImages.services} className="section-image--banner" />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon] || Clapperboard
            return (
              <article className="service-card reveal" key={service.id}>
                <span className="service-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <span className="service-card__number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
