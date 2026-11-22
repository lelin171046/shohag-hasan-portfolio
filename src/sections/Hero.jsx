import { ArrowRight } from 'lucide-react'
import Lanyard from '../components/Lanyard'
import site from '../data/site'
import { isImageSource } from '../utils/media'

export default function Hero({ onNavigate }) {
  const { owner, content, sectionImages } = site
  const copy = content.hero
  const portrait = sectionImages.home.src || owner.cutoutPortrait || owner.portrait
  const showLanyard = Boolean(portrait) && isImageSource(portrait)
  const visualLabel = sectionImages.home.alt || `${owner.name}, ${owner.role}`

  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy reveal">
          <p className="eyebrow">{copy.eyebrow}</p>
          <p className="hero__role">{copy.roleHighlight}</p>
          <h1 id="hero-title">
            {copy.greeting}
            <br />
            {copy.secondLine}
          </h1>
          <p className="hero__intro">{copy.intro}</p>

          <div className="hero__actions">
            <a className="button button--pale" href="#contact" onClick={() => onNavigate('#contact')}>
              {content.common.hireMe}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button button--solid" href="#works" onClick={() => onNavigate('#works')}>
              {content.common.viewWorks}
            </a>
          </div>

          {copy.toolLabels.length > 0 && (
            <ul className="hero__tools" aria-label={content.a11y.toolsAndWorkflow}>
              {copy.toolLabels.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="hero__visual reveal" role="img" aria-label={visualLabel}>
          {showLanyard ? (
            <Lanyard
              frontImage={portrait}
              backImage={portrait}
              frontLabel={owner.name}
              backLabel={owner.role}
              imageFit="cover"
              cardColor="#151a15"
              orientation="portrait"
              finish="glossy"
              cornerRadius={0.32}
              size={0.68}
              anchor="center"
              strapLength={0.55}
              strapColor="#080a08"
              metal="silver"
              breeze={0.45}
            />
          ) : (
            <div className="portrait-figure" aria-label={copy.portraitLabel}>
              <span className="portrait-figure__head" />
              <span className="portrait-figure__body" />
              <span className="portrait-figure__monogram">{content.common.monogram}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
