const nodes = [
  { id: '食',           x: 160, y: 36,  r: 20 },
  { id: '経済',         x: 272, y: 100, r: 20, accent: true },
  { id: '住',           x: 258, y: 220, r: 20 },
  { id: '文化',         x: 160, y: 258, r: 20 },
  { id: 'コミュニティ', x: 52,  y: 220, r: 22 },
  { id: '自然',         x: 46,  y: 100, r: 20 },
]

const CENTER = { x: 160, y: 148 }

const centerEdges = [0, 1, 2, 3, 4, 5]
const sideEdges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 2]]

export default function NetworkGraph() {
  return (
    <svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="豊かな暮らしのネットワーク図">
      <defs>
        <pattern id="ng-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#D5CFC8" strokeWidth="0.35" />
        </pattern>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Grid background */}
      <rect width="320" height="290" fill="url(#ng-grid)" opacity="0.55" />

      {/* Corner crosshairs */}
      <line x1="0" y1="0" x2="16" y2="0" stroke="#B8F000" strokeWidth="1.5" />
      <line x1="0" y1="0" x2="0" y2="16" stroke="#B8F000" strokeWidth="1.5" />
      <line x1="304" y1="0" x2="320" y2="0" stroke="#B8F000" strokeWidth="1.5" />
      <line x1="320" y1="0" x2="320" y2="16" stroke="#B8F000" strokeWidth="1.5" />
      <line x1="0" y1="274" x2="0" y2="290" stroke="#B8F000" strokeWidth="1.5" />
      <line x1="0" y1="290" x2="16" y2="290" stroke="#B8F000" strokeWidth="1.5" />
      <line x1="304" y1="290" x2="320" y2="290" stroke="#B8F000" strokeWidth="1.5" />
      <line x1="320" y1="274" x2="320" y2="290" stroke="#B8F000" strokeWidth="1.5" />

      {/* Outer dashed rings */}
      <circle cx={CENTER.x} cy={CENTER.y} r="108" fill="none" stroke="#D5CFC8" strokeWidth="0.5" strokeDasharray="4 6" />
      <circle cx={CENTER.x} cy={CENTER.y} r="55" fill="none" stroke="#D5CFC8" strokeWidth="0.4" strokeDasharray="2 8" />

      {/* Center crosshair */}
      <line x1={CENTER.x - 14} y1={CENTER.y} x2={CENTER.x + 14} y2={CENTER.y} stroke="#9A9390" strokeWidth="0.5" />
      <line x1={CENTER.x} y1={CENTER.y - 14} x2={CENTER.x} y2={CENTER.y + 14} stroke="#9A9390" strokeWidth="0.5" />

      {/* Side edges */}
      {sideEdges.map(([a, b], i) => (
        <line key={`se-${i}`}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="#D5CFC8" strokeWidth="0.5" strokeDasharray="3 7" opacity="0.5"
        />
      ))}

      {/* Center to node edges */}
      {centerEdges.map((ni) => {
        const n = nodes[ni]
        return (
          <line key={`ce-${ni}`}
            x1={CENTER.x} y1={CENTER.y}
            x2={n.x} y2={n.y}
            stroke={n.accent ? '#B8F000' : '#D5CFC8'}
            strokeWidth={n.accent ? '1.2' : '0.7'}
            strokeDasharray={n.accent ? 'none' : '3 6'}
            opacity={n.accent ? '0.9' : '0.6'}
          />
        )
      })}

      {/* Center node */}
      <circle cx={CENTER.x} cy={CENTER.y} r="36" fill="#F5F2ED" stroke="#1A1A1A" strokeWidth="0.8" />
      <circle cx={CENTER.x} cy={CENTER.y} r="30" fill="none" stroke="#B8F000" strokeWidth="0.6" strokeDasharray="3 4" />
      <text x={CENTER.x} y={CENTER.y - 7} fontFamily="Shippori Mincho, serif" fontSize="12" fill="#1A1A1A" textAnchor="middle" fontWeight="500">豊かな</text>
      <text x={CENTER.x} y={CENTER.y + 9} fontFamily="Shippori Mincho, serif" fontSize="12" fill="#1A1A1A" textAnchor="middle" fontWeight="500">暮らし</text>

      {/* Outer nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          {node.accent && (
            <>
              <circle cx={node.x} cy={node.y} r={node.r + 8} fill="none" stroke="#B8F000" strokeWidth="0.5" opacity="0.3" />
              <circle cx={node.x} cy={node.y} r={node.r + 4} fill="rgba(184,240,0,0.08)" stroke="#B8F000" strokeWidth="0.75" opacity="0.5" />
            </>
          )}
          <circle
            cx={node.x} cy={node.y} r={node.r}
            fill={node.accent ? '#B8F000' : '#F5F2ED'}
            stroke={node.accent ? '#B8F000' : '#D5CFC8'}
            strokeWidth={node.accent ? '0' : '0.8'}
            filter={node.accent ? 'url(#glow)' : undefined}
          />
          <text
            x={node.x} y={node.y}
            fontFamily="Shippori Mincho, serif"
            fontSize={node.id.length > 2 ? '7.5' : '12'}
            fill={node.accent ? '#1A1A1A' : '#4A4540'}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {node.id.length > 3 ? (
              <>
                <tspan x={node.x} dy="-4">{node.id.slice(0, 3)}</tspan>
                <tspan x={node.x} dy="10">{node.id.slice(3)}</tspan>
              </>
            ) : node.id}
          </text>
        </g>
      ))}

      {/* Coordinate annotation */}
      <text x="5" y="282" fontFamily="Space Mono, monospace" fontSize="5.5" fill="#9A9390" letterSpacing="1">39.5010°N</text>
      <text x="230" y="282" fontFamily="Space Mono, monospace" fontSize="5.5" fill="#9A9390" letterSpacing="1">141.0010°E</text>
    </svg>
  )
}
