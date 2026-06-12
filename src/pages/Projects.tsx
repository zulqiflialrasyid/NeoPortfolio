import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { projects, categories } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Page Header */}
      <section style={{ padding: '120px var(--page-gutter) 60px' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h1 className="text-display-l text-[var(--color-text-primary)]">PROJECTS</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-[var(--color-text-secondary)] mt-4 max-w-[600px]">
              Selected work across branding, illustration, and visual identity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-[var(--color-surface)]/95 backdrop-blur-xl border-b border-[var(--color-border)]" style={{ padding: '16px var(--page-gutter)' }}>
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg font-mono text-xs uppercase tracking-[0.06em] transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[var(--color-accent)] text-white border border-[var(--color-accent)]'
                    : 'bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-alt)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[240px] h-10 pl-10 pr-4 bg-[var(--color-surface-alt)] border border-[var(--color-border)] rounded-lg text-[13px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '40px var(--page-gutter) var(--section-gap)' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[var(--color-text-primary)]/0 group-hover:bg-[var(--color-text-primary)]/50 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-mono text-xs uppercase tracking-[0.06em]">
                          View Case →
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-[15px] font-medium text-[var(--color-text-primary)]">{project.name}</p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">{project.category}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-muted)]">No projects match your criteria.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              Showing {filtered.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
