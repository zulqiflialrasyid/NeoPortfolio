import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Layers, PenTool, Palette, Image, Layout, Lightbulb } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const timeline = [
  { year: '2018', title: 'Design Journey Began', desc: 'Started exploring graphic design as a creative outlet while studying. Fell in love with the intersection of strategy and aesthetics.' },
  { year: '2020', title: 'Went Freelance', desc: 'Launched independent practice, working with local businesses in Semarang to build their visual identities.' },
  { year: '2021', title: 'First Major Brand Project', desc: 'Completed a full rebrand for a regional restaurant chain, establishing systems for larger-scale work.' },
  { year: '2023', title: 'Expanded to Illustration', desc: 'Added illustration services to the practice, creating custom artwork for brands and publications.' },
  { year: '2025', title: 'Global Clientele', desc: 'Now working with clients across Indonesia and internationally, focusing on brand strategy and visual systems.' },
];

const skills = [
  { name: 'Brand Identity', percent: 95 },
  { name: 'Logo Design', percent: 90 },
  { name: 'Visual Systems', percent: 90 },
  { name: 'Typography', percent: 88 },
  { name: 'Illustration', percent: 85 },
  { name: 'Marketing Assets', percent: 85 },
  { name: 'Social Media Design', percent: 80 },
  { name: 'Art Direction', percent: 82 },
];

const tools = [
  { name: 'Figma', icon: Layers },
  { name: 'Illustrator', icon: PenTool },
  { name: 'Photoshop', icon: Image },
  { name: 'InDesign', icon: Layout },
  { name: 'Procreate', icon: Palette },
  { name: 'After Effects', icon: Clock },
  { name: 'Blender', icon: Layers },
  { name: 'Notion', icon: Lightbulb },
];

const principles = [
  { num: '01', title: 'Clarity First', desc: 'Every design decision serves communication. If it does not clarify, it does not belong.' },
  { num: '02', title: 'Intentional Restraint', desc: 'Less is more. Restraint shows confidence. Every element must earn its place.' },
  { num: '03', title: 'Strategic Thinking', desc: 'Design is problem-solving. Aesthetics follow strategy, not the other way around.' },
  { num: '04', title: 'Human Connection', desc: 'Great design resonates with people. Empathy for the audience drives every choice.' },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <section style={{ padding: '120px var(--page-gutter) 60px' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-start">
          <div>
            <ScrollReveal variant="fadeLeft">
              <h1 className="text-display-l text-[var(--color-text-primary)]">ABOUT</h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeLeft" delay={0.15}>
              <p className="text-lg text-[var(--color-text-secondary)] mt-6 max-w-[560px] leading-relaxed">
                I help brands communicate clearly through thoughtful design. Based in Semarang, Indonesia, I work with businesses worldwide to create visual identities that resonate.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src="/images/about-portrait.jpg" alt="Zul" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-16">JOURNEY</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-[var(--color-border)]" />

            <StaggerContainer stagger={0.2}>
              {timeline.map((item, i) => (
                <StaggerItem key={i}>
                  <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block w-1/2" />
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] mt-1.5" />
                    <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} w-full md:w-1/2`}>
                      <p className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--color-accent)]">{item.year}</p>
                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-1 mb-1">{item.title}</h3>
                      <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-12">SKILLS</h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-6" stagger={0.1}>
            {skills.map((skill, i) => (
              <StaggerItem key={i}>
                <div>
                  <div className="flex justify-between mb-2">
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

      {/* Tools */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-12">TOOLS</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-6" stagger={0.08}>
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <StaggerItem key={i} variant="scale">
                  <div className="flex flex-col items-center gap-3 p-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center hover:shadow-card transition-shadow duration-300">
                      <Icon size={24} className="text-[var(--color-text-secondary)]" />
                    </div>
                    <span className="text-[13px] text-[var(--color-text-primary)]">{tool.name}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-16">PRINCIPLES</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-10" stagger={0.15}>
            {principles.map((p, i) => (
              <StaggerItem key={i}>
                <div>
                  <span className="font-display text-display-m text-[var(--color-text-muted)] opacity-20">{p.num}</span>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-2 mb-2">{p.title}</h3>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Personal Story */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-lg text-[var(--color-text-secondary)] leading-[1.7]">
              I grew up surrounded by the visual richness of Indonesian culture — batik patterns, wayang shadow puppets, vibrant market scenes. That early exposure to craft and storytelling shaped how I approach design today. I believe every brand has a story worth telling well, and my job is to find the clearest, most beautiful way to tell it. When I am not designing, you will find me exploring coffee shops around Semarang, sketching in my notebook, or learning something new.
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-accent)] mt-8">— Zul</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ padding: '80px var(--page-gutter)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent)]/5 pointer-events-none" />
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-display-s text-[var(--color-text-primary)]">LET'S WORK TOGETHER</h2>
            <p className="text-[15px] text-[var(--color-text-secondary)] mt-3">Have a project in mind? I'd love to hear about it.</p>
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
