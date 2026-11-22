import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import site from '../data/site'
import { isImageSource } from '../utils/media'

export default function About() {
  const { owner, tools, content, sectionImages } = site
  const copy = content.about
  const [imageFailed, setImageFailed] = useState(false)
  const portrait = sectionImages.about.src || owner.portrait || owner.cutoutPortrait
  const showPortrait = portrait && isImageSource(portrait) && !imageFailed

  return (
    <section id="about" className="section section--base" aria-labelledby="about-heading">
      <div className="section__container about__layout">
        <div className="about__portrait reveal">
          {showPortrait ? (
            <img
              src={portrait}
              alt={sectionImages.about.alt || `${content.a11y.portraitOf} ${owner.name}`}
              width="520"
              height="620"
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="about__monogram" role="img" aria-label={copy.portraitPlaceholder}>
              <span>{content.common.monogram}</span>
              <small>{copy.portraitPlaceholder}</small>
            </div>
          )}
        </div>

        <div className="about__content reveal">
          <SectionHeading id="about-heading" eyebrow={copy.eyebrow} title={copy.title} />
          <p className="about__kicker">{copy.kicker}</p>
          <p className="about__bio">{owner.bio}</p>

          <div className="about__tools">
            <h3>{copy.toolsTitle}</h3>
            <ul className="tool-badges">
              {tools.map((tool) => (
                <li key={tool.name}>{tool.name}</li>
              ))}
            </ul>
          </div>

          <a className="button button--dark" href="#contact">
            {copy.button}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
