import HeroSection from '@/components/sections/HeroSection'
import DashboardSection from '@/components/sections/DashboardSection'
import ManifestoSection from '@/components/sections/ManifestoSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import LatestLogSection from '@/components/sections/LatestLogSection'
import GradientBlob from '@/components/ui/GradientBlob'
import { dashboardStats, projects, logs } from '@/lib/mock-data'

export default function TopPage() {
  return (
    <>
      {/* Hero + Dashboard share one gradient background */}
      <div className="relative">
        {/* デスクトップ用 — 大きめ */}
        <GradientBlob
          className="hidden-mobile"
          blobs={[
            { color: '#e8643a', size: 700, top: 0,   right: 0,    opacity: 0.24, blur: 140 },
            { color: '#c0a000', size: 650, top: 500, left: 0,     opacity: 0.18, blur: 130 },
            { color: '#4a6fa5', size: 500, top: 300, left: '30%', opacity: 0.13, blur: 110 },
          ]}
        />
        {/* モバイル用 — 小さめ */}
        <GradientBlob
          className="hidden-desktop"
          blobs={[
            { color: '#e8643a', size: 320, top: 0,   right: 0,    opacity: 0.28, blur: 80 },
            { color: '#c0a000', size: 280, top: 400, left: 0,     opacity: 0.22, blur: 70 },
            { color: '#4a6fa5', size: 220, top: 220, left: '30%', opacity: 0.16, blur: 60 },
          ]}
        />
        <HeroSection />
        <DashboardSection stats={dashboardStats} logs={logs} />
      </div>
      <ManifestoSection />
      <ProjectsSection projects={projects} />
      <LatestLogSection entries={logs.slice(0, 4)} />
    </>
  )
}
