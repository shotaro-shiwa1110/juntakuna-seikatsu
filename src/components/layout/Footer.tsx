import Link from 'next/link'

const footerGroups = [
  {
    label: 'コンテンツ',
    links: [
      { href: '/log', label: '実践録' },
      { href: '/projects', label: 'プロジェクト' },
      { href: '/library', label: '資料室' },
      { href: '/archive', label: 'アーカイブ' },
    ],
  },
  {
    label: 'フィールド',
    links: [
      { href: '/people', label: '人と場所' },
    ],
  },
  {
    label: 'このサイトについて',
    links: [
      { href: '/profile', label: 'プロフィール' },
      { href: '/contact', label: 'お問い合わせ' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-surface mt-24">
      <div className="px-6 md:px-10 pt-14 pb-10">
        <div className="grid grid-cols-1 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-mincho text-[1.2rem] tracking-wider mb-3">巡拓な生活</div>
            <div className="font-mono text-[9px] tracking-[0.2em] text-ink-30 mb-4">JUNTAKUNA SEIKATSU — ARCHIVE_001</div>
            <div className="font-serif text-[1rem] leading-[1.9] max-w-sm" style={{ color: 'rgba(250,248,245,0.55)' }}>
              農・食・住まい・文化・地域との関わりを通じて、<br />
              これからの豊かな暮らしを実践し記録するプロジェクト。
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
              <span className="font-mono text-[9px] text-accent tracking-[0.15em]">STATUS_ACTIVE / 2026–</span>
            </div>
          </div>

          {/* Nav groups — all links stacked vertically with group labels */}
          <nav aria-label="フッターナビゲーション" className="flex flex-col gap-1">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <div className="font-mono text-[8px] tracking-[0.2em] text-ink-30 mt-6 mb-3">{group.label}</div>
                <div className="flex flex-col">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-serif text-[1rem] min-h-[44px] flex items-center border-b transition-colors hover:text-accent"
                      style={{ color: 'rgba(250,248,245,0.7)', borderColor: 'rgba(213,207,200,0.12)' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t pt-6 flex flex-col justify-between items-start gap-2" style={{ borderColor: 'rgba(213,207,200,0.2)' }}>
          <div className="font-mono text-[10px] text-ink-30 tracking-[0.1em]">© 2026 JUNTAKUNA SEIKATSU. ALL RIGHTS RESERVED.</div>
          <div className="font-mono text-[10px] text-ink-30 tracking-[0.1em]">39.5010°N, 141.0010°E — FIELD_NOTE / 001</div>
        </div>
      </div>
    </footer>
  )
}
