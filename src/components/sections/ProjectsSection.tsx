import Link from 'next/link'
import type { Project } from '@/types'
import ProjectCard from '@/components/ui/ProjectCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  projects: Project[]
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className="border-b border-border px-6 md:px-14 py-16">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">PROJECTS</div>
            <h2 className="font-mincho text-[28px] md:text-[32px]">進行中のプロジェクト</h2>
          </div>
          <Link href="/projects" className="btn-secondary self-start md:self-auto">
            すべてのプロジェクトを見る →
          </Link>
        </div>
        <p className="font-serif text-[16px] text-ink-60 leading-[1.8] mb-10">
          暮らしの5つの領域で、実践と実験を続けています。
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border border-border divide-y md:divide-y-0 md:divide-x divide-border">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
