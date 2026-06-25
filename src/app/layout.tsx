import type { Metadata } from 'next'
import './globals.css'
import LeftNav from '@/components/layout/LeftNav'
import TopNav from '@/components/layout/TopNav'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'
import ScrollReset from '@/components/ui/ScrollReset'

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
      <body>
        <LoadingScreen />
        <ScrollReset />

        <div id="page-scroll" className="page-wrapper">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
          >
            メインコンテンツへ
          </a>

          {/* Desktop: TopNav sticky at top; hidden on mobile via CSS */}
          <TopNav />

          {/* Mobile: LeftNav on left + content; Desktop: just content (TopNav above) */}
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
