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
  title: 'Peanut · Paddy & Amanda · Run of Show',
  description: 'Ceremony run of show for the wedding of Paddy McMahon and Amanda Morrow. May 2, 2026, Madison WI.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Paddy & Amanda · Run of Show',
    description: 'Ceremony run of show for the wedding of Paddy McMahon and Amanda Morrow. May 2, 2026.',
    type: 'website',
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
