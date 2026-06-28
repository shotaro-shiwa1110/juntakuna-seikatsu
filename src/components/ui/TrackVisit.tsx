'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const GAS_URL = process.env.NEXT_PUBLIC_GAS_TRACK_URL

export default function TrackVisit() {
  const params = useSearchParams()

  useEffect(() => {
    const ref = params.get('ref') ?? ''
    if (!ref || !GAS_URL) return

    // セッション内で同じ流入元を2回送らない
    const key = `tracked:${ref}`
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')

    // GASはCORSヘッダーを返さないので no-cors で送信
    fetch(GAS_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ ref, path: window.location.pathname }),
    }).catch(() => {})
  }, [params])

  return null
}
