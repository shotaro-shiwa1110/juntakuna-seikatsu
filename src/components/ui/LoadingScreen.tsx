'use client'

import { useEffect, useState } from 'react'
import SFMark from '@/components/ui/SFMark'

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('done')

  useEffect(() => {
    if (sessionStorage.getItem('loaded')) return
    sessionStorage.setItem('loaded', '1')
    setPhase('in')
    const t1 = setTimeout(() => setPhase('hold'), 50)
    const t2 = setTimeout(() => setPhase('out'), 1400)
    const t3 = setTimeout(() => setPhase('done'), 2100)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-base pointer-events-none"
      style={{
        opacity: phase === 'out' ? 0 : 1,
        transition: phase === 'out' ? 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'opacity 0.3s ease',
      }}
    >
      <div
        className="flex flex-col items-center gap-5"
        style={{
          opacity: phase === 'hold' || phase === 'out' ? 1 : 0,
          transform: phase === 'hold' || phase === 'out' ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <SFMark size={64} className="opacity-60 sf-float" />
        <div className="flex flex-col items-center gap-1">
          <div className="font-mincho text-[1.6rem] tracking-[0.25em] text-ink">
            巡拓な生活
          </div>
          <div className="font-mono text-[12px] tracking-[0.4em] text-ink-30">
            JUNTAKUNA SEIKATSU
          </div>
        </div>
        {/* Scan line effect */}
        <div className="flex items-center gap-2 mt-2">
          <span className="w-8 h-px bg-border" />
          <span className="font-mono text-[12px] tracking-[0.2em] text-ink-30">LOADING</span>
          <span className="w-8 h-px bg-border" />
        </div>
      </div>
    </div>
  )
}
