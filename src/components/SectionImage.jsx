import { useState } from 'react'
import { isImageSource } from '../utils/media'

export default function SectionImage({ image, className = '', width = 1280, height = 720 }) {
  const [failed, setFailed] = useState(false)

  if (!image?.src || !isImageSource(image.src) || failed) return null

  return (
    <img
      className={`section-image ${className}`.trim()}
      src={image.src}
      alt={image.alt || ''}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
