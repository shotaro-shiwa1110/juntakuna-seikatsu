'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const allTabs = [
  { href: '/', label: 'トップ', exact: true },
  { href: '/projects', label: 'プロジェクト' },
  { href: '/log', label: '実践録' },
  { href: '/library', label: '資料室' },
  { href: '/people', label: '人と場所' },
  { href: '/profile', label: 'プロフィール' },
]

export default function LeftNav() {
  const pathname = usePathname()

  const activeIdx = allTabs.findIndex(({ href, exact }) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + '/')
  )

  return (
    <nav aria-label="メインナビゲーション" className="nav-rail">
      {allTabs.map(({ href, label }, idx) => {
        const active = idx === activeIdx
        const below = activeIdx !== -1 && idx > activeIdx
        const isFirst = idx === 0
        const isLast = idx === allTabs.length - 1

        const tabClass = [
          'nav-tab',
          active ? 'nav-tab-active' : '',
          below ? 'nav-tab-below' : '',
          isFirst ? 'nav-tab-first' : '',
          isLast ? 'nav-tab-last' : '',
        ].filter(Boolean).join(' ')

        return (
          <Link key={href} href={href} title={label} className={tabClass}>
            {active && <span className="nav-tab-accent" aria-hidden="true" />}
            <span className="nav-tab-label">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
