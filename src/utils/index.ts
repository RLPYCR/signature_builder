export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function normalizeUrl(link: string) {
  const re = /^https?:|skype:|tg:|whatsapp:/
  let url

  if (re.test(link)) {
    url = link
  }
  else {
    url = `https://${link}`
  }

  return url
}

export function publicAssetUrl(path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const cdnBase = import.meta.env.VITE_CDN_URL

  if (cdnBase) {
    return `${cdnBase.replace(/\/$/, '')}${cleanPath}`
  }

  if (typeof window === 'undefined') {
    return cleanPath
  }

  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`

  return `${window.location.origin}${normalizedBase}${cleanPath.replace(/^\//, '')}`
}
