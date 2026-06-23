'use client'

interface Axis {
  label: string
  value: number // 0–100
}

interface Props {
  axes: Axis[]
}

const SIZE = 200
const CX = SIZE / 2
const CY = SIZE / 2
const R = 76

function polarToXY(angleDeg: number, r: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

export default function ActivityRadar({ axes }: Props) {
  const n = axes.length
  const rings = [0.25, 0.5, 0.75, 1.0]

  // Polygon points for each ring
  const ringPath = (ratio: number) =>
    axes
      .map((_, i) => {
        const { x, y } = polarToXY((360 / n) * i, R * ratio)
        return `${x},${y}`
      })
      .join(' ')

  // Data polygon
  const dataPoints = axes.map((axis, i) => {
    const { x, y } = polarToXY((360 / n) * i, R * (axis.value / 100))
    return `${x},${y}`
  })

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      style={{ maxWidth: SIZE, display: 'block' }}
      aria-label="活動領域レーダーチャート"
    >
      <defs>
        <filter id="glow-radar">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Grid rings */}
      {rings.map((ratio, ri) => (
        <polygon
          key={ri}
          points={ringPath(ratio)}
          fill="none"
          stroke={ratio === 1.0 ? 'var(--color-border)' : 'var(--color-border)'}
          strokeWidth={ratio === 1.0 ? 1 : 0.5}
          strokeDasharray={ratio < 1.0 ? '3 3' : undefined}
          opacity={ratio === 1.0 ? 0.8 : 0.5}
        />
      ))}

      {/* Axis lines */}
      {axes.map((_, i) => {
        const outer = polarToXY((360 / n) * i, R)
        return (
          <line
            key={i}
            x1={CX} y1={CY}
            x2={outer.x} y2={outer.y}
            stroke="var(--color-border)"
            strokeWidth={0.5}
            strokeDasharray="2 3"
          />
        )
      })}

      {/* Data fill */}
      <polygon
        points={dataPoints.join(' ')}
        fill="var(--color-accent)"
        fillOpacity={0.15}
        stroke="var(--color-accent)"
        strokeWidth={1.5}
        filter="url(#glow-radar)"
      />

      {/* Axis labels */}
      {axes.map((axis, i) => {
        const labelR = R + 18
        const { x, y } = polarToXY((360 / n) * i, labelR)
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={9}
            fontFamily="'Space Mono', monospace"
            fill="var(--color-ink-60)"
            letterSpacing="0.05em"
          >
            {axis.label}
          </text>
        )
      })}

      {/* Center dot */}
      <circle cx={CX} cy={CY} r={2} fill="var(--color-border)" />
    </svg>
  )
}
