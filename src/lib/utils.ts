/**
 * Convert **bold** and *italic* markdown to HTML for log body text.
 */
export function parseBodyParagraph(para: string): string {
  return para
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
}

/**
 * Estimate reading time in minutes.
 * Japanese average: ~400 characters/min.
 */
export function readingTime(text: string): number {
  const chars = text.replace(/[\s\n]/g, '').length
  return Math.max(1, Math.ceil(chars / 400))
}

/**
 * Format date string for display (2026.05.21 → 2026年5月21日).
 */
export function formatDate(date: string): string {
  const parts = date.split('.')
  if (parts.length !== 3) return date
  return `${parts[0]}年${parseInt(parts[1])}月${parseInt(parts[2])}日`
}
