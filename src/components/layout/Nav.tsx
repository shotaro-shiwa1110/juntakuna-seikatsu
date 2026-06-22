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
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <Link href="/" className="group flex flex-col justify-center min-h-[44px]">
          <div className="font-mincho text-[17px] tracking-wider text-ink">巡拓な生活</div>
          <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mt-0.5">JUNTAKUNA SEIKATSU</div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`font-serif text-[13px] tracking-wide px-3 min-h-[44px] flex items-center transition-colors ${
                  active
                    ? 'text-ink border-b-2 border-accent'
                    : 'text-ink-60 hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
