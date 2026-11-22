import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'
import SectionImage from '../components/SectionImage'
import site from '../data/site'

export default function Contact() {
  const { content } = site
  const copy = content.contact

  return (
    <section id="contact" className="section section--base" aria-labelledby="contact-heading">
      <div className="section__container contact__layout">
        <SectionHeading
          id="contact-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <SectionImage image={site.sectionImages.contact} className="section-image--banner" />
        <ContactForm />
      </div>
    </section>
  )
}
