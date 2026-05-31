import type { Metadata } from 'next'
import { Rationale, Inter, JetBrains_Mono } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const rationale = Rationale({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rationale',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Moontaxi Lab',
  description:
    'The AI-native operating studio of Paula McMahon — advisory practice, project archive, and a launchpad for useful things.',
  keywords: ['AI-native advisory', 'GTM', 'scale operations', 'builder portfolio', 'Paula McMahon'],
  authors: [{ name: 'Moontaxi Lab LLC' }],
  openGraph: {
    title: 'Moontaxi Lab',
    description:
      'The AI-native operating studio of Paula McMahon — advisory practice, project archive, and a launchpad for useful things.',
    url: 'https://www.moontaxilab.com',
    siteName: 'Moontaxi Lab',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rationale.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
