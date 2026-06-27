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
    <section className="section section-bordered">
      <ScrollReveal>
        <div className="section-intro">
          <div className="section-label">PROJECTS</div>
          <h2 className="section-heading-lg">進行中のプロジェクト</h2>
          <p className="body-text">暮らしの5つの領域で、実践と実験を続けています。</p>
        </div>
      </ScrollReveal>

      <div className="grid-2col">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 60}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="section-cta">
          <Link href="/projects" className="btn-secondary">
            すべてのプロジェクトを見る <BtnArrow />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
