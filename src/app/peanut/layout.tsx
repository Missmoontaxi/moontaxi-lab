import type { Metadata } from 'next'
import { Cormorant_Garamond, Instrument_Serif } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const instrument = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.moontaxilab.com'),
  title: 'P&A · Ceremony Run of Show',
  description: 'Ceremony run of show for Paddy McMahon and Amanda Morrow. May 2, 2026, Madison WI.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.moontaxilab.com/peanut',
  },
  openGraph: {
    title: 'P&A · Ceremony Run of Show',
    description: 'May 2, 2026 · The Tinsmith, Madison WI.',
    url: 'https://www.moontaxilab.com/peanut',
    siteName: 'Moontaxi Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'P&A · Ceremony Run of Show',
    description: 'May 2, 2026 · The Tinsmith, Madison WI.',
  },
}

export default function PeanutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${cormorant.variable} ${instrument.variable}`}>
      {children}
    </div>
  )
}
