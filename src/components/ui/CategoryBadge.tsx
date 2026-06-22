import type { Category } from '@/types'

const categoryColors: Record<Category, { bg: string; text: string }> = {
  '食':           { bg: 'bg-[#F0F7D4]', text: 'text-[#5A7A00]' },
  '住':           { bg: 'bg-[#D4ECF7]', text: 'text-[#005A7A]' },
  '文化':         { bg: 'bg-[#F7F0D4]', text: 'text-[#7A5A00]' },
  '経済':         { bg: 'bg-[#F7D4D4]', text: 'text-[#7A0000]' },
  'コミュニティ': { bg: 'bg-[#F7D4F0]', text: 'text-[#7A0060]' },
  '自然':         { bg: 'bg-[#D4F7D4]', text: 'text-[#006A00]' },
}

interface Props {
  category: Category
}

export default function CategoryBadge({ category }: Props) {
  const { bg, text } = categoryColors[category]
  return (
    <span className={`inline-block font-mono text-[7px] tracking-[0.1em] px-2 py-0.5 ${bg} ${text}`}>
      {category}
    </span>
  )
}
