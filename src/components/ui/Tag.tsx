interface Props {
  label: string
}

export default function Tag({ label }: Props) {
  return (
    <span className="inline-block font-mono text-[8px] tracking-[0.08em] px-2 py-0.5 border border-border text-ink-30">
      {label}
    </span>
  )
}
