'use client'
import { CSSProperties, useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

function isInView(el: HTMLElement): boolean {
  const container = document.getElementById('page-scroll')
  if (!container) {
    // Fallback: check against viewport
    const r = el.getBoundingClientRect()
    return r.top < window.innerHeight - 40 && r.bottom > 0
  }
  const cRect = container.getBoundingClientRect()
  const eRect = el.getBoundingClientRect()
  return eRect.top < cRect.bottom - 40 && eRect.bottom > cRect.top
}

export default function ScrollReveal({ children, className = '', delay = 0, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      if (isInView(el)) {
        el.classList.add('visible')
        cleanup()
      }
    }

    const cleanup = () => {
      container?.removeEventListener('scroll', reveal)
    }

    const container = document.getElementById('page-scroll')

    // Check immediately on mount
    reveal()

    // Then watch on scroll
    container?.addEventListener('scroll', reveal, { passive: true })
    return cleanup
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  )
}
