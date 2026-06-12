import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Clock, MapPin, Linkedin, Youtube } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', budget: '', type: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsApp = () => {
    if (!validate()) return;
    const text = `Hi Zul, I'm ${form.name}${form.company ? ' from ' + form.company : ''}. I'm interested in ${form.type || 'a design project'}${form.budget ? ' with a budget of ' + form.budget : ''}. ${form.message}`;
    window.open(`https://wa.me/6283141191697?text=${encodeURIComponent(text)}`, '_blank');
  };

  const generateEmail = () => {
    if (!validate()) return;
    const subject = `Project Inquiry: ${form.type || 'Design Project'}`;
    const body = `Hi Zul,\n\nI'm ${form.name}${form.company ? ' from ' + form.company : ''}.\n\nProject Type: ${form.type || 'Not specified'}\nBudget: ${form.budget || 'Not specified'}\n\n${form.message}\n\nBest regards,\n${form.name}`;
    window.open(`mailto:hello@zuldesign.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const inputClass = (field: string) =>
    `w-full h-12 px-4 bg-[var(--color-surface-alt)] border rounded-lg text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all ${
      errors[field] ? 'border-red-500' : 'border-[var(--color-border)]'
    }`;

  const labelClass = 'block font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)] mb-2';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <section style={{ padding: '120px var(--page-gutter) 60px' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center relative">
          <div>
            <ScrollReveal variant="fadeLeft">
              <h1 className="text-display-l text-[var(--color-text-primary)]">LET'S TALK</h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeLeft" delay={0.15}>
              <p className="text-lg text-[var(--color-text-secondary)] mt-4 max-w-[500px] leading-relaxed">
                Have a project in mind? I'd love to hear about it. Share a few details and I'll get back to you within 24 hours.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeLeft" delay={0.25}>
              <div className="flex items-center gap-2 mt-6 text-[var(--color-text-secondary)]">
                <Clock size={16} className="text-[var(--color-accent)]" />
                <span className="text-[13px]">Usually responds within 24 hours</span>
              </div>
            </ScrollReveal>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 0.5 }}
              className="font-display text-[280px] leading-none text-[var(--color-text-primary)] select-none"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              Z
            </motion.span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '0 var(--page-gutter) var(--section-gap)' }}>
        <div className="max-w-[800px] mx-auto">
          <StaggerContainer className="space-y-6" stagger={0.08}>
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>YOUR NAME *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass('name')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelClass}>COMPANY</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." className={inputClass('company')} />
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <label className={labelClass}>EMAIL *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass('email')} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>BUDGET RANGE</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className={inputClass('budget')}>
                    <option value="">Select budget...</option>
                    <option value="Under Rp 5M">Under Rp 5M</option>
                    <option value="Rp 5M - 15M">Rp 5M — 15M</option>
                    <option value="Rp 15M - 30M">Rp 15M — 30M</option>
                    <option value="Rp 30M+">Rp 30M+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>PROJECT TYPE</label>
                  <select name="type" value={form.type} onChange={handleChange} className={inputClass('type')}>
                    <option value="">Select type...</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Illustration">Illustration</option>
                    <option value="Brand Refresh">Brand Refresh</option>
                    <option value="Creative Retainer">Creative Retainer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <label className={labelClass}>TELL ME ABOUT YOUR PROJECT *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="I'm looking for a brand identity for my new coffee shop..."
                  rows={6}
                  className={`${inputClass('message')} h-auto py-3 resize-y`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={generateWhatsApp}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-mono text-xs uppercase tracking-[0.06em] rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Phone size={16} /> SEND VIA WHATSAPP
                </button>
                <button
                  onClick={generateEmail}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-xs uppercase tracking-[0.06em] rounded-xl hover:bg-[var(--color-surface)] hover:border-[var(--color-text-primary)] transition-all duration-300"
                >
                  <Mail size={16} /> SEND VIA EMAIL
                </button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Direct Contact */}
      <section style={{ padding: 'var(--section-gap) var(--page-gutter)' }}>
        <div className="max-w-[600px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-text-secondary)] mb-8">OR REACH OUT DIRECTLY</p>
          </ScrollReveal>

          <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-10" stagger={0.1}>
            <StaggerItem>
              <a href="mailto:hello@zuldesign.id" className="flex flex-col items-center gap-2 text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                <Mail size={24} />
                <span className="text-[15px]">hello@zuldesign.id</span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://wa.me/6283141191697" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                <Phone size={24} />
                <span className="text-[15px]">+62 831-4119-1697</span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://instagram.com/ezulisme" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                <Instagram size={24} />
                <span className="text-[15px]">@ezulisme</span>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-[var(--color-hero-surface)]" style={{ padding: '60px var(--page-gutter)' }}>
        <div className="text-center">
          <ScrollReveal>
            <p className="font-mono text-sm uppercase tracking-[0.05em] text-[var(--color-text-secondary)] mb-8">FOLLOW MY WORK</p>
          </ScrollReveal>

          <StaggerContainer className="flex items-center justify-center gap-8" stagger={0.08}>
            {[
              { icon: Instagram, href: 'https://instagram.com/ezulisme' },
              { icon: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>, href: 'https://tiktok.com/@ezulisme' },
              { icon: Youtube, href: 'https://youtube.com/@ezulisme' },
              { icon: Linkedin, href: 'https://linkedin.com/in/zulqifli-al-rasyid' },
            ].map((social, i) => (
              <StaggerItem key={i}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={28} />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location */}
      <section style={{ padding: '40px var(--page-gutter) 80px' }}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-[var(--color-text-muted)]">
            <MapPin size={16} />
            <span className="text-[13px]">Based in Semarang, Indonesia · Working with clients worldwide</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
