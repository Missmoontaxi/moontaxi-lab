'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export default function FadeIn({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`${className} transition-all duration-[550ms] ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'translate-y-[14px] opacity-0'
      }`}
    >
      {children}
    </section>
  )
}
