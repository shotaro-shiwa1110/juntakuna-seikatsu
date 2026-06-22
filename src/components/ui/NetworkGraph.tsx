export default function NetworkGraph() {
  const edges: [number, number, number, number, boolean][] = [
    [160, 102, 160, 47, false],
    [215, 140, 274, 140, false],
    [105, 140, 46, 140, false],
    [160, 178, 160, 236, false],
    [205, 107, 250, 68, true],   // accent edge to 経済
    [114, 106, 64, 62, false],
  ]

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 320 280"
      className="w-full h-full"
      aria-label="豊かな暮らしのネットワーク図"
    >
      {/* 外円装飾 */}
      <circle cx="160" cy="140" r="75" fill="none" stroke="#D5CFC8" strokeWidth="0.5" strokeDasharray="2 4" />
      <circle cx="160" cy="140" r="55" fill="none" stroke="#D5CFC8" strokeWidth="0.8" />

      {/* エッジ */}
      {edges.map(([x1, y1, x2, y2, isAccent], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={isAccent ? '#B8F000' : '#CCC'} strokeWidth="0.8" />
      ))}

      {/* 中心ノード */}
      <circle cx="160" cy="140" r="38" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      <text x="160" y="136" fontFamily="Shippori Mincho, serif" fontSize="12" fill="#1A1A1A" textAnchor="middle">豊かな</text>
      <text x="160" y="152" fontFamily="Shippori Mincho, serif" fontSize="12" fill="#1A1A1A" textAnchor="middle">暮らし</text>

      {/* 食 */}
      <circle cx="160" cy="28" r="20" fill="none" stroke="#D5CFC8" strokeWidth="0.6" />
      <text x="160" y="31" fontFamily="Shippori Mincho, serif" fontSize="11" fill="#555" textAnchor="middle">食</text>
      <text x="160" y="20" fontFamily="Space Mono, monospace" fontSize="6" fill="#B8F000" textAnchor="middle">FOOD</text>

      {/* 住 */}
      <circle cx="292" cy="140" r="20" fill="none" stroke="#D5CFC8" strokeWidth="0.6" />
      <text x="292" y="143" fontFamily="Shippori Mincho, serif" fontSize="11" fill="#555" textAnchor="middle">住</text>
      <text x="292" y="132" fontFamily="Space Mono, monospace" fontSize="6" fill="#9A9390" textAnchor="middle">HOME</text>

      {/* 自然 */}
      <circle cx="28" cy="140" r="20" fill="none" stroke="#D5CFC8" strokeWidth="0.6" />
      <text x="28" y="143" fontFamily="Shippori Mincho, serif" fontSize="11" fill="#555" textAnchor="middle">自然</text>
      <text x="28" y="132" fontFamily="Space Mono, monospace" fontSize="5.5" fill="#9A9390" textAnchor="middle">NATURE</text>

      {/* 文化 */}
      <circle cx="160" cy="254" r="20" fill="none" stroke="#D5CFC8" strokeWidth="0.6" />
      <text x="160" y="257" fontFamily="Shippori Mincho, serif" fontSize="11" fill="#555" textAnchor="middle">文化</text>
      <text x="160" y="246" fontFamily="Space Mono, monospace" fontSize="5.5" fill="#9A9390" textAnchor="middle">CULTURE</text>

      {/* 経済（accent） */}
      <circle cx="264" cy="55" r="20" fill="none" stroke="#B8F000" strokeWidth="0.6" />
      <text x="264" y="58" fontFamily="Shippori Mincho, serif" fontSize="11" fill="#555" textAnchor="middle">経済</text>
      <text x="264" y="47" fontFamily="Space Mono, monospace" fontSize="5.5" fill="#B8F000" textAnchor="middle">ECONOMY</text>

      {/* コミュニティ */}
      <circle cx="50" cy="48" r="24" fill="none" stroke="#D5CFC8" strokeWidth="0.6" />
      <text x="50" y="45" fontFamily="Shippori Mincho, serif" fontSize="9" fill="#555" textAnchor="middle">コミュ</text>
      <text x="50" y="57" fontFamily="Shippori Mincho, serif" fontSize="9" fill="#555" textAnchor="middle">ニティ</text>
      <text x="50" y="34" fontFamily="Space Mono, monospace" fontSize="5" fill="#9A9390" textAnchor="middle">COMMUNITY</text>

      {/* 座標マーカー */}
      <line x1="4" y1="140" x2="12" y2="140" stroke="#B8F000" strokeWidth="0.5" />
      <line x1="8" y1="136" x2="8" y2="144" stroke="#B8F000" strokeWidth="0.5" />
    </svg>
  )
}
