'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/projects', label: 'プロジェクト' },
  { href: '/log', label: '実践録' },
  { href: '/library', label: '資料室' },
  { href: '/people', label: '人と場所' },
  { href: '/profile', label: 'プロフィール' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-base/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-10 h-14">
          <Link href="/" className="flex flex-col justify-center min-h-[44px]">
            <div className="font-mincho text-[17px] tracking-wider text-ink">巡拓な生活</div>
            <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mt-0.5">JUNTAKUNA SEIKATSU</div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href)
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

          {/* Mobile hamburger — fixed position within header */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
          >
            <span
              className="absolute block w-5 h-px bg-ink transition-all duration-200 origin-center"
              style={{ transform: open ? 'rotate(45deg)' : 'translateY(-4px)' }}
            />
            <span
              className="absolute block w-5 h-px bg-ink transition-all duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute block w-5 h-px bg-ink transition-all duration-200 origin-center"
              style={{ transform: open ? 'rotate(-45deg)' : 'translateY(4px)' }}
            />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-14 right-0 bottom-0 z-40 w-64 bg-surface border-l border-border transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="font-mono text-[7px] tracking-[0.25em] text-ink-30 px-6 pt-7 pb-3">
          NAVIGATION
        </div>
        <nav className="flex flex-col">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center px-6 h-13 font-serif text-[15px] border-b border-border transition-colors ${
                  active ? 'text-ink bg-base' : 'text-ink-60 hover:text-ink hover:bg-base'
                }`}
              >
                <span className={`w-1 h-1 rounded-full mr-3 shrink-0 ${active ? 'bg-accent' : 'bg-border'}`} />
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="px-6 pt-6">
          <Link href="/contact" className="btn-primary block text-center">
            お問い合わせ ▶
          </Link>
        </div>
      </div>
    </>
  )
}
