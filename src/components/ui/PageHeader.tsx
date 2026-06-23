import ScrollReveal from './ScrollReveal'

interface Props {
  label: string           // e.g. "PROJECTS"
  title: string           // Main H1
  description?: string    // Optional lead text
  annotation?: string     // Optional right-side coordinate / ID
  children?: React.ReactNode
}

export default function PageHeader({ label, title, description, annotation, children }: Props) {
  return (
    <header className="border-b border-border px-6 py-14">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1 max-w-2xl">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.3em] text-accent mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-accent inline-block" />
              {label}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <h1 className="font-mincho text-[2.65rem] leading-[1.3] tracking-[0.02em] mb-0">
              {title}
            </h1>
          </ScrollReveal>
          {description && (
            <ScrollReveal delay={120}>
              <p className="font-serif text-[1.13rem] text-ink-60 leading-[1.9] mt-6 max-w-lg">
                {description}
              </p>
            </ScrollReveal>
          )}
          {children && (
            <ScrollReveal delay={180}>
              <div className="mt-8">{children}</div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </header>
  )
}
