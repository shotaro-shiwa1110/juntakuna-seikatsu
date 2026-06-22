interface Props {
  label: string
  className?: string
}

export default function ImagePlaceholder({ label, className = '' }: Props) {
  return (
    <div className={`bg-[#E5E0D8] border border-dashed border-border flex items-center justify-center ${className}`}>
      <span className="font-mono text-[7px] tracking-[0.08em] text-ink-30 text-center px-4">{label}</span>
    </div>
  )
}
