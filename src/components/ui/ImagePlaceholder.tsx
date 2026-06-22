interface Props {
  label: string
  className?: string
}

export default function ImagePlaceholder({ label, className = '' }: Props) {
  return (
    <div className={`relative bg-[#E8E2D9] overflow-hidden ${className}`} style={{
      backgroundImage: `
        linear-gradient(rgba(213,207,200,0.6) 1px, transparent 1px),
        linear-gradient(90deg, rgba(213,207,200,0.6) 1px, transparent 1px)
      `,
      backgroundSize: '24px 24px',
    }}>
      {/* Corner crosshairs — accent color, SF aesthetic */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#D5CFC8" strokeWidth="0.75" />
          <line x1="10" y1="0" x2="10" y2="20" stroke="#D5CFC8" strokeWidth="0.5" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="#D5CFC8" strokeWidth="0.5" />
          <circle cx="10" cy="10" r="1.5" fill="#B8F000" />
        </svg>
        <span className="font-mono text-[7px] tracking-[0.12em] text-ink-30 text-center px-6 leading-[1.8]">{label}</span>
      </div>
    </div>
  )
}
