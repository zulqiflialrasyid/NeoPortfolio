import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      // Navigation
      nav: {
        home: 'Beranda',
        works: 'Karya',
        about: 'Tentang',
        contact: 'Kontak',
        blog: 'Blog',
      },
      // Welcome
      welcome: {
        title: 'FOLIO.AR',
        subtitle: 'Portofolio 2024 — 2026',
        tagline: 'Design Thinker & Problem Solver',
        cta: 'Klik di mana saja untuk masuk',
      },
      // Hero
      hero: {
        available: 'Tersedia untuk Kolaborasi',
        name: 'ARYA\nRAMADHAN',
        description: 'Seorang Design Thinker yang menciptakan pengalaman bermakna melalui desain berbasis riset.',
        cta: 'Lihat Karya Pilihan',
      },
      // About
      about: {
        label: 'TENTANG',
        headline: 'BERPIKIR\nMELALUI\nDESAIN',
        body: 'Saya mendekati setiap proyek seperti sebuah teka-teki — menguraikan masalah, mempertanyakan asumsi, dan membangun solusi yang benar-benar penting. Dengan pengalaman 3+ tahun mencakup riset UX, desain produk, dan kreatif arah seni.',
        cta: 'Selengkapnya',
      },
      // Works
      works: {
        label: 'KARYA PILIHAN',
        headline: 'PROYEK\nUNGGULAN',
        cta: 'Lihat Semua Karya',
        allWorks: 'SEMUA KARYA',
        subtitle: 'Kurasi proyek dari 2023 — 2026',
        categories: {
          all: 'SEMUA',
          product: 'PRODUK',
          ux: 'UX DESIGN',
          branding: 'BRANDING',
        },
      },
      // Process
      process: {
        label: 'CARA KERJA',
        headline: 'PROSES',
        steps: [
          {
            number: '01',
            title: 'MENEMUKAN',
            body: 'Imersi mendalam ke dalam ruang masalah — wawancara stakeholder, riset pengguna, analisis pasar, dan penilaian kompetitif.',
          },
          {
            number: '02',
            title: 'MENETAPKAN',
            body: 'Mensintesis wawasan menjadi kerangka kerja yang dapat ditindaklanjuti — persona pengguna, peta perjalanan, dan pernyataan masalah yang jelas.',
          },
          {
            number: '03',
            title: 'MENJELAJAH',
            body: 'Ideasi cepat dan pemikiran divergen — membuat sketsa, wireframe, dan mengeksplorasi berbagai arah solusi.',
          },
          {
            number: '04',
            title: 'MENGEKSEKUSI',
            body: 'Desain fidelitas tinggi, pembuatan prototipe, dan pengujian iteratif — menyempurnakan hingga setiap piksel memiliki tujuan.',
          },
          {
            number: '05',
            title: 'MENYAMPAIKAN',
            body: 'Aset siap produksi, penyerahan desain, dan dukungan implementasi — memastikan visi menjadi kenyataan.',
          },
        ],
      },
      // Contact
      contact: {
        label: 'HUBUNGI',
        headline: 'MARI\nMEMBANGUN\nBERSAMA',
        body: 'Saat ini terbuka untuk peran full-time, proyek freelance, dan kolaborasi kreatif.',
        location: 'Berdasarkan di Jakarta, Indonesia — Bekerja Secara Global',
        form: {
          name: 'Nama',
          email: 'Email',
          subject: 'Subjek',
          message: 'Pesan',
          submit: 'Kirim Pesan',
          orReach: 'Atau hubungi langsung:',
          success: 'Pesan terkirim! Mengalihkan...',
        },
        info: {
          title: 'MARI BERKENALAN',
          description: 'Punya proyek dalam pikiran atau ingin diskusi peluang? Kirim pesan dan saya akan merespons dalam 24 jam.',
          email: 'hello@folio.ar',
          phone: '+62 812 3456 7890',
          location: 'Jakarta, Indonesia',
        },
        social: {
          linkedin: 'LinkedIn',
          dribbble: 'Dribbble',
          behance: 'Behance',
          instagram: 'Instagram',
        },
      },
      // Case Study
      caseStudy: {
        overview: 'Ringkasan',
        process: 'Proses',
        results: 'Hasil',
        tools: 'Alat',
        duration: 'Durasi',
        role: 'Peran',
        client: 'Klien',
        prevProject: 'Proyek Sebelumnya',
        nextProject: 'Proyek Selanjutnya',
        backToWorks: 'Kembali ke Karya',
      },
      // Footer
      footer: {
        copyright: '© 2026 Arya Ramadhan. Hak cipta dilindungi.',
      },
      // Common
      common: {
        loading: 'Memuat...',
        send: 'Kirim',
        close: 'Tutup',
        menu: 'Menu',
      },
    },
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        works: 'Works',
        about: 'About',
        contact: 'Contact',
        blog: 'Blog',
      },
      // Welcome
      welcome: {
        title: 'FOLIO.AR',
        subtitle: 'Portfolio 2024 — 2026',
        tagline: 'Design Thinker & Problem Solver',
        cta: 'Click anywhere to enter',
      },
      // Hero
      hero: {
        available: 'Available for Collaborations',
        name: 'ARYA\nRAMADHAN',
        description: 'A Design Thinker crafting meaningful experiences through research-driven design.',
        cta: 'See Selected Works',
      },
      // About
      about: {
        label: 'ABOUT',
        headline: 'THINKING\nTHROUGH\nDESIGN',
        body: 'I approach every project as a puzzle — dissecting problems, questioning assumptions, and building solutions that actually matter. With 3+ years of experience spanning UX research, product design, and creative direction.',
        cta: 'Full Story',
      },
      // Works
      works: {
        label: 'SELECTED WORKS',
        headline: 'FEATURED\nPROJECTS',
        cta: 'View All Works',
        allWorks: 'ALL WORKS',
        subtitle: 'A curated selection of projects from 2023 — 2026',
        categories: {
          all: 'ALL',
          product: 'PRODUCT',
          ux: 'UX DESIGN',
          branding: 'BRANDING',
        },
      },
      // Process
      process: {
        label: 'HOW I WORK',
        headline: 'THE PROCESS',
        steps: [
          {
            number: '01',
            title: 'DISCOVER',
            body: 'Deep immersion into the problem space — stakeholder interviews, user research, market analysis, and competitive benchmarking.',
          },
          {
            number: '02',
            title: 'DEFINE',
            body: 'Synthesizing insights into actionable frameworks — user personas, journey maps, and clear problem statements.',
          },
          {
            number: '03',
            title: 'EXPLORE',
            body: 'Rapid ideation and divergent thinking — sketching, wireframing, and exploring multiple solution directions.',
          },
          {
            number: '04',
            title: 'EXECUTE',
            body: 'High-fidelity design, prototyping, and iterative testing — refining until every pixel serves a purpose.',
          },
          {
            number: '05',
            title: 'DELIVER',
            body: 'Production-ready assets, design handoff, and implementation support — ensuring vision becomes reality.',
          },
        ],
      },
      // Contact
      contact: {
        label: 'CONTACT',
        headline: "LET'S\nBUILD\nTOGETHER",
        body: 'Currently open for full-time roles, freelance projects, and creative collaborations.',
        location: 'Based in Jakarta, Indonesia — Working Worldwide',
        form: {
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message',
          orReach: 'Or reach me directly:',
          success: 'Message sent! Redirecting...',
        },
        info: {
          title: 'GET IN TOUCH',
          description: 'Have a project in mind or want to discuss opportunities? Drop a message and I\'ll get back within 24 hours.',
          email: 'hello@folio.ar',
          phone: '+62 812 3456 7890',
          location: 'Jakarta, Indonesia',
        },
        social: {
          linkedin: 'LinkedIn',
          dribbble: 'Dribbble',
          behance: 'Behance',
          instagram: 'Instagram',
        },
      },
      // Case Study
      caseStudy: {
        overview: 'Overview',
        process: 'Process',
        results: 'Results',
        tools: 'Tools',
        duration: 'Duration',
        role: 'Role',
        client: 'Client',
        prevProject: 'Previous Project',
        nextProject: 'Next Project',
        backToWorks: 'Back to Works',
      },
      // Footer
      footer: {
        copyright: '© 2026 Arya Ramadhan. All rights reserved.',
      },
      // Common
      common: {
        loading: 'Loading...',
        send: 'Send',
        close: 'Close',
        menu: 'Menu',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'id',
  fallbackLng: 'id',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
