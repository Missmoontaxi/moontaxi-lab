import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
