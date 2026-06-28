const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://juntakuna-seikatsu.com'

export const TRACKING_URLS = {
  /** SNS プロフィール欄に貼るURL (Instagram等) */
  sns: `${BASE}/?utm_source=instagram&utm_medium=social&utm_campaign=profile`,

  /** QRコード経由 — 対面で読み取ってもらう用 */
  qr: `${BASE}/?utm_source=qr&utm_medium=offline&utm_campaign=meishi`,
} as const
