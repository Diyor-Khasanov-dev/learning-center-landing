import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EduSphere — O'quv Markazlarini Boshqarish Tizimi",
    short_name: 'EduSphere',
    description: "O'quv markazlari, til akademiyalari va IT maktablar uchun ERP va CRM platformasi.",
    start_url: '/',
    display: 'standalone',
    background_color: '#07080e',
    theme_color: '#07080e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
