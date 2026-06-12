import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] pr-4 group-hover:text-[var(--color-accent)] transition-colors">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-[var(--color-text-secondary)]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--color-hero-surface)]" style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal>
          <h2 className="text-display-s text-[var(--color-text-primary)] text-center mb-12">
            {t.faq.title}
          </h2>
        </ScrollReveal>

        <StaggerContainer stagger={0.1}>
          {t.faq.items.map((item, i) => (
            <StaggerItem key={i} variant="fadeUp">
              <FAQItem
                question={item.q}
                answer={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
