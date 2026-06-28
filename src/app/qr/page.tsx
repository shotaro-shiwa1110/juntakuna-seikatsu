'use client'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { TRACKING_URLS } from '@/lib/tracking'

export default function QRPage() {
  const [copied, setCopied] = useState<'sns' | 'qr' | null>(null)

  const copy = async (key: 'sns' | 'qr') => {
    await navigator.clipboard.writeText(TRACKING_URLS[key])
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-16">

      {/* QR コード（対面用） */}
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="section-label">QR CODE — 対面・名刺用</div>
        <div className="bg-white p-6 rounded-md shadow-sm">
          <QRCode
            value={TRACKING_URLS.qr}
            size={220}
            bgColor="#ffffff"
            fgColor="#1e1e1e"
          />
        </div>
        <div className="meta-text text-ink-30 max-w-xs break-all">{TRACKING_URLS.qr}</div>
        <button
          onClick={() => copy('qr')}
          className="btn-secondary text-sm"
        >
          {copied === 'qr' ? 'コピーしました ✓' : 'URLをコピー'}
        </button>
      </section>

      <div className="w-full max-w-sm border-t border-border" />

      {/* SNS プロフィール URL */}
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="section-label">SNS プロフィール用 URL</div>
        <div className="card-float px-6 py-5 w-full max-w-sm">
          <div className="meta-text text-ink-30 break-all leading-relaxed">{TRACKING_URLS.sns}</div>
        </div>
        <button
          onClick={() => copy('sns')}
          className="btn-primary text-sm"
        >
          {copied === 'sns' ? 'コピーしました ✓' : 'URLをコピー'}
        </button>
      </section>

    </div>
  )
}
