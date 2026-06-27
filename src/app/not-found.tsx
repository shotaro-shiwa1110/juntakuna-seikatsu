import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-8 text-center">
      <div className="font-mono text-[12px] tracking-[0.35em] text-accent mb-10 flex items-center gap-3">
        <span className="w-8 h-px bg-accent" />
        ERROR_404
        <span className="w-8 h-px bg-accent" />
      </div>

      {/* SF crosshair SVG */}
      <svg width="240" height="160" viewBox="0 0 240 160" className="mb-10" aria-hidden="true">
        {/* Grid */}
        <defs>
          <pattern id="g404" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#D5CFC8" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="240" height="160" fill="url(#g404)" />

        {/* Crosshair lines */}
        <line x1="0" y1="80" x2="240" y2="80" stroke="#D5CFC8" strokeWidth="0.75" />
        <line x1="120" y1="0" x2="120" y2="160" stroke="#D5CFC8" strokeWidth="0.75" />

        {/* Target circles */}
        <circle cx="120" cy="80" r="40" fill="none" stroke="#D5CFC8" strokeWidth="0.75" strokeDasharray="4 4" />
        <circle cx="120" cy="80" r="20" fill="none" stroke="#D5CFC8" strokeWidth="0.5" />
        <circle cx="120" cy="80" r="5" fill="none" stroke="#B8F000" strokeWidth="1.5" />
        <circle cx="120" cy="80" r="2" fill="#B8F000" />

        {/* Corner markers */}
        <line x1="0" y1="0" x2="16" y2="0" stroke="#B8F000" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="16" stroke="#B8F000" strokeWidth="1.5" />
        <line x1="224" y1="0" x2="240" y2="0" stroke="#B8F000" strokeWidth="1.5" />
        <line x1="240" y1="0" x2="240" y2="16" stroke="#B8F000" strokeWidth="1.5" />
        <line x1="0" y1="160" x2="16" y2="160" stroke="#B8F000" strokeWidth="1.5" />
        <line x1="0" y1="144" x2="0" y2="160" stroke="#B8F000" strokeWidth="1.5" />
        <line x1="224" y1="160" x2="240" y2="160" stroke="#B8F000" strokeWidth="1.5" />
        <line x1="240" y1="144" x2="240" y2="160" stroke="#B8F000" strokeWidth="1.5" />

        {/* Labels */}
        <text x="120" y="72" fontFamily="Space Mono, monospace" fontSize="7" fill="#9A9390" textAnchor="middle" letterSpacing="2">RECORD</text>
        <text x="120" y="84" fontFamily="Space Mono, monospace" fontSize="7" fill="#9A9390" textAnchor="middle" letterSpacing="2">NOT FOUND</text>
        <text x="4" y="76" fontFamily="Space Mono, monospace" fontSize="5" fill="#D5CFC8">LAT</text>
        <text x="4" y="84" fontFamily="Space Mono, monospace" fontSize="5" fill="#D5CFC8">??°N</text>
        <text x="125" y="155" fontFamily="Space Mono, monospace" fontSize="5" fill="#D5CFC8">???°E</text>
      </svg>

      <h1 className="font-mincho text-[2.1rem] mb-5">
        このページは見つかりませんでした
      </h1>
      <p className="font-serif text-[1.07rem] text-ink-60 leading-[1.9] max-w-sm mb-10">
        記録が移動したか、まだ書かれていないかもしれません。
        フィールドへ戻って、別のルートを探してみてください。
      </p>
      <Link href="/" className="btn-primary">
        ← TOP に戻る
      </Link>
    </div>
  )
}
