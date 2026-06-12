import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/data/projects';

export function SelectedWorks() {
  const { t } = useTranslation();
  const featuredProjects = getFeaturedProjects();
  const mainProject = featuredProjects[0];
  const sideProjects = featuredProjects.slice(1);

  return (
    <section className="section-spacing" id="works">
      <div className="container-brutal">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-label text-clay mb-4">{t('works.label')}</p>
          <h2 className="heading-1 text-foreground whitespace-pre-line">
            {t('works.headline')}
          </h2>
        </motion.div>

        {/* Featured Project — Full Width */}
        {mainProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <Link to={`/works/${mainProject.slug}`} className="group block">
              <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden border border-border/20">
                <img
                  src={mainProject.image}
                  alt={mainProject.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-caption text-clay uppercase tracking-[0.1em]">
                      {mainProject.category === 'product'
                        ? 'Product Design'
                        : mainProject.category === 'ux'
                        ? 'UX Design'
                        : 'Branding'}
                    </span>
                    <span className="text-caption text-white/40">{mainProject.year}</span>
                  </div>
                  <h3 className="heading-2 text-white group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-3">
                    {mainProject.title}
                    <ArrowUpRight
                      size={28}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Side Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {sideProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
            >
              <Link to={`/works/${project.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden border border-border/20 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-caption text-clay uppercase tracking-[0.1em]">
                    {project.category === 'product'
                      ? 'Product Design'
                      : project.category === 'ux'
                      ? 'UX Design'
                      : 'Branding'}
                  </span>
                  <span className="text-caption text-foreground/40">{project.year}</span>
                </div>
                <h4 className="heading-4 text-sm group-hover:text-clay transition-colors duration-200">
                  {project.title}
                </h4>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <Link
            to="/works"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 text-foreground text-label uppercase tracking-[0.1em] hover:border-clay hover:text-clay transition-all duration-300"
          >
            {t('works.cta')}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
