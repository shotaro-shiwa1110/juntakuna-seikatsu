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
        <div className="flex flex-col justify-between gap-6 mb-4">
          <div>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">PROJECTS</div>
            <h2 className="font-mincho text-[1.6rem]">進行中のプロジェクト</h2>
          </div>
          <Link href="/projects" className="btn-secondary self-start md:self-auto">
            すべてのプロジェクトを見る <BtnArrow />
          </Link>
        </div>
        <p className="font-serif text-[1.07rem] text-ink-60 leading-[1.8] mb-10">
          暮らしの5つの領域で、実践と実験を続けています。
        </p>
      </ScrollReveal>

      <div className="flex flex-col border border-border divide-y divide-border">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
