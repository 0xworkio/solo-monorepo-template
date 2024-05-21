export * from './cctlds'
export * from './countries'
export * from './domains'
export * from './framer-motion'
export * from './layout'
export * from './localhost'
export * from './middleware'
export * from './misc'
export * from './pricing'

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'solohub.io'

export const SHORT_DOMAIN =
  process.env.NEXT_PUBLIC_APP_SHORT_DOMAIN || 'solohub.io'

export const HOME_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`

export const APP_HOSTNAMES = new Set([
  `app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  `preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  'localhost:8888',
  'localhost',
])

export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? `https://preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
      : 'http://localhost:8888'

export const API_HOSTNAMES = new Set([
  `api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  `api.${SHORT_DOMAIN}`,
  'api.localhost:8888',
])

export const API_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? `https://api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
      : 'http://api.localhost:8888'

export const ADMIN_HOSTNAMES = new Set([
  `admin.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  'admin.localhost:8888',
])

export const DUB_LOGO = 'https://assets.dub.co/logo.png'
export const DUB_THUMBNAIL = 'https://assets.dub.co/thumbnail.png'

export const DEMO_LINK_ID = 'clqo10sum0006js08vutzfxt3'
export const DUB_PROJECT_ID = 'cl7pj5kq4006835rbjlt2ofka'
export const LEGAL_PROJECT_ID = 'clrflia0j0000vs7sqfhz9c7q'
export const LEGAL_USER_ID = 'clqei1lgc0000vsnzi01pbf47'

export const DUB_DOMAINS = [
  {
    id: 'clce1z7ch00j0rbstbjufva4j',
    slug: SHORT_DOMAIN,
    verified: true,
    primary: true,
    archived: false,
    publicStats: false,
    target: `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
    type: 'redirect',
    placeholder: 'https://dub.co/help/article/what-is-dub',
    clicks: 0,
    allowedHostnames: [],
    projectId: DUB_PROJECT_ID,
  },
]
