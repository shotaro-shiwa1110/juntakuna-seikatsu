import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

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
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
        >
          メインコンテンツへ
        </a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
