import type { Category } from '@/types'

const categoryConfig: Record<Category, { bg: string; text: string; dot: string }> = {
  '食':           { bg: 'bg-[#EEF7D0]', text: 'text-[#4A6A00]', dot: '#7AAA00' },
  '住':           { bg: 'bg-[#D0EAF7]', text: 'text-[#004A6A]', dot: '#0080AA' },
  '文化':         { bg: 'bg-[#F7EED0]', text: 'text-[#6A4A00]', dot: '#AA8000' },
  '経済':         { bg: 'bg-[#F7D8D0]', text: 'text-[#6A1500]', dot: '#C03000' },
  'コミュニティ': { bg: 'bg-[#EDD0F7]', text: 'text-[#5A0070]', dot: '#9000B0' },
  '自然':         { bg: 'bg-[#D0F7E0]', text: 'text-[#005A30]', dot: '#008040' },
}

interface Props {
  category: Category
}

export default function CategoryBadge({ category }: Props) {
  const { bg, text, dot } = categoryConfig[category]
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] px-2.5 py-1 rounded-sm ${bg} ${text}`}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: dot }} />
      {category}
    </span>
  )
}
