import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Process() {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true }) as Array<{
    number: string;
    title: string;
    body: string;
  }>;

  return (
    <section className="section-spacing" id="process">
      <div className="container-brutal">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-label text-clay mb-4">{t('process.label')}</p>
          <h2 className="heading-1 text-foreground">{t('process.headline')}</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] bg-border/20 lg:-translate-x-[0.5px]">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute inset-x-0 top-0 h-full bg-clay origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${
                    isLeft ? '' : 'lg:[direction:rtl]'
                  }`}
                >
                  {/* Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className={`flex items-start ${
                      isLeft ? 'lg:justify-end' : 'lg:justify-start'
                    } ${isLeft ? '' : 'lg:[direction:ltr]'}`}
                  >
                    <span
                      className="font-heading font-bold text-clay leading-none"
                      style={{ fontSize: 'clamp(80px, 12vw, 160px)' }}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`flex flex-col justify-center ${
                      isLeft ? '' : 'lg:[direction:ltr]'
                    }`}
                  >
                    <div className="border-l-[3px] border-clay pl-6 lg:pl-8">
                      <h3 className="heading-3 text-foreground mb-4">{step.title}</h3>
                      <p className="text-body text-foreground/60 max-w-[440px]">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>

                  {/* Dot on timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute left-4 lg:left-1/2 top-8 w-3 h-3 bg-clay rounded-full -translate-x-1/2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
