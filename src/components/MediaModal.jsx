import { useEffect, useRef, useState } from 'react'
import { AlertCircle, ExternalLink, X } from 'lucide-react'
import site from '../data/site'
import { getProjectMedia } from '../utils/media'

const FOCUSABLE =
  'a[href], button:not([disabled]), video[controls], iframe, [tabindex]:not([tabindex="-1"])'

export default function MediaModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [videoError, setVideoError] = useState(false)
  const media = getProjectMedia(project, site.content.works.invalidMessage)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(dialogRef.current.querySelectorAll(FOCUSABLE)).filter(
        (element) => element.getAttribute('aria-hidden') !== 'true',
      )

      if (focusable.length === 0) {
        event.preventDefault()
        dialogRef.current.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose])

  return (
    <div
      className="media-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="media-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="media-modal-title"
        tabIndex={-1}
      >
        <div className="media-dialog__header">
          <div>
            <p className="eyebrow">{site.content.works.modalLabel}</p>
            <h2 id="media-modal-title">{media.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="media-dialog__close"
            onClick={onClose}
            aria-label={site.content.works.closeLabel}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="media-dialog__content">
          {media.kind === 'youtube' && (
            <div className="media-frame">
              <iframe
                src={media.embedUrl}
                title={`${media.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          )}

          {media.kind === 'cloudinary' && (
            <>
              {videoError ? (
                <p className="media-notice">
                  <AlertCircle size={18} aria-hidden="true" />
                  {site.content.works.cloudinaryErrorMessage}
                </p>
              ) : (
                <video
                  className="media-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster={media.poster || undefined}
                  onError={() => setVideoError(true)}
                >
                  <source src={media.src} />
                  {site.content.a11y.videoUnsupported}
                </video>
              )}
            </>
          )}

          {media.kind === 'image' && (
            <img className="media-image" src={media.src} alt={media.alt} width="1280" height="720" />
          )}
        </div>

        {media.description && <p className="media-dialog__description">{media.description}</p>}

        {media.externalUrl || media.watchUrl ? (
          <a
            className="media-fallback"
            href={media.watchUrl || media.externalUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <ExternalLink size={16} aria-hidden="true" />
            {site.content.works.fallbackLabel}
          </a>
        ) : null}
      </div>
    </div>
  )
}
