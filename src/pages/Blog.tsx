import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blog';
import ScrollReveal from '../components/ScrollReveal';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    return rest.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
      {/* Header */}
      <section style={{ padding: '120px var(--page-gutter) 40px' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h1 className="text-display-l text-[var(--color-text-primary)]">INSIGHTS</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-[var(--color-text-secondary)] mt-4">
              Thoughts on branding, design process, and creative thinking.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-[var(--color-surface)]/95 backdrop-blur-xl border-b border-[var(--color-border)]" style={{ padding: '16px var(--page-gutter)' }}>
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
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
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[280px] h-10 pl-10 pr-4 bg-[var(--color-surface-alt)] border border-[var(--color-border)] rounded-lg text-[13px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section style={{ padding: '40px var(--page-gutter)' }}>
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <Link to={`/blog/${featured.slug}`} className="group grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-card transition-shadow duration-400">
                <div className="aspect-[16/9] md:aspect-auto md:h-full overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">{featured.category}</p>
                  <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">{featured.title}</h2>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section style={{ padding: '40px var(--page-gutter) var(--section-gap)' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden hover:shadow-card transition-all duration-400 hover:-translate-y-1">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-2">{post.category}</p>
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-[13px] text-[var(--color-text-secondary)] line-clamp-2 mb-3">{post.excerpt}</p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">{post.date}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-muted)]">No articles match your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
