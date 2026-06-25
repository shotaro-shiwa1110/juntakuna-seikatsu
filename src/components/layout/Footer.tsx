import Link from 'next/link'

const footerGroups = [
  {
    label: 'コンテンツ',
    links: [
      { href: '/projects', label: 'プロジェクト' },
      { href: '/log', label: '実践録' },
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
    <footer style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-surface)', marginTop: '6rem' }}>
      <div style={{ padding: '3.5rem 1.5rem 2.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ fontFamily: 'var(--font-mincho)', fontSize: '1.2rem', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>巡拓な生活</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', lineHeight: 1.9, color: 'rgba(250,248,245,0.55)', maxWidth: '22rem' }}>
            農・食・住まい・文化・地域との関わりを通じて、<br />
            これからの豊かな暮らしを実践し記録するプロジェクト。
          </div>
        </div>

        <nav aria-label="フッターナビゲーション" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {footerGroups.map((group) => (
            <div key={group.label}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(250,248,245,0.3)', marginTop: '1.5rem', marginBottom: '0.75rem' }}>{group.label}</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(213,207,200,0.12)', color: 'rgba(250,248,245,0.7)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div style={{ borderTop: '1px solid rgba(213,207,200,0.2)', paddingTop: '1.5rem', marginTop: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(250,248,245,0.25)', letterSpacing: '0.1em' }}>© 2026 JUNTAKUNA SEIKATSU.</div>
        </div>
      </div>
    </footer>
  )
}
