import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const moreProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Hero */}
      <section className="relative h-[100dvh] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-primary)]/70 via-[var(--color-text-primary)]/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ padding: '0 var(--page-gutter) 80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] mb-2">
              {project.category.toUpperCase()}
            </p>
            <h1 className="text-display-l text-white">{project.name.toUpperCase()}</h1>
            <p className="text-lg text-white/80 mt-3 max-w-[600px]">{project.description}</p>
            <div className="flex items-center gap-4 mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
              <span>{project.year}</span>
              <span>·</span>
              <span>{project.duration}</span>
              <span>·</span>
              <span>{project.role}</span>
            </div>
          </motion.div>
        </div>

        <Link
          to="/projects"
          className="absolute top-24 left-6 z-10 flex items-center gap-2 text-white/80 hover:text-white font-mono text-xs uppercase tracking-[0.06em] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </section>

      {/* Quick Overview */}
      <section className="bg-[var(--color-surface)]" style={{ padding: '48px var(--page-gutter)' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'CLIENT', value: project.name },
            { label: 'YEAR', value: project.year },
            { label: 'TIMELINE', value: project.duration },
            { label: 'ROLE', value: project.role },
          ].map((fact, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-1">{fact.label}</p>
                <p className="text-xl font-semibold text-[var(--color-text-primary)]">{fact.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Brief */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] ml-[5%]">
          <ScrollReveal>
            <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-accent)] mb-4">THE BRIEF</p>
            <p className="text-lg text-[var(--color-text-primary)] leading-relaxed">{project.brief}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Design Direction */}
      <section style={{ padding: '0 var(--page-gutter) var(--section-gap)' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
          <ScrollReveal variant="fadeLeft">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-accent)] mb-4">DESIGN DIRECTION</p>
              <p className="text-lg text-[var(--color-text-primary)] leading-relaxed">{project.direction}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: '60px var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-xl text-[var(--color-accent)] mb-4">RESULTS</p>
            <p className="text-2xl font-semibold text-[var(--color-text-primary)] leading-relaxed">{project.results}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScrollReveal>
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img src={project.image} alt={`${project.name} detail`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img src={project.image} alt={`${project.name} overview`} className="w-full h-full object-cover" style={{ filter: 'hue-rotate(15deg)' }} loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* More Projects */}
      <section style={{ padding: '0 var(--page-gutter) var(--section-gap)' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] mb-8">MORE PROJECTS</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6" stagger={0.15}>
            {moreProjects.map((p) => (
              <StaggerItem key={p.id} variant="fadeRight">
                <Link to={`/projects/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <p className="mt-2 text-[15px] font-medium text-[var(--color-text-primary)]">{p.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">{p.category}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ padding: '80px var(--page-gutter)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent)]/5 pointer-events-none" />
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)]">LIKE WHAT YOU SEE?</h2>
            <p className="text-[15px] text-[var(--color-text-secondary)] mt-3">Let's create something great together.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 mt-6 bg-[var(--color-accent)] text-white font-mono text-xs uppercase tracking-[0.06em] rounded-xl shadow-neu hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              START A PROJECT
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
