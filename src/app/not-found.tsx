import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-8 text-center">
      <div className="font-mono text-[7px] tracking-[0.3em] text-accent mb-8">ERROR_404</div>

      <svg width="200" height="120" viewBox="0 0 200 120" className="mb-8">
        <line x1="0" y1="60" x2="200" y2="60" stroke="#D5CFC8" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="100" y2="120" stroke="#D5CFC8" strokeWidth="0.5" />
        <circle cx="100" cy="60" r="4" fill="none" stroke="#B8F000" strokeWidth="1.5" />
        <circle cx="100" cy="60" r="24" fill="none" stroke="#D5CFC8" strokeWidth="0.5" strokeDasharray="3 3" />
        <text x="100" y="54" fontFamily="Space Mono, monospace" fontSize="7" fill="#9A9390" textAnchor="middle">RECORD</text>
        <text x="100" y="65" fontFamily="Space Mono, monospace" fontSize="7" fill="#9A9390" textAnchor="middle">NOT FOUND</text>
      </svg>

      <h1 className="font-mincho text-[28px] mb-4">このページは見つかりませんでした</h1>
      <p className="font-serif text-body text-ink-60 max-w-sm mb-8">
        記録が移動したか、まだ書かれていないかもしれません。
      </p>
      <Link
        href="/"
        className="font-mono text-[8px] tracking-[0.2em] text-ink border border-ink px-6 py-3 hover:bg-ink hover:text-surface transition-colors"
      >
        ← TOP に戻る
      </Link>
    </div>
  )
}
