import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';

export function About() {
  const { t } = useTranslation();

  const experiences = [
    { period: '2024 — Present', role: 'Senior Product Designer', company: 'TechCompany Indonesia' },
    { period: '2022 — 2024', role: 'UX Designer', company: 'StartupStudio Jakarta' },
    { period: '2021 — 2022', role: 'Junior Designer', company: 'CreativeAgency' },
  ];

  const skills = [
    {
      category: 'Design',
      tools: ['Figma', 'Sketch', 'Adobe Creative Suite'],
    },
    {
      category: 'Research',
      tools: ['User Testing', 'Interviews', 'Analytics'],
    },
    {
      category: 'Prototyping',
      tools: ['Principle', 'ProtoPie', 'Framer'],
    },
    {
      category: 'Collaboration',
      tools: ['Notion', 'Jira', 'Miro'],
    },
  ];

  return (
    <PageTransition>
      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-brutal">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-24"
          >
            <h1 className="heading-display text-foreground mb-4">ABOUT</h1>
            <p className="text-body text-foreground/60 max-w-[480px]">
              The mind behind the work
            </p>
          </motion.div>

          {/* Bio + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-border/20">
                <img
                  src="/images/profile.jpg"
                  alt="Arya Ramadhan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <p className="text-label text-clay mb-4">{t('about.label')}</p>
              <h2 className="heading-2 text-foreground mb-6">
                THINKING THROUGH DESIGN
              </h2>
              <div className="space-y-4 text-body text-foreground/60">
                <p>
                  I'm Arya Ramadhan, a Design Thinker based in Jakarta, Indonesia. 
                  With over 3 years of experience in UX research, product design, and 
                  creative direction, I approach every project as an opportunity to 
                  solve meaningful problems.
                </p>
                <p>
                  My philosophy is simple: understand deeply, think critically, and 
                  design intentionally. I believe the best designs come from asking 
                  the right questions, not just having the right answers.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring local coffee shops, 
                  reading about behavioral psychology, or documenting street photography 
                  across Jakarta's vibrant neighborhoods.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 lg:mb-32"
          >
            <h2 className="heading-2 text-foreground mb-10">EXPERIENCE</h2>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-6 border-b border-border/20"
                >
                  <div className="md:col-span-3">
                    <span className="text-caption text-foreground/40 uppercase tracking-[0.1em]">
                      {exp.period}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <span className="text-body text-foreground font-medium">
                      {exp.role}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <span className="text-body text-foreground/60">
                      {exp.company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 lg:mb-32"
          >
            <h2 className="heading-2 text-foreground mb-10">SKILLS & TOOLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-[3px] border-clay pl-6"
                >
                  <h3 className="heading-4 text-sm mb-3">{skill.category}</h3>
                  <ul className="space-y-1">
                    {skill.tools.map((tool) => (
                      <li key={tool} className="text-body text-foreground/60">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-16 lg:py-24 border-t border-b border-border/20"
          >
            <blockquote className="heading-2 text-foreground max-w-[800px] mx-auto mb-6">
              "Design is not just what it looks like. Design is how it works, how it 
              feels, and most importantly — how it thinks."
            </blockquote>
            <cite className="text-caption text-clay uppercase tracking-[0.1em] not-italic">
              — Arya Ramadhan
            </cite>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
