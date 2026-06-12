export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  year: string;
  duration: string;
  role: string;
  brief: string;
  direction: string;
  results: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'sembako',
    name: 'Sembako',
    category: 'Branding',
    image: '/images/project-brand-sembako.jpg',
    description: 'Grocery delivery service brand identity including logo, packaging, and visual guidelines.',
    year: '2024',
    duration: '3 Weeks',
    role: 'Brand Designer',
    brief: 'Sembako Delivery needed a brand identity that communicated freshness, reliability, and local roots. As a new grocery delivery service in Semarang, they faced competition from larger platforms and needed to differentiate through a warm, community-focused visual presence.',
    direction: 'The design direction drew from traditional Indonesian market culture — warm textures, natural materials, and hand-crafted authenticity. The color palette uses earthy tones with a fresh green accent to signal freshness. Typography pairs a friendly serif for warmth with a clean sans-serif for readability.',
    results: 'The new identity helped Sembako establish immediate trust with local customers, resulting in a 40% increase in brand recognition within the first month of launch.',
  },
  {
    id: '2',
    slug: 'btm',
    name: 'BTM',
    category: 'Logo Design',
    image: '/images/project-logo-btm.jpg',
    description: 'Custom logotype for a technology and business consulting firm.',
    year: '2024',
    duration: '2 Weeks',
    role: 'Logo Designer',
    brief: 'BTM Group needed a sophisticated, modern logotype that conveyed expertise and innovation in the consulting space.',
    direction: 'Created a geometric, custom-drawn logotype with precise letterforms that communicate precision and professionalism. The monochrome palette ensures versatility across all applications.',
    results: 'The logo positioned BTM as a premium consulting brand, helping them win several new enterprise clients.',
  },
  {
    id: '3',
    slug: 'nafla-illustration',
    name: 'Nafla Illustration',
    category: 'Illustration',
    image: '/images/project-illustration-nafla.jpg',
    description: "Children's book illustration series featuring a friendly baby goat character.",
    year: '2023',
    duration: '4 Weeks',
    role: 'Illustrator',
    brief: "Nafla Stories needed a series of warm, engaging illustrations for their children's book featuring a baby goat character named Nafla.",
    direction: 'Developed a soft watercolor illustration style with gentle earth tones. The character design focused on approachability and warmth, with expressive features that children would love.',
    results: 'The book became a local bestseller in the children\'s category, with the Nafla character gaining a dedicated following among young readers.',
  },
  {
    id: '4',
    slug: 'nafla-brand',
    name: 'Nafla Brand',
    category: 'Branding',
    image: '/images/project-logo-nafla.jpg',
    description: "Complete brand identity for a children's education platform.",
    year: '2023',
    duration: '4 Weeks',
    role: 'Brand Designer',
    brief: "Nafla Stories needed a complete brand identity system for their children's education platform.",
    direction: 'Created a warm, organic brand identity using deep forest green and cream tones. The wordmark features subtle organic curves that reference nature and growth.',
    results: 'The brand established instant credibility in the education space, leading to partnerships with three local schools.',
  },
  {
    id: '5',
    slug: 'wedding-invitation',
    name: 'Wedding Invitation',
    category: 'Branding',
    image: '/images/project-brand-wedding.jpg',
    description: 'Elegant wedding stationery suite with botanical illustrations.',
    year: '2024',
    duration: '2 Weeks',
    role: 'Designer',
    brief: 'A couple wanted an elegant, nature-inspired wedding invitation suite that felt both modern and timeless.',
    direction: 'Designed a botanical illustration-led stationery suite using sage green and white. Every piece features hand-drawn foliage elements that create a cohesive, romantic feel.',
    results: 'The invitation suite received widespread praise from guests, with several attendees commissioning similar designs for their own events.',
  },
  {
    id: '6',
    slug: 'satrio-portrait',
    name: 'Satrio Portrait',
    category: 'Illustration',
    image: '/images/project-illustration-satrio.jpg',
    description: 'Digital portrait illustration with warm, expressive brushwork.',
    year: '2024',
    duration: '1 Week',
    role: 'Illustrator',
    brief: 'A personal portrait commission for a client who wanted an artistic, warm depiction.',
    direction: 'Used a semi-realistic digital painting style with warm brown and amber tones. The expressive brushwork adds character and depth to the portrait.',
    results: 'The portrait became a cherished keepsake and led to several new portrait commissions.',
  },
  {
    id: '7',
    slug: 'jm-social-media',
    name: 'JM Social Media',
    category: 'Social Media',
    image: '/images/project-social-jm.jpg',
    description: "Social media content design for a fashion brand's Instagram presence.",
    year: '2024',
    duration: 'Ongoing',
    role: 'Social Media Designer',
    brief: 'JM Fashion needed a cohesive, trendy Instagram presence that showcased their collections.',
    direction: 'Created a clean grid layout system with lifestyle photography and minimal typography. The aesthetic is modern, aspirational, and consistently on-brand.',
    results: 'Instagram engagement increased by 65% within the first two months of the new content system.',
  },
  {
    id: '8',
    slug: 'rfc-campaign',
    name: 'RFC Campaign',
    category: 'Marketing Assets',
    image: '/images/project-marketing-rfc.jpg',
    description: 'Marketing campaign visuals for a fitness brand launch.',
    year: '2025',
    duration: '2 Weeks',
    role: 'Campaign Designer',
    brief: 'RFC Fitness needed high-energy campaign visuals for their brand launch across digital and print channels.',
    direction: 'Developed bold, dynamic visuals using a red and black color scheme with strong diagonal compositions. The typography is bold and impactful.',
    results: 'The campaign generated over 500 pre-launch signups and established RFC as a serious player in the fitness market.',
  },
];

export const categories = ['All', 'Branding', 'Logo Design', 'Illustration', 'Social Media', 'Marketing Assets'];
