const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://juntakuna-seikatsu.com'

export const TRACKING_URLS = {
  /** SNS プロフィール欄に貼るURL (Instagram等) */
  sns: `${BASE}/?ref=sns`,

  /** QRコード経由 — 対面で読み取ってもらう用 */
  qr: `${BASE}/?ref=qr`,
} as const
