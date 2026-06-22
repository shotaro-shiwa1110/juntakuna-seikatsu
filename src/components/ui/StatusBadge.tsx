interface Props {
  status: 'ACTIVE' | 'PAUSED' | 'COMPLETED'
}

const config = {
  ACTIVE: { label: 'ACTIVE', color: 'text-accent', dot: 'bg-accent' },
  PAUSED: { label: 'PAUSED', color: 'text-ink-30', dot: 'bg-ink-30' },
  COMPLETED: { label: 'COMPLETED', color: 'text-ink-60', dot: 'bg-ink-60' },
}

export default function StatusBadge({ status }: Props) {
  const { label, color, dot } = config[status]
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.15em] ${color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot} ${status === 'ACTIVE' ? 'animate-pulse' : ''}`} />
      {label}
    </span>
  )
}
