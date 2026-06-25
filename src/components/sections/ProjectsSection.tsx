import Link from 'next/link'
import type { Project } from '@/types'
import ProjectCard from '@/components/ui/ProjectCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BtnArrow from '@/components/ui/BtnArrow'

interface Props {
  projects: Project[]
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className="border-b border-border px-6 py-16">
      <ScrollReveal>
        <div className="mb-2">
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">PROJECTS</div>
          <h2 className="font-mincho text-[1.6rem]">進行中のプロジェクト</h2>
        </div>
        <p className="font-serif text-ink-60 leading-[1.8] mt-3 mb-10" style={{ fontSize: '1.05rem' }}>
          暮らしの5つの領域で、実践と実験を続けています。
        </p>
      </ScrollReveal>

      {/* 2-col on desktop, 1-col on mobile */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 60} style={{ flex: '1 1 calc(50% - 6px)', minWidth: 260 }}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="mt-10">
          <Link href="/projects" className="btn-secondary">
            すべてのプロジェクトを見る <BtnArrow />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
