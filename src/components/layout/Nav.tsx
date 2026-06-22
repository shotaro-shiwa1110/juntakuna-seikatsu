'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'TOP' },
  { href: '/projects', label: 'プロジェクト' },
  { href: '/log', label: '実践録' },
  { href: '/theme', label: 'テーマ' },
  { href: '/people', label: '人と場所' },
  { href: '/profile', label: 'プロフィール' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-base/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-3">
        <Link href="/" className="group">
          <div className="font-mincho text-[15px] tracking-wider text-ink">巡拓な生活</div>
          <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mt-0.5">JUNTAKUNA SEIKATSU</div>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`font-mono text-[8px] tracking-[0.12em] transition-colors ${
                  active
                    ? 'text-ink border-b border-accent pb-0.5'
                    : 'text-ink-30 hover:text-ink-60'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <button
            aria-hidden="true"
            tabIndex={-1}
            className="font-mono text-[14px] text-ink-30 hover:text-accent transition-colors ml-2"
          >≡</button>
        </nav>
      </div>
    </header>
  )
}
