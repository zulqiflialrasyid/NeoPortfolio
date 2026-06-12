export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'logo-is-not-brand',
    title: 'Why Your Logo Is Not Your Brand',
    excerpt: 'A logo is just the tip of the iceberg. Real brand power comes from the system behind it — the consistent visual language that communicates who you are at every touchpoint.',
    category: 'Branding',
    date: 'March 15, 2025',
    readTime: '5 min read',
    image: '/images/blog-branding.jpg',
    featured: true,
  },
  {
    id: '2',
    slug: 'design-process',
    title: 'My Design Process, Step by Step',
    excerpt: 'A behind-the-scenes look at how I approach every project, from the first conversation to final delivery.',
    category: 'Design Process',
    date: 'March 10, 2025',
    readTime: '7 min read',
    image: '/images/blog-process.jpg',
  },
  {
    id: '3',
    slug: 'power-of-restraint',
    title: 'The Power of Restraint in Design',
    excerpt: 'Why saying no is often more important than saying yes. How restraint creates stronger visual communication.',
    category: 'Creative Thinking',
    date: 'February 28, 2025',
    readTime: '4 min read',
    image: '/images/about-studio.jpg',
  },
  {
    id: '4',
    slug: 'sembako-case-study',
    title: 'Designing for Sembako: A Case Study',
    excerpt: 'The story behind a grocery delivery brand identity — from research to final delivery.',
    category: 'Project Notes',
    date: 'February 15, 2025',
    readTime: '6 min read',
    image: '/images/project-brand-sembako.jpg',
  },
  {
    id: '5',
    slug: 'small-business-brands',
    title: 'Why Small Businesses Need Strong Brands',
    excerpt: 'The difference a professional brand makes for small businesses competing in crowded markets.',
    category: 'Industry Insights',
    date: 'January 30, 2025',
    readTime: '5 min read',
    image: '/images/project-logo-nafla.jpg',
  },
  {
    id: '6',
    slug: 'typography-brand-voice',
    title: 'Typography as Brand Voice',
    excerpt: 'How font choices communicate personality, values, and tone before a single word is read.',
    category: 'Branding',
    date: 'January 15, 2025',
    readTime: '4 min read',
    image: '/images/project-logo-btm.jpg',
  },
  {
    id: '7',
    slug: 'indonesian-culture-inspiration',
    title: 'Finding Inspiration in Indonesian Culture',
    excerpt: 'How traditional art forms, patterns, and crafts inform contemporary design work.',
    category: 'Creative Thinking',
    date: 'December 28, 2024',
    readTime: '5 min read',
    image: '/images/project-illustration-nafla.jpg',
  },
];

export const blogCategories = ['All', 'Branding', 'Design Process', 'Creative Thinking', 'Project Notes', 'Industry Insights'];
