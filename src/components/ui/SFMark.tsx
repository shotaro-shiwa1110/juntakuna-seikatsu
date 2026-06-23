interface Props {
  size?: number
  className?: string
}

export default function SFMark({ size = 100, className = '' }: Props) {
  const cx = 50
  const cy = 50
  const R = 44     // outer ring
  const Ri = 20    // inner ring

  // Polar helper
  const pt = (angleDeg: number, r: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  // 8 tick marks on outer ring
  const ticks = Array.from({ length: 8 }, (_, i) => {
    const major = i % 2 === 0
    const outer = pt(i * 45, R)
    const inner = pt(i * 45, R - (major ? 7 : 4))
    return { outer, inner, major }
  })

  // Crosshair arms: two segments per cardinal axis
  // inner arm: center → Ri  / outer arm: R-10 → R
  const arms = [0, 90, 180, 270].map((a) => ({
    p1: pt(a, 0),
    p2: pt(a, Ri - 2),
    p3: pt(a, R - 10),
    p4: pt(a, R),
  }))

  // Diamond center
  const D = 9
  const diamond = `${cx},${cy - D} ${cx + D},${cy} ${cx},${cy + D} ${cx - D},${cy}`

  // Small corner brackets at diagonal positions (between rings)
  const brackets = [45, 135, 225, 315].map((a) => {
    const c = pt(a, (R + Ri) / 2)
    const s = 4
    return { cx: c.x, cy: c.y, s }
  })

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      {/* Outer ring */}
      <circle
        cx={cx} cy={cy} r={R}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="0.6"
      />

      {/* Inner ring (dashed) */}
      <circle
        cx={cx} cy={cy} r={Ri}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="0.5"
        strokeDasharray="2.5 2.5"
      />

      {/* Tick marks */}
      {ticks.map(({ outer, inner, major }, i) => (
        <line
          key={i}
          x1={outer.x} y1={outer.y}
          x2={inner.x} y2={inner.y}
          stroke={major ? 'var(--color-ink-30)' : 'var(--color-border)'}
          strokeWidth={major ? 0.8 : 0.5}
        />
      ))}

      {/* Crosshair arms */}
      {arms.map((arm, i) => (
        <g key={i}>
          <line
            x1={arm.p1.x} y1={arm.p1.y}
            x2={arm.p2.x} y2={arm.p2.y}
            stroke="var(--color-border)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          <line
            x1={arm.p3.x} y1={arm.p3.y}
            x2={arm.p4.x} y2={arm.p4.y}
            stroke="var(--color-ink-30)"
            strokeWidth="0.8"
          />
        </g>
      ))}

      {/* Corner accent brackets at diagonal positions */}
      {brackets.map(({ cx: bx, cy: by, s }, i) => (
        <g key={i} stroke="var(--color-accent)" strokeWidth="0.8" fill="none" opacity="0.6">
          <line x1={bx - s} y1={by - s} x2={bx - s} y2={by} />
          <line x1={bx - s} y1={by - s} x2={bx} y2={by - s} />
        </g>
      ))}

      {/* Center diamond (accent) */}
      <polygon
        points={diamond}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.2"
      />
      <circle cx={cx} cy={cy} r={2} fill="var(--color-accent)" />

      {/* Coordinate label */}
      <text
        x={cx} y={cy + R + 6}
        textAnchor="middle"
        fontSize="4"
        fontFamily="'Space Mono', monospace"
        fill="var(--color-ink-30)"
        letterSpacing="0.04em"
      >
        39.5°N · 141.0°E
      </text>

      {/* ID label top */}
      <text
        x={cx} y={cy - R - 3}
        textAnchor="middle"
        fontSize="3.5"
        fontFamily="'Space Mono', monospace"
        fill="var(--color-ink-30)"
        letterSpacing="0.08em"
      >
        J.S._001
      </text>
    </svg>
  )
}
