'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const GAS_URL = process.env.NEXT_PUBLIC_GAS_TRACK_URL

export default function TrackVisit() {
  const params = useSearchParams()

  useEffect(() => {
    const source   = params.get('utm_source')   ?? ''
    const medium   = params.get('utm_medium')   ?? ''
    const campaign = params.get('utm_campaign') ?? ''

    // utm_source がないアクセスは記録しない（直接アクセス等を除外）
    if (!source) return
    if (!GAS_URL) return

    // セッション内で同じパラメータを2回送らない
    const key = `tracked:${source}:${medium}:${campaign}`
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')

    const payload = {
      source,
      medium,
      campaign,
      path:      window.location.pathname,
      referrer:  document.referrer || '',
      userAgent: navigator.userAgent,
    }

    // サイトの表示を一切ブロックしない fire-and-forget
    fetch(GAS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).catch(() => { /* silent fail */ })
  }, [params])

  return null
}
