import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import FAQSection from '../sections/FAQSection';

const howItWorks = [
  { title: 'Consultation', desc: "We discuss your goals, challenges, and vision. I ask questions to understand the full picture." },
  { title: 'Proposal', desc: "I send a detailed proposal with scope, timeline, and investment. No surprises, no hidden fees." },
  { title: 'Creation', desc: "We work together through concepts, revisions, and refinement until everything is perfect." },
];

const packages = [
  {
    name: 'BRAND FOUNDATION',
    price: 'Starting From Rp 7.5M',
    timeline: '2 Weeks',
    desc: 'A complete brand foundation for new businesses ready to establish their visual presence with confidence.',
    features: ['Custom Logo Design', 'Color Palette (5 colors)', 'Typography Pairing', 'Basic Brand Guidelines (PDF)', 'Business Card Design', 'Social Media Profile Kit', '2 Revision Rounds'],
    suitable: 'Startups, New Businesses, Personal Brands',
    cta: 'GET STARTED',
    highlight: false,
  },
  {
    name: 'VISUAL IDENTITY SYSTEM',
    price: 'Starting From Rp 22.5M',
    timeline: '4 Weeks',
    desc: 'Comprehensive visual identity for businesses that need a complete, scalable brand system.',
    features: ['Everything in Brand Foundation', 'Stationery Suite (Letterhead, Envelope, Invoice)', 'Social Media Template System', 'Brand Pattern/Texture Library', 'Packaging Design Concepts', 'Comprehensive Brand Guidelines', 'Source Files (AI, Figma)', '4 Revision Rounds'],
    suitable: 'Growing Businesses, Product Launches, Rebrands',
    cta: 'GET STARTED',
    highlight: true,
  },
  {
    name: 'BRAND REFRESH',
    price: 'Starting From Rp 15M',
    timeline: '3 Weeks',
    desc: 'Modernizing and refining an existing brand while preserving its core equity and recognition.',
    features: ['Brand Audit & Assessment', 'Logo Refinement', 'Updated Color Palette', 'Typography Refresh', 'Collateral Redesign', 'Updated Guidelines', '3 Revision Rounds'],
    suitable: 'Established Brands Needing Modernization',
    cta: 'GET STARTED',
    highlight: false,
  },
];

const retainer = {
  name: 'CREATIVE RETAINER',
  price: 'Starting From Rp 12M/month',
  timeline: 'Ongoing',
  desc: 'A dedicated design partnership for teams that need consistent, high-quality creative support without the overhead of a full-time designer.',
  features: ['Priority Turnaround (48h standard)', 'Unlimited Design Requests', 'Monthly Strategy Session', 'All Design Services Included', 'Dedicated Communication Channel', 'Flexible Pause/Resume'],
  suitable: 'Marketing Teams, Agencies, Growing Companies',
  cta: "LET'S TALK",
};

const addons = [
  { name: 'Illustration', price: 'Starting From Rp 2.5M per piece' },
  { name: 'Social Media Content Design', price: 'Starting From Rp 5M/month' },
  { name: 'Marketing Collateral', price: 'Starting From Rp 3M per project' },
  { name: 'Packaging Design', price: 'Starting From Rp 7.5M per product' },
  { name: 'Presentation Design', price: 'Starting From Rp 4M per deck' },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <section style={{ padding: '120px var(--page-gutter) 60px' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h1 className="text-display-l text-[var(--color-text-primary)]">SERVICES</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-[var(--color-text-secondary)] mt-4 max-w-[600px]">
              Strategic design solutions that help brands communicate, differentiate, and grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: '60px var(--page-gutter)' }}>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <StaggerContainer stagger={0.15}>
            {howItWorks.map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <span className="font-display text-display-m text-[var(--color-accent)] opacity-30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-2 mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Packages */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-16">PACKAGES</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.2}>
            {packages.map((pkg, i) => (
              <StaggerItem key={i}>
                <div className={`bg-[var(--color-surface)] border rounded-2xl p-10 h-full flex flex-col ${pkg.highlight ? 'border-[var(--color-accent)] border-[3px]' : 'border-[var(--color-border)]'}`}>
                  <h3 className="text-display-s text-[var(--color-text-primary)] mb-1">{pkg.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] mb-1">{pkg.price}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] mb-4">{pkg.timeline}</p>
                  <p className="text-[15px] text-[var(--color-text-secondary)] mb-6">{pkg.desc}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-[13px] text-[var(--color-text-secondary)]">
                        <Check size={16} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] mb-4">
                    Suitable for: {pkg.suitable}
                  </p>
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-4 rounded-xl font-mono text-xs uppercase tracking-[0.06em] transition-all duration-300 ${
                      pkg.highlight
                        ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]'
                        : 'border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Retainer */}
          <ScrollReveal className="mt-8">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div>
                  <h3 className="text-display-s text-[var(--color-text-primary)] mb-1">{retainer.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] mb-1">{retainer.price}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">{retainer.timeline}</p>
                </div>
                <div>
                  <p className="text-[15px] text-[var(--color-text-secondary)] mb-4">{retainer.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {retainer.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3 text-[13px] text-[var(--color-text-secondary)]">
                        <Check size={16} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] mb-4">
                    Suitable for: {retainer.suitable}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-xs uppercase tracking-[0.06em] rounded-xl hover:bg-[var(--color-surface-alt)] hover:border-[var(--color-text-primary)] transition-all duration-300"
                  >
                    {retainer.cta}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ padding: '0 var(--page-gutter) var(--section-gap)' }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-12">ADD-ONS</h2>
          </ScrollReveal>

          <StaggerContainer stagger={0.08}>
            {addons.map((addon, i) => (
              <StaggerItem key={i} variant="fadeLeft">
                <div className="flex items-center justify-between py-5 border-b border-[var(--color-border)]">
                  <span className="text-[15px] text-[var(--color-text-primary)]">{addon.name}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)]">{addon.price}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FAQSection />

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ padding: '80px var(--page-gutter)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent)]/5 pointer-events-none" />
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)]">READY TO START?</h2>
            <p className="text-[15px] text-[var(--color-text-secondary)] mt-3">Let's discuss your project and find the right package for you.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 mt-6 bg-[var(--color-accent)] text-white font-mono text-xs uppercase tracking-[0.06em] rounded-xl shadow-neu hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
