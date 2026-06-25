'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReset() {
  const pathname = usePathname()
  useEffect(() => {
    document.getElementById('page-scroll')?.scrollTo({ top: 0 })
  }, [pathname])
  return null
}
