import type { Category } from '@/types'

const categoryConfig: Record<Category, { bg: string; text: string; dot: string }> = {
  '食':           { bg: 'bg-[#e4ecce]', text: 'text-[#5a6a2a]', dot: '#7a8a40' },
  '住':           { bg: 'bg-[#ccdce8]', text: 'text-[#3a5a6a]', dot: '#5a7a8a' },
  '文化':         { bg: 'bg-[#ece2cc]', text: 'text-[#6a5030]', dot: '#8a7040' },
  '経済':         { bg: 'bg-[#ead4cc]', text: 'text-[#6a3830]', dot: '#8a5048' },
  'コミュニティ': { bg: 'bg-[#ddd0e8]', text: 'text-[#5a3870]', dot: '#785090' },
  '自然':         { bg: 'bg-[#cce4d4]', text: 'text-[#3a5a40]', dot: '#58785a' },
}

interface Props {
  category: Category
}

export default function CategoryBadge({ category }: Props) {
  const { bg, text, dot } = categoryConfig[category]
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] px-2 py-0.5 rounded-sm ${bg} ${text}`}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 border border-current opacity-70" style={{ backgroundColor: dot }} />
      {category}
    </span>
  )
}
