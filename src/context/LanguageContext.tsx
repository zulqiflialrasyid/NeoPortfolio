import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Lang = 'en' | 'id';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    nav: { home: 'Home', projects: 'Projects', services: 'Services', blog: 'Blog', about: 'About', contact: 'Contact' },
    hero: {
      title1: 'GRAPHIC',
      title2: 'DESIGNER &',
      title3: 'ILLUSTRATOR',
      subtitle: 'Based in Semarang, Indonesia. Helping brands communicate clearly, build stronger identities, and create memorable visual experiences.',
      ctaProjects: 'VIEW PROJECTS',
      ctaContact: 'CONTACT ME',
      scroll: 'SCROLL',
    },
    featuredProjects: { title: 'FEATURED PROJECTS', viewAll: 'View all projects' },
    valueProposition: {
      label: 'WHAT I DO',
      pillars: [
        { title: 'BRAND IDENTITY', desc: 'Creating coherent visual identities that capture essence, differentiate from competitors, and build lasting recognition.' },
        { title: 'VISUAL SYSTEMS', desc: 'Building consistent design systems that scale across every touchpoint — from business cards to billboards.' },
        { title: 'ILLUSTRATION', desc: 'Hand-crafted illustrations that add personality, warmth, and narrative depth to brands and publications.' },
      ],
    },
    servicesPreview: {
      title: 'SERVICES',
      subtitle: 'Strategic design solutions for growing brands.',
      viewAll: 'VIEW ALL SERVICES',
      items: [
        { name: 'Brand Foundation', desc: 'Logo, color palette, typography, and brand guidelines for new businesses.' },
        { name: 'Visual Identity System', desc: 'Comprehensive brand systems including stationery, templates, and asset libraries.' },
        { name: 'Brand Refresh', desc: 'Updating and modernizing existing brands while preserving equity.' },
        { name: 'Creative Retainer', desc: 'Ongoing design support for marketing teams and growing businesses.' },
      ],
    },
    testimonials: {
      title: 'WHAT CLIENTS SAY',
      items: [
        { quote: 'Zul transformed our brand from something amateur into a professional identity we are proud to show. The process was smooth and the results exceeded expectations.', name: 'Diana Putri', role: 'Founder, Sembako Delivery' },
        { quote: 'Working with Zul felt like having an in-house design director. He understood our vision immediately and delivered a brand system that scales beautifully.', name: 'Rizky Aditya', role: 'CEO, BTM Group' },
        { quote: 'The illustrations Zul created for our children\'s book brought the characters to life in ways we never imagined. Truly talented.', name: 'Anisa Wulandari', role: 'Author, Nafla Stories' },
      ],
    },
    process: {
      title: 'THE PROCESS',
      subtitle: 'A proven approach to every project.',
      steps: [
        { title: 'Discovery', desc: 'Understanding your business, audience, goals, and competitive landscape through research and conversation.' },
        { title: 'Strategy', desc: 'Defining the creative direction, visual language, and project scope based on insights gathered.' },
        { title: 'Design', desc: 'Creating visual solutions — from initial concepts through refined deliverables with ongoing feedback.' },
        { title: 'Delivery', desc: 'Finalizing all assets, preparing guidelines, and ensuring smooth handoff for implementation.' },
      ],
    },
    packages: {
      title: 'SERVICE PACKAGES',
      subtitle: 'Choose the engagement that fits your needs.',
      starter: { name: 'BRAND FOUNDATION', price: 'Starting From $500', desc: 'Perfect for new businesses and startups ready to establish their visual presence.', features: ['Logo Design', 'Color Palette', 'Typography Selection', 'Basic Brand Guidelines', '2 Revision Rounds', '2 Week Timeline'], cta: 'GET STARTED' },
      professional: { name: 'VISUAL IDENTITY', price: 'Starting From $1,500', desc: 'Comprehensive branding for businesses ready to make a strong market impression.', features: ['Everything in Starter', 'Business Card Design', 'Letterhead & Envelope', 'Social Media Templates', 'Brand Style Guide', '4 Revision Rounds', '4 Week Timeline'], cta: 'GET STARTED' },
      enterprise: { name: 'CREATIVE RETAINER', price: 'Starting From $800/mo', desc: 'Ongoing design partnership for teams that need consistent creative support.', features: ['Priority Turnaround', 'Unlimited Requests', 'Monthly Strategy Call', 'All Design Services', 'Dedicated Support', 'Flexible Engagement'], cta: 'CONTACT ME' },
    },
    faq: {
      title: 'FREQUENTLY ASKED',
      items: [
        { q: 'What is your design process?', a: 'Every project begins with discovery — understanding your business, audience, and goals. From there, I develop a strategic direction, create visual concepts, refine based on feedback, and deliver production-ready assets with guidelines.' },
        { q: 'How long does a typical project take?', a: 'Timeline varies by scope. A logo project typically takes 1-2 weeks. A full brand identity takes 3-4 weeks. Rush projects can sometimes be accommodated — just ask.' },
        { q: 'What deliverables will I receive?', a: 'You will receive all final files in multiple formats (AI, PDF, PNG, JPG), brand guidelines documentation, and font recommendations. Everything you need to implement your brand consistently.' },
        { q: 'Do you offer revisions?', a: 'Yes. Each package includes a set number of revision rounds. Additional revisions can be added if needed. I want you to be completely satisfied with the result.' },
        { q: 'Can you work with international clients?', a: 'Absolutely. I work with clients worldwide. All communication happens via email, video calls, and project management tools. Time zone differences have never been an issue.' },
        { q: 'How do we get started?', a: 'Simply reach out through the contact form or WhatsApp. We will schedule a brief call to discuss your project, and I will send a proposal with timeline and pricing within 24 hours.' },
      ],
    },
    contactCTA: {
      title: "LET'S CREATE SOMETHING TOGETHER",
      subtitle: "Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.",
      primary: 'START A PROJECT',
      secondary: 'VIEW MY WORK',
    },
    footer: {
      tagline: 'Strategic Visual Designer',
      location: 'Semarang, Indonesia',
      navigation: 'NAVIGATION',
      social: 'SOCIAL',
      contact: 'CONTACT',
      portfolio: 'Portfolio Summary',
      copyright: '© 2025 Zulqifli Al Rasyid. All rights reserved.',
      madeIn: 'Made with intention in Semarang, Indonesia',
    },
  },
  id: {
    nav: { home: 'Beranda', projects: 'Proyek', services: 'Layanan', blog: 'Blog', about: 'Tentang', contact: 'Kontak' },
    hero: {
      title1: 'DESAINER',
      title2: 'GRAFIS &',
      title3: 'ILUSTRATOR',
      subtitle: 'Berbasis di Semarang, Indonesia. Membantu brand berkomunikasi dengan jelas, membangun identitas yang kuat, dan menciptakan pengalaman visual yang berkesan.',
      ctaProjects: 'LIHAT PROYEK',
      ctaContact: 'HUBUNGI SAYA',
      scroll: 'GULIR',
    },
    featuredProjects: { title: 'PROYEK UNGGULAN', viewAll: 'Lihat semua proyek' },
    valueProposition: {
      label: 'APA YANG SAYA LAKUKAN',
      pillars: [
        { title: 'IDENTITAS MEREK', desc: 'Menciptakan identitas visual yang koheren, menangkap esensi, membedakan dari kompetitor, dan membangun pengenalan yang bertahan lama.' },
        { title: 'SISTEM VISUAL', desc: 'Membangun sistem desain yang konsisten dan dapat diskalakan di setiap titik kontak — dari kartu nama hingga billboard.' },
        { title: 'ILUSTRASI', desc: 'Ilustrasi buatan tangan yang menambah kepribadian, kehangatan, dan kedalaman narasi pada merek dan publikasi.' },
      ],
    },
    servicesPreview: {
      title: 'LAYANAN',
      subtitle: 'Solusi desain strategis untuk brand yang berkembang.',
      viewAll: 'LIHAT SEMUA LAYANAN',
      items: [
        { name: 'Brand Foundation', desc: 'Logo, palet warna, tipografi, dan panduan merek untuk bisnis baru.' },
        { name: 'Visual Identity System', desc: 'Sistem merek komprehensif termasuk stationery, template, dan perpustakaan aset.' },
        { name: 'Brand Refresh', desc: 'Memperbarui dan modernisasi merek yang ada sambil mempertahankan ekuitas.' },
        { name: 'Creative Retainer', desc: 'Dukungan desain berkelanjutan untuk tim pemasaran dan bisnis yang berkembang.' },
      ],
    },
    testimonials: {
      title: 'APA KATA KLIEN',
      items: [
        { quote: 'Zul mengubah brand kami dari sesuatu yang amatir menjadi identitas profesional yang kami banggakan. Prosesnya lancar dan hasilnya melebihi ekspektasi.', name: 'Diana Putri', role: 'Founder, Sembako Delivery' },
        { quote: 'Bekerja dengan Zul terasa seperti memiliki direktur desain internal. Dia memahami visi kami segera dan memberikan sistem merek yang sangat baik.', name: 'Rizky Aditya', role: 'CEO, BTM Group' },
        { quote: 'Ilustrasi yang Zul buat untuk buku anak kami menghidupkan karakter dengan cara yang tidak pernah kami bayangkan. Benar-talenta.', name: 'Anisa Wulandari', role: 'Author, Nafla Stories' },
      ],
    },
    process: {
      title: 'PROSES KERJA',
      subtitle: 'Pendekatan terbukti untuk setiap proyek.',
      steps: [
        { title: 'Discovery', desc: 'Memahami bisnis, audiens, tujuan, dan lanskap kompetitif Anda melalui riset dan percakapan.' },
        { title: 'Strategi', desc: 'Menentukan arah kreatif, bahasa visual, dan ruang lingkup proyek berdasarkan wawasan yang dikumpulkan.' },
        { title: 'Desain', desc: 'Menciptakan solusi visual — dari konsep awal hingga deliverable yang disempurnakan dengan umpan balik berkelanjutan.' },
        { title: 'Pengiriman', desc: 'Menyelesaikan semua aset, menyiapkan panduan, dan memastikan serah terima yang lancar untuk implementasi.' },
      ],
    },
    packages: {
      title: 'PAKET LAYANAN',
      subtitle: 'Pilih engagement yang sesuai dengan kebutuhan Anda.',
      starter: { name: 'BRAND FOUNDATION', price: 'Mulai Dari Rp 7.5Jt', desc: 'Sempurna untuk bisnis baru dan startup yang siap membangun kehadiran visual mereka.', features: ['Desain Logo', 'Palet Warna', 'Seleksi Tipografi', 'Panduan Merek Dasar', '2 Ronde Revisi', 'Timeline 2 Minggu'], cta: 'MULAI' },
      professional: { name: 'VISUAL IDENTITY', price: 'Mulai Dari Rp 22.5Jt', desc: 'Branding komprehensif untuk bisnis yang siap membuat kesan pasar yang kuat.', features: ['Semua di Starter', 'Desain Kartu Nama', 'Kop Surat & Amplop', 'Template Media Sosial', 'Panduan Gaya Merek', '4 Ronde Revisi', 'Timeline 4 Minggu'], cta: 'MULAI' },
      enterprise: { name: 'CREATIVE RETAINER', price: 'Mulai Dari Rp 12Jt/bulan', desc: 'Kemitraan desain berkelanjutan untuk tim yang membutuhkan dukungan kreatif yang konsisten.', features: ['Prioritas Turnaround', 'Permintaan Tak Terbatas', 'Konsultasi Strategi Bulanan', 'Semua Layanan Desain', 'Dukungan Dedicated', 'Engagement Fleksibel'], cta: 'HUBUNGI SAYA' },
    },
    faq: {
      title: 'PERTANYAAN UMUM',
      items: [
        { q: 'Bagaimana proses desain Anda?', a: 'Setiap proyek dimulai dengan discovery — memahami bisnis, audiens, dan tujuan Anda. Dari situ, saya mengembangkan arahan strategis, membuat konsep visual, menyempurnakan berdasarkan umpan balik, dan menyerahkan aset siap produksi dengan panduan.' },
        { q: 'Berapa lama waktu yang dibutuhkan untuk sebuah proyek?', a: 'Timeline bervariasi tergantung ruang lingkup. Proyek logo biasanya memakan waktu 1-2 minggu. Identitas merek lengkap memakan waktu 3-4 minggu. Proyek mendesak kadang dapat diakomodasi — tanyakan saja.' },
        { q: 'Deliverable apa yang akan saya terima?', a: 'Anda akan menerima semua file final dalam berbagai format (AI, PDF, PNG, JPG), dokumentasi panduan merek, dan rekomendasi font. Semua yang Anda butuhkan untuk mengimplementasikan merek Anda secara konsisten.' },
        { q: 'Apakah Anda menawarkan revisi?', a: 'Ya. Setiap paket menyertakan sejumlah ronde revisi. Revisi tambahan dapat ditambahkan jika diperlukan. Saya ingin Anda benar-benar puas dengan hasilnya.' },
        { q: 'Bisakah Anda bekerja dengan klien internasional?', a: 'Tentu saja. Saya bekerja dengan klien di seluruh dunia. Semua komunikasi terjadi melalui email, panggilan video, dan alat manajemen proyek. Perbedaan zona waktu tidak pernah menjadi masalah.' },
        { q: 'Bagaimana cara memulai?', a: 'Cukup hubungi melalui formulir kontak atau WhatsApp. Kami akan menjadwalkan panggilan singkat untuk mendiskusikan proyek Anda, dan saya akan mengirimkan proposal dengan timeline dan harga dalam 24 jam.' },
      ],
    },
    contactCTA: {
      title: 'MARI CIPTAKAN SESUATU BERSAMA',
      subtitle: 'Punya proyek dalam pikiran? Saya ingin mendengarnya. Mari diskusikan bagaimana kita mewujudkan visi Anda.',
      primary: 'MULAI PROYEK',
      secondary: 'LIHAT KARYA SAYA',
    },
    footer: {
      tagline: 'Desainer Visual Strategis',
      location: 'Semarang, Indonesia',
      navigation: 'NAVIGASI',
      social: 'SOSIAL',
      contact: 'KONTAK',
      portfolio: 'Ringkasan Portofolio',
      copyright: '© 2025 Zulqifli Al Rasyid. Hak cipta dilindungi.',
      madeIn: 'Dibuat dengan niat di Semarang, Indonesia',
    },
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('zul-lang');
    return stored === 'id' ? 'id' : 'en';
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'id' : 'en';
      localStorage.setItem('zul-lang', next);
      return next;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('zul-lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => useContext(LanguageContext);
