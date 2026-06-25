'use client'

import { useRef, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
}

export default function HighlightText({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const check = () => {
      const container = document.getElementById('page-scroll')
      if (!container) return
      const cRect = container.getBoundingClientRect()
      const eRect = el.getBoundingClientRect()
      if (eRect.top < cRect.bottom - 20 && eRect.bottom > cRect.top) {
        setTimeout(() => setActive(true), delay)
        container.removeEventListener('scroll', check)
      }
    }

    const container = document.getElementById('page-scroll')
    check()
    container?.addEventListener('scroll', check, { passive: true })
    return () => container?.removeEventListener('scroll', check)
  }, [delay])

  return (
    <span ref={ref} className={`highlight-text${active ? ' active' : ''}`}>
      {children}
    </span>
  )
}
