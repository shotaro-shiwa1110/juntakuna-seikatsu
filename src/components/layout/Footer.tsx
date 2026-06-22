import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'TOP' },
  { href: '/log', label: 'LOG' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/theme', label: 'THEME' },
  { href: '/profile', label: 'PROFILE' },
  { href: '/archive', label: 'ARCHIVE' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-surface mt-24">
      <div className="px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="font-mincho text-[18px] tracking-wider mb-2">巡拓な生活</div>
            <div className="font-mono text-[7px] tracking-[0.2em] text-ink-60 mb-1">JUNTAKUNA SEIKATSU — ARCHIVE_001</div>
            <div className="font-mono text-[7px] tracking-[0.15em] text-ink-60">日本の暮らしを、もう一度自分の手に取り戻す。</div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[7px] tracking-[0.15em] text-ink-60 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-right">
            <div className="font-mono text-[7px] text-accent tracking-[0.15em]">STATUS_ACTIVE</div>
            <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em] mt-1">FIELD_NOTE / 001</div>
            <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em]">PROJECT 2026–</div>
          </div>
        </div>

        <div className="border-t border-ink-60 mt-8 pt-6 flex justify-between items-center">
          <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em]">© 2026 JUNTAKUNA SEIKATSU</div>
          <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em]">39.5010°N, 141.0010°E</div>
        </div>
      </div>
    </footer>
  )
}
