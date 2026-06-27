interface Props {
  id: string
  coords?: string
  status?: string
  className?: string
}

export default function FieldAnnotation({ id, coords = '39.5010°N', status = 'ACTIVE', className = '' }: Props) {
  return (
    <div className={`font-mono text-[12px] tracking-[0.12em] leading-[1.9] ${className}`}>
      <div className="code-tag">
        <span className="text-accent">{id}</span>
        <br />
        <span className="text-ink-30">{coords}</span>
        <br />
        <span className="text-ink-30">STATUS_{status}</span>
      </div>
    </div>
  )
}
