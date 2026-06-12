import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ChevronDown, Fingerprint, Layers, PenTool,
  Check, ChevronRight, Quote
} from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { projects } from '../data/projects';
import FAQSection from '../sections/FAQSection';

/* ─── Welcome Screen ─── */
function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'drawing' | 'text' | 'done'>('drawing');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.015;

      const cx = w / 2;
      const cy = h / 2;
      const baseR = Math.min(w, h) * 0.18;

      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 0; i < 4; i++) {
        ctx.save();
        ctx.rotate((Math.PI / 2) * i);
        ctx.beginPath();

        const wave = Math.sin(t * 2 + i) * baseR * 0.15;
        const r = baseR + wave;

        ctx.moveTo(-r * 0.3, -r);
        ctx.bezierCurveTo(
          -r * 0.3 + Math.sin(t + i) * 30, -r * 0.5,
          r * 0.3 + Math.cos(t * 1.3 + i) * 30, -r * 0.5,
          r * 0.3, -r
        );
        ctx.bezierCurveTo(
          r * 0.8 + Math.sin(t * 0.7 + i) * 20, -r * 0.7,
          r * 0.6 + Math.cos(t * 0.9 + i) * 20, -r * 1.2,
          0, -r * 1.4 + Math.sin(t + i) * 10
        );
        ctx.bezierCurveTo(
          -r * 0.6 + Math.sin(t * 0.9 + i) * 20, -r * 1.2,
          -r * 0.8 + Math.cos(t * 0.7 + i) * 20, -r * 0.7,
          -r * 0.3, -r
        );

        ctx.fillStyle = `rgba(194, 69, 45, ${0.12 + Math.sin(t + i) * 0.04})`;
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
      animId = requestAnimationFrame(draw);
    };

    draw();

    const textTimer = setTimeout(() => setPhase('text'), 2000);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3500);

    const skip = () => {
      clearTimeout(textTimer);
      clearTimeout(doneTimer);
      setPhase('done');
      onComplete();
    };
    window.addEventListener('keydown', skip, { once: true });
    canvas.addEventListener('click', skip, { once: true });

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(textTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('resize', resize);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[70] bg-[var(--color-hero-surface)] flex items-center justify-center"
        >
          <canvas ref={canvasRef} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />
          <AnimatePresence>
            {phase === 'text' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
              >
                <h1 className="font-display text-display-m text-[var(--color-text-primary)]">ZUL</h1>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)] mt-2">
                  Loading experience...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden" style={{ padding: '120px var(--page-gutter) 60px' }}>
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(194,69,45,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,69,45,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[900px]">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-display-xl text-[var(--color-text-primary)]"
        >
          {t.hero.title1}<br />
          {t.hero.title2}<br />
          {t.hero.title3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 text-lg text-[var(--color-text-secondary)] max-w-[560px] leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-mono text-xs uppercase tracking-[0.06em] rounded-xl shadow-neu hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            {t.hero.ctaProjects}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-xs uppercase tracking-[0.06em] rounded-xl hover:bg-[var(--color-surface)] hover:border-[var(--color-text-primary)] transition-all duration-300"
          >
            {t.hero.ctaContact}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]" style={{ writingMode: 'vertical-rl' }}>
          {t.hero.scroll}
        </span>
        <ChevronDown size={20} className="text-[var(--color-text-muted)] animate-bounce-slow" />
      </motion.div>
    </section>
  );
}

/* ─── Featured Projects ─── */
function FeaturedProjects() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = projects.slice(0, 4);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let autoScroll: ReturnType<typeof setInterval>;
    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 5000);
    };

    startAutoScroll();
    el.addEventListener('mouseenter', () => clearInterval(autoScroll));
    el.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  return (
    <section style={{ padding: 'var(--section-gap) 0' }}>
      <div className="page-gutter flex items-center justify-between mb-10">
        <ScrollReveal>
          <h2 className="text-display-s text-[var(--color-text-primary)]">{t.featuredProjects.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ArrowRight size={24} className="text-[var(--color-text-secondary)]" />
        </ScrollReveal>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ padding: '0 var(--page-gutter)', scrollbarWidth: 'none' }}
      >
        {featured.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.15} variant="fadeRight">
            <Link
              to={`/projects/${project.slug}`}
              className="block flex-shrink-0 snap-start group"
              style={{ width: 'clamp(320px, 40vw, 560px)' }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[var(--color-text-primary)]/0 group-hover:bg-[var(--color-text-primary)]/40 transition-all duration-300 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium text-lg">{project.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)]">{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-[15px] font-medium text-[var(--color-text-primary)]">{project.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">{project.category}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <div className="page-gutter mt-6 text-right">
        <Link to="/projects" className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] hover:underline inline-flex items-center gap-2">
          {t.featuredProjects.viewAll} <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

/* ─── Value Proposition ─── */
function ValueProposition() {
  const { t } = useTranslation();
  const icons = [Fingerprint, Layers, PenTool];

  return (
    <section className="bg-[var(--color-hero-surface)]" style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-accent)] text-center mb-12">
            {t.valueProposition.label}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.2}>
          {t.valueProposition.pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <div className="text-center px-6 py-8 border-t-[3px] border-[var(--color-accent)]">
                  <Icon size={32} className="mx-auto text-[var(--color-accent)] mb-4" />
                  <h3 className="text-display-s text-[var(--color-text-primary)] mb-3">{pillar.title}</h3>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{pillar.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── Services Preview ─── */
function ServicesPreview() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
          <ScrollReveal>
            <div>
              <h2 className="text-display-s text-[var(--color-text-primary)]">{t.servicesPreview.title}</h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mt-2">{t.servicesPreview.subtitle}</p>
            </div>
          </ScrollReveal>
        </div>

        <StaggerContainer stagger={0.15}>
          {t.servicesPreview.items.map((service, i) => (
            <StaggerItem key={i} variant="fadeLeft">
              <Link to="/services" className="group block">
                <div className="flex items-center justify-between py-8 border-b border-[var(--color-border)] hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-start gap-8">
                    <span className="font-display text-display-m text-[var(--color-text-muted)] opacity-30 group-hover:opacity-100 transition-opacity">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{service.name}</h3>
                      <p className="text-[13px] text-[var(--color-text-secondary)] mt-1 max-w-[500px]">{service.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors flex-shrink-0" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-right">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-xs uppercase tracking-[0.06em] rounded-xl hover:bg-[var(--color-surface)] hover:border-[var(--color-text-primary)] transition-all duration-300"
          >
            {t.servicesPreview.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Client Logos (text-based) ─── */
function ClientLogos() {
  const logos = ['SEMBAKO', 'BTM GROUP', 'NAFLA', 'JM FASHION', 'RFC FITNESS', 'WEDDING ATELIER'];

  return (
    <section className="bg-[var(--color-hero-surface)] py-16 overflow-hidden">
      <ScrollReveal>
        <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-text-secondary)] text-center mb-8">
          TRUSTED BY
        </p>
      </ScrollReveal>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-20 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="font-display text-2xl tracking-wider text-[var(--color-text-muted)] flex-shrink-0">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-display-s text-[var(--color-text-primary)] mb-12">{t.testimonials.title}</h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.2}>
          {t.testimonials.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-10 h-full">
                <Quote size={40} className="text-[var(--color-accent)] opacity-20 mb-4" />
                <p className="text-lg text-[var(--color-text-primary)] leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <p className="text-[13px] font-semibold text-[var(--color-text-primary)]">{item.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">{item.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── Process Overview ─── */
function ProcessOverview() {
  const { t } = useTranslation();

  return (
    <section className="bg-[var(--color-hero-surface)]" style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-3">{t.process.title}</h2>
          <p className="text-[15px] text-[var(--color-text-secondary)] text-center mb-16">{t.process.subtitle}</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.2}>
          {t.process.steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <span className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-3 mb-2">{step.title}</h3>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 w-8 h-[2px] bg-[var(--color-border)] translate-x-4" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── Service Packages ─── */
function ServicePackages() {
  const { t } = useTranslation();
  const pkg = t.packages;

  const packages = [
    { ...pkg.starter, highlight: false },
    { ...pkg.professional, highlight: true },
    { ...pkg.enterprise, highlight: false },
  ];

  return (
    <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-3">{pkg.title}</h2>
          <p className="text-[15px] text-[var(--color-text-secondary)] text-center mb-16">{pkg.subtitle}</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.2}>
          {packages.map((p, i) => (
            <StaggerItem key={i}>
              <div className={`bg-[var(--color-surface)] border rounded-2xl p-10 h-full flex flex-col ${p.highlight ? 'border-[var(--color-accent)] border-2' : 'border-[var(--color-border)]'}`}>
                <h3 className="text-display-s text-[var(--color-text-primary)] mb-2">{p.name}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] mb-4">{p.price}</p>
                <p className="text-[15px] text-[var(--color-text-secondary)] mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] text-[var(--color-text-secondary)]">
                      <Check size={16} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center px-6 py-4 rounded-xl font-mono text-xs uppercase tracking-[0.06em] transition-all duration-300 ${
                    p.highlight
                      ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]'
                      : 'border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── Contact CTA ─── */
function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden" style={{ padding: 'calc(var(--section-gap) * 1.5) var(--page-gutter)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent)]/5 pointer-events-none" />
      <div className="relative z-10 max-w-[700px] mx-auto text-center">
        <ScrollReveal variant="fadeUp">
          <h2 className="text-display-l text-[var(--color-text-primary)]">{t.contactCTA.title}</h2>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <p className="text-lg text-[var(--color-text-secondary)] mt-6">{t.contactCTA.subtitle}</p>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-mono text-xs uppercase tracking-[0.06em] rounded-xl shadow-neu hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {t.contactCTA.primary}
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-xs uppercase tracking-[0.06em] rounded-xl hover:bg-[var(--color-surface)] hover:border-[var(--color-text-primary)] transition-all duration-300"
            >
              {t.contactCTA.secondary}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Main Home Page ─── */
export default function Home() {
  const [welcomed, setWelcomed] = useState(() =>
    sessionStorage.getItem('zul-welcomed') === 'true'
  );

  const handleWelcomeComplete = useCallback(() => {
    sessionStorage.setItem('zul-welcomed', 'true');
    setWelcomed(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {!welcomed && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      <HeroSection />
      <FeaturedProjects />
      <ValueProposition />
      <ServicesPreview />
      <ClientLogos />
      <Testimonials />
      <ProcessOverview />
      <ServicePackages />
      <FAQSection />
      <ContactCTA />
    </motion.div>
  );
}
