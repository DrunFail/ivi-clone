import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ['*','AdsBot-Google'],
      allow: '/',
      disallow: ['/ru/admin/', '/en/admin/','/admin/'],
    },
    sitemap: `${BASE_URL}/sitemap_index.xml`,
  }
}