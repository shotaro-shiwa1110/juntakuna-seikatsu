import ScrollReveal from '@/components/ui/ScrollReveal'

const domains = [
  { id: '01', name: '食', nameEn: 'FOOD', desc: '農・発酵・保存食', x: 50, y: 12 },
  { id: '02', name: '住', nameEn: 'HOME', desc: '空き家・古民家・DIY', x: 88, y: 60 },
  { id: '03', name: '文化', nameEn: 'CULTURE', desc: '祭り・工芸・歳時記', x: 70, y: 96 },
  { id: '04', name: '経済', nameEn: 'ECONOMY', desc: '交換・小商い・朝市', x: 30, y: 96 },
  { id: '05', name: 'つながり', nameEn: 'COMMUNITY', desc: '関係人口・協働', x: 12, y: 60 },
]

const CENTER = { x: 50, y: 54 }
const CENTER_LABEL = '実践する\n暮らし'

export default function ManifestoSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: concept diagram */}
        <div className="border-b md:border-b-0 md:border-r border-border p-8 md:p-12 flex flex-col">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">CONCEPT MAP</div>
            <h2 className="font-mincho text-[26px] md:text-[30px] mb-8">活動の地図</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative w-full" style={{ paddingBottom: '85%' }}>
              <svg
                viewBox="0 0 100 90"
                className="absolute inset-0 w-full h-full"
                aria-label="活動領域コンセプトマップ"
              >
                {/* Background grid dots */}
                {Array.from({ length: 9 }, (_, row) =>
                  Array.from({ length: 10 }, (_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={5 + col * 10}
                      cy={5 + row * 10}
                      r={0.4}
                      fill="var(--color-border)"
                    />
                  ))
                )}

                {/* Edges from center to each domain */}
                {domains.map((d) => (
                  <line
                    key={d.id}
                    x1={CENTER.x} y1={CENTER.y}
                    x2={d.x} y2={d.y}
                    stroke="var(--color-border)"
                    strokeWidth={0.5}
                    strokeDasharray="2 2"
                  />
                ))}

                {/* Domain nodes */}
                {domains.map((d) => (
                  <g key={d.id}>
                    <circle cx={d.x} cy={d.y} r={7} fill="var(--color-base)" stroke="var(--color-border)" strokeWidth={0.8} />
                    <text
                      x={d.x} y={d.y + 0.5}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={4.5}
                      fontFamily="'Shippori Mincho', serif"
                      fill="var(--color-ink)"
                    >
                      {d.name}
                    </text>
                  </g>
                ))}

                {/* Center node */}
                <circle cx={CENTER.x} cy={CENTER.y} r={9} fill="var(--color-accent)" />
                <text
                  x={CENTER.x} y={CENTER.y - 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={4}
                  fontFamily="'Shippori Mincho', serif"
                  fill="var(--color-ink)"
                >
                  実践する
                </text>
                <text
                  x={CENTER.x} y={CENTER.y + 3.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={4}
                  fontFamily="'Shippori Mincho', serif"
                  fill="var(--color-ink)"
                >
                  暮らし
                </text>

                {/* Corner crosshairs */}
                <g stroke="var(--color-accent)" strokeWidth={0.7} opacity={0.5}>
                  <line x1="2" y1="2" x2="6" y2="2" /><line x1="2" y1="2" x2="2" y2="6" />
                  <line x1="98" y1="2" x2="94" y2="2" /><line x1="98" y1="2" x2="98" y2="6" />
                  <line x1="2" y1="88" x2="6" y2="88" /><line x1="2" y1="88" x2="2" y2="84" />
                  <line x1="98" y1="88" x2="94" y2="88" /><line x1="98" y1="88" x2="98" y2="84" />
                </g>

                {/* Coordinate annotation */}
                <text x="2" y="1.5" fontSize="2.2" fontFamily="'Space Mono', monospace" fill="var(--color-ink-30)">
                  39.5°N 141.0°E
                </text>
              </svg>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: manifesto lines */}
        <div className="p-8 md:p-12">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">MANIFESTO</div>
            <h2 className="font-mincho text-[26px] md:text-[30px] mb-8">このプロジェクトの軸</h2>
          </ScrollReveal>

          <div className="divide-y divide-border border-t border-border">
            {[
              { num: '01', text: '農・食・住まいを、自分の手に取り戻す。' },
              { num: '02', text: '消費ではなく、実践の記録を残す。' },
              { num: '03', text: '地域と人を、物語ではなく現場で知る。' },
              { num: '04', text: '失敗も含めて、実験として捉える。' },
              { num: '05', text: '小さな選択の積み重ねが、未来をつくる。' },
            ].map(({ num, text }, i) => (
              <ScrollReveal key={num} delay={i * 60}>
                <div className="flex items-start gap-5 py-5">
                  <div className="font-mono text-[8px] tracking-[0.12em] text-accent mt-1 shrink-0">{num}</div>
                  <div className="font-mincho text-[17px] md:text-[18px] leading-[1.7] text-ink">{text}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
