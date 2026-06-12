import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Send, Check } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Compose WhatsApp message
    const text = `Halo, saya ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}\nSubjek: ${formData.subject}`;
    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const directLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/6281234567890',
      color: 'hover:bg-green-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@folio.ar',
      color: 'hover:bg-clay',
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/aryaramadhan',
      color: 'hover:bg-blue-500',
    },
  ];

  return (
    <PageTransition>
      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-brutal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h1 className="heading-1 text-foreground mb-6">
                {t('contact.info.title')}
              </h1>
              <p className="text-body text-foreground/60 mb-10">
                {t('contact.info.description')}
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-clay" />
                  <span className="text-body text-foreground">
                    {t('contact.info.email')}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-clay" />
                  <span className="text-body text-foreground">
                    {t('contact.info.phone')}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-clay" />
                  <span className="text-body text-foreground">
                    {t('contact.info.location')}
                  </span>
                </div>
              </div>

              {/* Direct Links */}
              <div>
                <p className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-4">
                  {t('contact.form.orReach')}
                </p>
                <div className="flex gap-3">
                  {directLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 border border-border/20 text-foreground hover:text-white hover:border-transparent transition-all duration-300 ${link.color}`}
                      aria-label={link.label}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-clay text-white mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="heading-3 text-foreground mb-2">
                    {t('contact.form.success')}
                  </h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2 block">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-foreground/20 focus:border-clay py-3 text-body text-foreground outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2 block">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-foreground/20 focus:border-clay py-3 text-body text-foreground outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2 block">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-foreground/20 focus:border-clay py-3 text-body text-foreground outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-label text-foreground/40 uppercase tracking-[0.1em] mb-2 block">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-foreground/20 focus:border-clay py-3 text-body text-foreground outline-none transition-colors duration-300 resize-y min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-clay text-white text-label uppercase tracking-[0.1em] hover:bg-clay-dark transition-all duration-300"
                  >
                    {t('contact.form.submit')}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
