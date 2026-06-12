import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Globe, Download, Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const quickFacts = [
  { icon: MapPin, label: 'LOCATION', value: 'Semarang, Indonesia' },
  { icon: Calendar, label: 'EXPERIENCE', value: '5+ Years' },
  { icon: Briefcase, label: 'ROLE', value: 'Graphic Designer & Illustrator' },
  { icon: Globe, label: 'AVAILABILITY', value: 'Open to Work' },
];

const experience = [
  { period: '2023 — Present', role: 'Freelance Graphic Designer & Illustrator', company: 'Independent', desc: 'Working with clients across Indonesia and internationally on brand identity, illustration, and visual systems. Managing full project lifecycle from discovery to delivery.' },
  { period: '2021 — 2023', role: 'Senior Graphic Designer', company: 'Creative Studio Semarang', desc: 'Led brand projects for 20+ clients. Developed visual identities, marketing campaigns, and packaging design. Mentored junior designers.' },
  { period: '2020 — 2021', role: 'Graphic Designer', company: 'Digital Agency', desc: 'Created social media content, digital ads, and brand collateral. Collaborated with marketing teams on campaign visuals.' },
  { period: '2018 — 2020', role: 'Junior Designer', company: 'Design Studio', desc: 'Started career creating logos, business cards, and print materials. Built foundational skills in typography, color, and composition.' },
];

const topSkills = [
  { name: 'Brand Identity', percent: 95 },
  { name: 'Logo Design', percent: 90 },
  { name: 'Visual Systems', percent: 90 },
  { name: 'Typography', percent: 88 },
  { name: 'Illustration', percent: 85 },
  { name: 'Marketing Assets', percent: 85 },
];

const selectedWork = projects.slice(0, 4);

const clients = ['Sembako Delivery', 'BTM Group', 'Nafla Stories', 'JM Fashion', 'RFC Fitness', 'Wedding Atelier', 'Kopiku Indonesia', 'TechStart Semarang'];

export default function PortfolioSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <section style={{ padding: '120px var(--page-gutter) 60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-display-l text-[var(--color-text-primary)]">PORTFOLIO SUMMARY</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-[var(--color-text-secondary)] mt-4">
              A quick overview of my experience, skills, and selected work. Designed for recruiters and hiring managers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-8 py-4 mt-8 bg-[var(--color-accent)] text-white font-mono text-xs uppercase tracking-[0.06em] rounded-xl shadow-neu hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Download size={16} /> DOWNLOAD PDF PORTFOLIO
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: '48px var(--page-gutter)' }}>
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <StaggerContainer stagger={0.1}>
            {quickFacts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <StaggerItem key={i}>
                  <div className="text-center">
                    <Icon size={24} className="mx-auto text-[var(--color-accent)] mb-2" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-1">{fact.label}</p>
                    <p className="text-lg font-semibold text-[var(--color-text-primary)]">{fact.value}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] mb-12">EXPERIENCE</h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-8" stagger={0.1}>
            {experience.map((exp, i) => (
              <StaggerItem key={i} variant="fadeLeft">
                <div className="border-b border-[var(--color-border)] pb-8">
                  <p className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)]">{exp.period}</p>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-1">{exp.role}</h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)] mb-2">{exp.company}</p>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{exp.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] mb-12">KEY SKILLS</h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-5" stagger={0.1}>
            {topSkills.map((skill, i) => (
              <StaggerItem key={i}>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[15px] text-[var(--color-text-primary)]">{skill.name}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)]">{skill.percent}%</span>
                  </div>
                  <div className="h-[6px] bg-[var(--color-border)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full bg-[var(--color-accent)] rounded-full"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Selected Work */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] mb-12">SELECTED WORK</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.15}>
            {selectedWork.map((project) => (
              <StaggerItem key={project.id} variant="scale">
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <p className="mt-2 text-[15px] font-medium text-[var(--color-text-primary)]">{project.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">{project.category}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-12">CLIENTS</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 gap-3" stagger={0.05}>
            {clients.map((client, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-[15px] text-[var(--color-text-primary)]">{client}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education & Languages */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-accent)] mb-3">EDUCATION</p>
              <p className="text-[15px] text-[var(--color-text-primary)] font-medium">Bachelor of Visual Communication Design</p>
              <p className="text-[13px] text-[var(--color-text-secondary)]">Universitas Diponegoro, Semarang</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-accent)] mb-3">LANGUAGES</p>
              <p className="text-[15px] text-[var(--color-text-primary)]">Indonesian (Native)</p>
              <p className="text-[15px] text-[var(--color-text-primary)]">English (Professional Working Proficiency)</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '80px var(--page-gutter)' }}>
        <div className="max-w-[600px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)]">LET'S CONNECT</h2>
          </ScrollReveal>
          <StaggerContainer className="flex items-center justify-center gap-6 mt-6" stagger={0.1}>
            <StaggerItem>
              <a href="mailto:hello@zuldesign.id" className="text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                <Mail size={24} />
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://wa.me/6283141191697" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                <Phone size={24} />
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://instagram.com/ezulisme" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                <Instagram size={24} />
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://linkedin.com/in/zulqifli-al-rasyid" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                <Linkedin size={24} />
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </motion.div>
  );
}
