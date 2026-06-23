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
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setActive(true), delay)
          obs.disconnect()
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.6 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <span ref={ref} className={`highlight-text${active ? ' active' : ''}`}>
      {children}
    </span>
  )
}
