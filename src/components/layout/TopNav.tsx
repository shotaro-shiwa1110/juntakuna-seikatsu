'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'トップ', exact: true },
  { href: '/log', label: '実践録' },
  { href: '/projects', label: 'プロジェクト' },
  { href: '/library', label: '資料室' },
  { href: '/people', label: '人と場所' },
  { href: '/profile', label: 'プロフィール' },
]

export default function TopNav() {
  const pathname = usePathname()

  return (
    <header className="top-nav">
      <Link href="/" className="top-nav-logo">巡拓な生活</Link>
      <nav aria-label="メインナビゲーション">
        <div className="top-nav-links">
          {links.map(({ href, label, exact }) => {
            const active = exact ? pathname === href : pathname === href || pathname.startsWith(href + '/')
            return (
              <Link key={href} href={href} className={`top-nav-link ${active ? 'active' : ''}`}>
                {label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
