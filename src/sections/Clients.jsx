import SectionHeading from '../components/SectionHeading'
import SectionImage from '../components/SectionImage'
import site from '../data/site'

export default function Clients() {
  const { clients, testimonials, content } = site
  const copy = content.clients
  const showClients = clients.length > 0
  const showTestimonials = testimonials.length > 0 && testimonials.every((item) => item.quote)

  return (
    <section id="clients" className="section section--alt" aria-labelledby="clients-heading">
      <div className="section__container">
        <SectionHeading
          id="clients-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <SectionImage image={site.sectionImages.clients} className="section-image--banner" />

        {showClients ? (
          <ul className="clients-grid">
            {clients.map((client) => (
              <li className="client-card reveal" key={client.name}>
                {client.logo ? (
                  <img src={client.logo} alt={client.alt || client.name} loading="lazy" />
                ) : (
                  <span>{client.name}</span>
                )}
                {client.website && (
                  <a href={client.website} target="_blank" rel="noreferrer noopener">
                    {client.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state empty-state--featured">{copy.emptyState}</p>
        )}

        {showTestimonials && (
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <blockquote className="testimonial-card" key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  {testimonial.role && <span>{testimonial.role}</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
