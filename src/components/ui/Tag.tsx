interface Props {
  label: string
}

export default function Tag({ label }: Props) {
  return (
    <span className="inline-block font-mono text-[10px] tracking-[0.06em] px-2.5 py-1 border border-border text-ink-30 hover:border-accent hover:text-ink transition-colors">
      {label}
    </span>
  )
}
