import Link from 'next/link'
import type { Project } from '@/types'
import ProjectCard from '@/components/ui/ProjectCard'

interface Props {
  projects: Project[]
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className="border-b border-border px-8 md:px-14 py-10">
      <div className="flex items-baseline justify-between mb-2">
        <div>
          <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-1">PROJECTS</div>
          <h2 className="font-mincho text-[18px]">進行中のプロジェクト</h2>
        </div>
        <Link href="/projects" className="font-mono text-[7px] tracking-[0.1em] text-ink-30 hover:text-ink transition-colors">
          すべてのプロジェクトを見る →
        </Link>
      </div>
      <p className="font-serif text-[13px] text-ink-30 mb-6">暮らしの5つの領域で、実践と実験を続けています。</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border border-border divide-y md:divide-y-0 md:divide-x divide-border">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
