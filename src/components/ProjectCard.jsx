import { useState } from 'react'
import { Image as ImageIcon, Play } from 'lucide-react'
import site from '../data/site'
import { getProjectMedia } from '../utils/media'

export default function ProjectCard({ project, onOpen }) {
  const [imageFailed, setImageFailed] = useState(false)
  const labels = site.content.works
  const media = getProjectMedia(project, labels.invalidMessage)
  const canOpen = !['placeholder', 'invalid'].includes(media.kind)
  const previewSrc =
    media.kind === 'image' || media.kind === 'youtube' || media.kind === 'cloudinary'
      ? media.src || media.poster
      : ''
  const showImage = Boolean(previewSrc) && !imageFailed
  const isImageProject = media.kind === 'image'

  return (
    <article className="project-card reveal">
      <div className="project-card__preview">
        {showImage ? (
          <img
            src={previewSrc}
            alt={media.alt}
            width="640"
            height="360"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{site.content.common.monogram}</span>
            <small>{labels.samplePreview}</small>
          </div>
        )}
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        {project.description && <p>{project.description}</p>}
        {canOpen ? (
          <button type="button" className="project-card__action" onClick={() => onOpen(project)}>
            {isImageProject ? (
              <ImageIcon size={16} aria-hidden="true" />
            ) : (
              <Play size={16} aria-hidden="true" />
            )}
            {labels.playProject}
            <span className="sr-only">: {project.title}</span>
          </button>
        ) : (
          <span
            className={`project-card__action project-card__action--static${
              media.kind === 'invalid' ? ' is-invalid' : ''
            }`}
            aria-disabled="true"
            title={media.message || ''}
          >
            {media.kind === 'invalid' ? labels.needsSetup : labels.samplePreview}
          </span>
        )}
      </div>
    </article>
  )
}
