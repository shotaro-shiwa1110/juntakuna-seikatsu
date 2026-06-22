import HeroSection from '@/components/sections/HeroSection'
import DashboardSection from '@/components/sections/DashboardSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import LatestLogSection from '@/components/sections/LatestLogSection'
import { dashboardStats, projects, logs } from '@/lib/mock-data'

export default function TopPage() {
  return (
    <>
      <HeroSection />
      <DashboardSection stats={dashboardStats} />
      <ProjectsSection projects={projects} />
      <LatestLogSection entries={logs.slice(0, 4)} />
    </>
  )
}
