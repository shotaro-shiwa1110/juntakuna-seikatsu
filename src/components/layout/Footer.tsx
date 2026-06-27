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
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-name">巡拓な生活</div>
          <div className="footer-brand-desc">
            農・食・住まい・文化・地域との関わりを通じて、<br className="sp_br" />
            これからの豊かな暮らしを実践し記録するプロジェクト。
          </div>
        </div>

        <nav aria-label="フッターナビゲーション" className="footer-nav">
          {footerGroups.map((group) => (
            <div key={group.label}>
              <div className="footer-group-label">{group.label}</div>
              <div className="footer-links">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 JUNTAKUNA SEIKATSU.</div>
        </div>
      </div>
    </footer>
  )
}
