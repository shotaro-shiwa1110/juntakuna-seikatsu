import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'TOP' },
  { href: '/log', label: '実践録' },
  { href: '/projects', label: 'プロジェクト' },
  { href: '/theme', label: 'テーマ' },
  { href: '/profile', label: 'プロフィール' },
  { href: '/archive', label: 'アーカイブ' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-surface mt-24">
      <div className="px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <div className="font-mincho text-[22px] tracking-wider mb-3">巡拓な生活</div>
            <div className="font-mono text-[9px] tracking-[0.2em] text-ink-30 mb-2">JUNTAKUNA SEIKATSU — ARCHIVE_001</div>
            <div className="font-serif text-[14px] text-ink-30 leading-relaxed">日本の暮らしを、もう一度自分の手に取り戻す。</div>
          </div>

          <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-[14px] text-ink-30 hover:text-accent transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-right">
            <div className="font-mono text-[9px] text-accent tracking-[0.15em]">STATUS_ACTIVE</div>
            <div className="font-mono text-[9px] text-ink-30 tracking-[0.1em] mt-1">FIELD_NOTE / 001</div>
            <div className="font-mono text-[9px] text-ink-30 tracking-[0.1em]">PROJECT 2026–</div>
          </div>
        </div>

        <div className="border-t border-ink-60 mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div className="font-mono text-[10px] text-ink-30 tracking-[0.1em]">© 2026 JUNTAKUNA SEIKATSU</div>
          <div className="font-mono text-[10px] text-ink-30 tracking-[0.1em]">39.5010°N, 141.0010°E</div>
        </div>
      </div>
    </footer>
  )
}
