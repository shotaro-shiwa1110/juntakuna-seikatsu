'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'トップ', exact: true },
  { href: '/projects', label: 'プロジェクト' },
  { href: '/log', label: '実践録' },
  { href: '/library', label: '資料室' },
  { href: '/people', label: '人と場所' },
  { href: '/profile', label: 'プロフィール' },
]

export default function TopNav() {
  const pathname = usePathname()

  const activeIdx = tabs.findIndex(({ href, exact }) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + '/')
  )

  return (
    <header className="top-nav">
      <Link href="/" className="top-nav-logo">巡拓な生活</Link>
      <nav aria-label="メインナビゲーション" className="top-nav-tabs">
        {tabs.map(({ href, label }, idx) => {
          const active = idx === activeIdx
          const rightOfActive = activeIdx !== -1 && idx > activeIdx
          return (
            <Link
              key={href}
              href={href}
              className={[
                'top-nav-tab',
                active ? 'active' : '',
                rightOfActive ? 'right-of-active' : '',
              ].filter(Boolean).join(' ')}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
