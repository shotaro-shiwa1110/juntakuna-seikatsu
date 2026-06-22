import NetworkGraph from '@/components/ui/NetworkGraph'
import FieldAnnotation from '@/components/ui/FieldAnnotation'

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border min-h-[520px]">
      {/* LEFT */}
      <div className="flex flex-col justify-between p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
        <div>
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-8">
            FIELD NOTE / 001 — PROJECT: JUNTAKUNA SEIKATSU 2026–
          </div>
          <h1 className="font-mincho text-[36px] md:text-[44px] leading-[1.55] tracking-[0.02em] mb-8">
            未来の暮らしは、<br />
            遠い場所じゃない。<br />
            日々の選択の先にある。
          </h1>
          <p className="font-serif text-body text-ink-60 max-w-md mb-10">
            農・食・住まい・文化・地域との関わりを通じて、
            これからの豊かな暮らしを実践し記録するプロジェクト。
            個人の暮らしから、社会のあり方を問い直す。
            小さな実験の積み重ねが、未来をつくると信じて。
          </p>
        </div>
        <div className="flex gap-8">
          {[
            { value: '39.5010°N', label: '観測緯度' },
            { value: '141.0010°E', label: '観測経度' },
            { value: '2026', label: '開始年' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-mono text-[11px] tracking-[0.05em] text-ink">{value}</div>
              <div className="font-mono text-[7px] tracking-[0.12em] text-ink-30 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Network Graph */}
      <div className="relative flex items-center justify-center p-8 min-h-[360px]">
        <div className="absolute top-5 right-6 text-right">
          <FieldAnnotation
            id="JUNTAKUNA_001"
            coords="39.5010°N"
            status="ACTIVE"
            className="text-right"
          />
          <div className="font-mono text-[6px] tracking-[0.15em] text-ink-30 mt-3 leading-[2]">
            PROJECT<br />JUNTAKUNA<br />SEIKATSU<br />2026–
          </div>
        </div>
        <div className="w-full max-w-[340px] aspect-square">
          <NetworkGraph />
        </div>
      </div>
    </section>
  )
}
