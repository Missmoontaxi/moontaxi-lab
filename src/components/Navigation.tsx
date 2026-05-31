'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  // Special-project pages render their own chrome — skip the global nav.
  if (pathname?.startsWith('/peanut')) return null

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    // { href: '/services', label: 'Services' },
    // { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-lab-borderlt bg-space-black/[0.88] px-6 py-5 backdrop-blur-[14px] sm:px-10">
      <Link
        href="/"
        className="font-mono text-[0.85rem] tracking-[0.04em] text-honey transition-opacity hover:opacity-80"
      >
        moontaxi lab
      </Link>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[0.85rem] transition-colors ${
              pathname === link.href
                ? 'text-lab-text'
                : 'text-lab-muted hover:text-lab-text'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
