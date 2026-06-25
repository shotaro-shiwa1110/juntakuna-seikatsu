'use client'

interface Axis {
  label: string
  value: number // 0–100
}

interface Props {
  axes: Axis[]
}

const SIZE = 260
const CX = SIZE / 2
const CY = SIZE / 2
const R = 90

function polarToXY(angleDeg: number, r: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

export default function ActivityRadar({ axes }: Props) {
  const n = axes.length
  const rings = [0.33, 0.66, 1.0]

  const ringPath = (ratio: number) =>
    axes.map((_, i) => {
      const { x, y } = polarToXY((360 / n) * i, R * ratio)
      return `${x},${y}`
    }).join(' ')

  const dataPoints = axes.map((axis, i) => {
    const { x, y } = polarToXY((360 / n) * i, R * (axis.value / 100))
    return `${x},${y}`
  })

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      style={{ display: 'block', maxWidth: '100%' }}
      aria-label="活動領域レーダーチャート"
    >
      <defs>
        <style>{`
          @keyframes radar-expand {
            from { transform: scale(0); opacity: 0; }
            to   { transform: scale(1); opacity: 1; }
          }
          .radar-data {
            transform-origin: ${CX}px ${CY}px;
            animation: radar-expand 1s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
            animation-delay: 0.3s;
            opacity: 0;
          }
        `}</style>
      </defs>

      {/* Grid rings */}
      {rings.map((ratio, ri) => (
        <polygon
          key={ri}
          points={ringPath(ratio)}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={ratio === 1.0 ? 0.6 : 0.4}
          opacity={0.4}
        />
      ))}

      {/* Axis lines */}
      {axes.map((_, i) => {
        const outer = polarToXY((360 / n) * i, R)
        return (
          <line key={i} x1={CX} y1={CY} x2={outer.x} y2={outer.y}
            stroke="var(--color-border)" strokeWidth={0.5} opacity={0.5} />
        )
      })}

      {/* Data polygon — animates from center */}
      <g className="radar-data">
        <polygon
          points={dataPoints.join(' ')}
          fill="var(--color-accent)"
          fillOpacity={0.18}
          stroke="var(--color-accent)"
          strokeWidth={1.5}
        />
      </g>

      {/* Axis labels */}
      {axes.map((axis, i) => {
        const labelR = R + 20
        const { x, y } = polarToXY((360 / n) * i, labelR)
        return (
          <text key={i} x={x} y={y}
            textAnchor="middle" dominantBaseline="middle"
            fontSize={10} fontFamily="'Shippori Mincho', serif"
            fill="var(--color-ink)" opacity={0.8}>
            {axis.label}
          </text>
        )
      })}

      {/* Center dot */}
      <circle cx={CX} cy={CY} r={2.5} fill="var(--color-border)" opacity={0.6} />
    </svg>
  )
}
