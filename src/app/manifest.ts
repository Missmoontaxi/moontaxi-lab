import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Moontaxi Lab',
    short_name: 'Moontaxi Lab',
    description:
      'The AI-native lab of Paula McMahon. Experiments, trainings, collaborations, and a launchpad for useful things.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08080c',
    theme_color: '#08080c',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}
