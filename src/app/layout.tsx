import type { Metadata } from 'next'
import { Rationale, Inter } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Moontaxi Lab',
  description: 'AI Strategy & Digital Transformation Advisory',
  keywords: ['AI strategy', 'digital transformation', 'technology consulting', 'AI advisory'],
  authors: [{ name: 'Moontaxi Lab LLC' }],
  openGraph: {
    title: 'Moontaxi Lab',
    description: 'AI Strategy & Digital Transformation Advisory',
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
    <html lang="en" className={`${rationale.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
