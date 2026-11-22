const YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'm.youtube.com',
  'youtube-nocookie.com',
  'm.youtube-nocookie.com',
])

const VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/

export function isHttpsUrl(value) {
  if (!value || typeof value !== 'string') return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && Boolean(url.hostname)
  } catch {
    return false
  }
}

export function isImageSource(value) {
  if (!value || typeof value !== 'string') return false
  const source = value.trim()
  if (!source || /^(javascript|data|vbscript):/i.test(source) || source.startsWith('//')) {
    return false
  }
  return /^https:\/\//i.test(source) || source.startsWith('/') || source.startsWith('./')
}

export function parseYouTubeUrl(value) {
  if (!isHttpsUrl(value)) return null

  try {
    const url = new URL(value)
    const host = url.hostname.toLowerCase().replace(/^www\./, '')
    const parts = url.pathname.split('/').filter(Boolean)
    let id = ''

    if (host === 'youtu.be') {
      id = parts[0] || ''
    } else if (YOUTUBE_HOSTS.has(host)) {
      if (['embed', 'shorts', 'live'].includes(parts[0])) {
        id = parts[1] || ''
      } else {
        id = url.searchParams.get('v') || ''
      }
    } else {
      return null
    }

    if (!VIDEO_ID_PATTERN.test(id)) return null

    return {
      id,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
      watchUrl: `https://www.youtube.com/watch?v=${id}`,
    }
  } catch {
    return null
  }
}

function getCloudinaryMedia(project) {
  if (!isHttpsUrl(project.url)) return null

  try {
    const url = new URL(project.url)
    const host = url.hostname.toLowerCase()
    const isCloudinaryHost = host === 'cloudinary.com' || host.endsWith('.cloudinary.com')
    if (!isCloudinaryHost || !url.pathname.toLowerCase().includes('/video/upload/')) {
      return null
    }
  } catch {
    return null
  }

  return {
    kind: 'cloudinary',
    src: project.url,
    poster: isImageSource(project.poster) ? project.poster : '',
    externalUrl: project.url,
  }
}

export function getProjectMedia(project, invalidMessage = '') {
  if (!project) return { kind: 'invalid', message: invalidMessage }

  const common = {
    title: project.title || 'Project preview',
    description: project.description || '',
    alt: project.alt || project.title || 'Project preview',
  }

  if (project.isPlaceholder) {
    return { kind: 'placeholder', ...common }
  }

  if (project.type === 'youtube') {
    const video = parseYouTubeUrl(project.url)
    if (!video) return { kind: 'invalid', ...common, message: invalidMessage }
    return {
      kind: 'youtube',
      ...common,
      embedUrl: video.embedUrl,
      watchUrl: video.watchUrl,
      poster: isImageSource(project.poster) ? project.poster : '',
    }
  }

  if (project.type === 'cloudinary') {
    const video = getCloudinaryMedia(project)
    if (!video) return { kind: 'invalid', ...common, message: invalidMessage }
    return { ...common, ...video }
  }

  if (project.type === 'image') {
    const source = project.poster || project.url
    if (!isImageSource(source)) return { kind: 'invalid', ...common, message: invalidMessage }
    return { kind: 'image', ...common, src: source }
  }

  return { kind: 'invalid', ...common, message: invalidMessage }
}
