import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProjectBySlug, projects } from '@/data/projects';
import { PageTransition } from '@/components/PageTransition';

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-1 text-foreground mb-4">404</h1>
          <p className="text-body text-foreground/60 mb-6">Project not found</p>
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-label uppercase tracking-[0.1em] text-clay"
          >
            <ArrowLeft size={14} />
            {t('caseStudy.backToWorks')}
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <PageTransition>
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="container-brutal pb-10 lg:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Back link */}
                <Link
                  to="/works"
                  className="inline-flex items-center gap-2 text-caption text-white/60 hover:text-white transition-colors mb-6"
                >
                  <ChevronLeft size={14} />
                  {t('caseStudy.backToWorks')}
                </Link>

                <h1
                  className="font-heading font-bold text-white uppercase leading-[0.95] tracking-[-0.02em] mb-4"
                  style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}
                >
                  {project.title}
                </h1>
                <p className="text-body text-white/60 mb-4">{project.subtitle}</p>
                <div className="flex items-center gap-4">
                  <span className="text-caption text-clay uppercase tracking-[0.1em]">
                    {project.category === 'product'
                      ? 'Product Design'
                      : project.category === 'ux'
                      ? 'UX Design'
                      : 'Branding'}
                  </span>
                  <span className="text-caption text-white/40">{project.year}</span>
                  <span className="text-caption text-white/40">{project.duration}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="py-12 lg:py-16 border-b border-border/20">
          <div className="container-brutal">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div>
                <p className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2">
                  {t('caseStudy.client')}
                </p>
                <p className="text-body text-foreground">{project.client}</p>
              </div>
              <div>
                <p className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2">
                  {t('caseStudy.role')}
                </p>
                <p className="text-body text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2">
                  {t('caseStudy.duration')}
                </p>
                <p className="text-body text-foreground">{project.duration}</p>
              </div>
              <div>
                <p className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2">
                  {t('caseStudy.tools')}
                </p>
                <p className="text-body text-foreground">
                  {project.tools.join(', ')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 lg:py-16">
          <div className="container-brutal">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-[720px]"
            >
              <h2 className="heading-3 text-foreground mb-6">
                {t('caseStudy.overview')}
              </h2>
              <p className="text-body text-foreground/60 leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 lg:py-24 bg-muted/30">
          <div className="container-brutal">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="heading-2 text-foreground mb-12 lg:mb-16"
            >
              {t('caseStudy.process')}
            </motion.h2>

            <div className="space-y-16 lg:space-y-24">
              {project.process.map((step) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
                >
                  {/* Step Number */}
                  <div className="lg:col-span-2">
                    <span
                      className="font-heading font-bold text-clay leading-none"
                      style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7">
                    <h3 className="heading-3 text-foreground mb-4">{step.title}</h3>
                    <p className="text-body text-foreground/60 leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  {/* Insight Box */}
                  {step.insight && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="lg:col-span-3"
                    >
                      <div className="border-l-[3px] border-clay pl-4 py-2">
                        <p className="text-label text-clay uppercase tracking-[0.1em] mb-2">
                          Key Insight
                        </p>
                        <p className="text-caption text-foreground/60">
                          {step.insight}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 lg:py-16">
          <div className="container-brutal">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3 text-foreground mb-8">
                {t('caseStudy.results')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-6 border border-border/20"
                  >
                    <div className="w-2 h-2 bg-clay flex-shrink-0" />
                    <p className="text-body text-foreground">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 1 && (
          <section className="py-12 lg:py-16 border-t border-border/20">
            <div className="container-brutal">
              <h2 className="heading-3 text-foreground mb-8">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-video overflow-hidden border border-border/20"
                  >
                    <img
                      src={img}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation Footer */}
        <section className="py-8 border-t border-border/20">
          <div className="container-brutal">
            <div className="flex items-center justify-between">
              {prevProject ? (
                <button
                  onClick={() => navigate(`/works/${prevProject.slug}`)}
                  className="group flex items-center gap-3 text-left"
                >
                  <ChevronLeft
                    size={20}
                    className="text-foreground/40 group-hover:text-clay transition-colors"
                  />
                  <div>
                    <p className="text-label text-foreground/40 uppercase tracking-[0.1em]">
                      {t('caseStudy.prevProject')}
                    </p>
                    <p className="heading-4 text-sm group-hover:text-clay transition-colors">
                      {prevProject.title}
                    </p>
                  </div>
                </button>
              ) : (
                <div />
              )}

              <Link
                to="/works"
                className="hidden md:flex items-center gap-2 text-label uppercase tracking-[0.1em] text-foreground/40 hover:text-clay transition-colors"
              >
                <ArrowUpRight size={14} />
                {t('caseStudy.backToWorks')}
              </Link>

              {nextProject ? (
                <button
                  onClick={() => navigate(`/works/${nextProject.slug}`)}
                  className="group flex items-center gap-3 text-right"
                >
                  <div>
                    <p className="text-label text-foreground/40 uppercase tracking-[0.1em]">
                      {t('caseStudy.nextProject')}
                    </p>
                    <p className="heading-4 text-sm group-hover:text-clay transition-colors">
                      {nextProject.title}
                    </p>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-foreground/40 group-hover:text-clay transition-colors"
                  />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
