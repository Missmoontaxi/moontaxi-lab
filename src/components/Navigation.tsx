'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    // { href: '/services', label: 'Services' },
    // { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-space-black/80 backdrop-blur-sm border-b border-nebula-teal/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-display text-xl text-star-white hover:text-nebula-cyan transition-colors">
          Moontaxi Lab
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-nebula-cyan'
                  : 'text-star-white/70 hover:text-star-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
