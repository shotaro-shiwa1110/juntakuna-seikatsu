import type { Metadata } from 'next'
import './globals.css'
import LeftNav from '@/components/layout/LeftNav'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'

export const metadata: Metadata = {
  title: {
    default: '巡拓な生活 | Juntakuna Seikatsu',
    template: '%s | 巡拓な生活',
  },
  description: '日本の暮らしを、もう一度自分の手に取り戻す。農・食・住まい・文化・地域の実践アーカイブメディア。',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: '巡拓な生活',
    description: '日本の暮らしを、もう一度自分の手に取り戻す。実践アーカイブメディア。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <LoadingScreen />
        {/* Satoyama landscape — fills full viewport, always visible outside page unit */}
        <div className="bg-satoyama" aria-hidden="true" />
        {/* Grain overlay over everything */}
        <div className="grain-layer" aria-hidden="true" />

        {/* ── Desktop sidebars (only when viewport > 430px card) ── */}
        <aside className="desktop-deco desktop-deco-left" aria-hidden="true">
          <div className="flex flex-col gap-3">
            <span className="deco-logo-ja">巡拓な生活</span>
            <span className="deco-logo-en">JUNTAKUNA SEIKATSU</span>
          </div>
          <span className="deco-tagline">日本の暮らしを、もう一度自分の手に取り戻す</span>
          <span className="deco-coord">39.5°N · 141.0°E</span>
        </aside>

        <aside className="desktop-deco desktop-deco-right" aria-hidden="true">
          <p className="deco-running-text">
            FOOD · HOME · CULTURE<br />
            COMMUNITY · LAND<br />
            <br />
            THE SLOW PRACTICE<br />
            OF DAILY LIVING.<br />
            RECONNECTING WITH<br />
            LAND AND SEASON.<br />
            <br />
            A PERSONAL ARCHIVE<br />
            OF JUNTAKUNA SEIKATSU<br />
            — EST. 2026
          </p>
        </aside>

        {/*
          page-wrapper: phone-width card centered on desktop, full-width on mobile.
          On desktop the background shows prominently on both sides.
        */}
        <div className="page-wrapper">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-16 focus:z-[100] btn-primary"
          >
            メインコンテンツへ
          </a>

          {/* page-inner: 12px left gap (shows background) + nav + content as ONE unit */}
          <div className="page-inner">
            <LeftNav />
            <div className="flex flex-col flex-1 min-w-0 bg-base">
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
