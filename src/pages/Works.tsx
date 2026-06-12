import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllProjects } from '@/data/projects';
import { PageTransition } from '@/components/PageTransition';

type Category = 'all' | 'product' | 'ux' | 'branding';

export function Works() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const allProjects = getAllProjects();

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t('works.categories.all') },
    { key: 'product', label: t('works.categories.product') },
    { key: 'ux', label: t('works.categories.ux') },
    { key: 'branding', label: t('works.categories.branding') },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-brutal">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16"
          >
            <h1 className="heading-1 text-foreground mb-4">{t('works.allWorks')}</h1>
            <p className="text-body text-foreground/60">{t('works.subtitle')}</p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10 lg:mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 text-label uppercase tracking-[0.1em] border transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'border-clay text-clay bg-clay/5'
                    : 'border-border/20 text-foreground/60 hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link to={`/works/${project.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden border border-border/20 mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-clay text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-caption text-clay uppercase tracking-[0.1em]">
                        {project.category === 'product'
                          ? 'Product Design'
                          : project.category === 'ux'
                          ? 'UX Design'
                          : 'Branding'}
                      </span>
                      <span className="text-caption text-foreground/40">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="heading-4 text-base group-hover:text-clay transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-caption text-foreground/40 mt-1">
                      {project.subtitle}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
