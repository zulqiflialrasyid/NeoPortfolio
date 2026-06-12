export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'product' | 'ux' | 'branding';
  year: string;
  duration: string;
  image: string;
  featured: boolean;
  overview: string;
  client: string;
  role: string;
  tools: string[];
  process: {
    step: string;
    title: string;
    body: string;
    insight?: string;
  }[];
  results: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'fintrack',
    title: 'FinTrack',
    subtitle: 'Finance Dashboard Redesign',
    category: 'product',
    year: '2024',
    duration: '8 Weeks',
    image: '/images/project-1.jpg',
    featured: true,
    client: 'FinTrack Indonesia',
    role: 'Lead Product Designer',
    tools: ['Figma', 'Principle', 'Maze'],
    overview: 'FinTrack is a personal finance dashboard that helps users track expenses, set budgets, and visualize spending patterns. The challenge was simplifying complex financial data into an intuitive interface.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Started with 12 user interviews across three user segments. Key finding: users felt overwhelmed by data density in existing finance apps. They wanted clarity, not more features.',
        insight: 'Users spend an average of 90 seconds looking for specific transaction data in existing apps.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Created three primary personas: The Budgeter, The Investor, and The Tracker. Mapped their daily financial workflows to identify pain points.',
        insight: '80% of users only need to see 3 key metrics: balance, monthly spend, and budget remaining.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Explored 4 divergent design directions — from minimalist to data-rich. Tested low-fi prototypes with 8 users to validate information hierarchy.',
        insight: 'Card-based layout outperformed list view by 45% in task completion tests.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Final design uses a card-based system with progressive disclosure. Users see summary first, drill down for details. Color-coded categories make patterns instantly recognizable.',
      },
    ],
    results: [
      '40% increase in daily active users',
      '60% reduction in support tickets',
      '4.8★ app store rating',
      '2.3x increase in session duration',
    ],
    gallery: ['/images/project-1.jpg', '/images/project-7.jpg'],
  },
  {
    id: '2',
    slug: 'ecomarket',
    title: 'EcoMarket',
    subtitle: 'Sustainable E-Commerce App',
    category: 'ux',
    year: '2024',
    duration: '12 Weeks',
    image: '/images/project-2.jpg',
    featured: true,
    client: 'EcoMarket Startup',
    role: 'UX Designer & Researcher',
    tools: ['Figma', 'Miro', 'UserTesting'],
    overview: 'EcoMarket is a mobile e-commerce platform focused on sustainable and eco-friendly products. The goal was to make sustainable shopping accessible and trustworthy.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Conducted surveys with 200+ eco-conscious shoppers. Found that trust in product sustainability claims was the biggest barrier to purchase.',
        insight: '67% of users don\'t trust "eco-friendly" labels without third-party verification.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Developed a trust framework and sustainability scoring system. Created user journeys for three shopper types.',
        insight: 'Users need transparency at 3 levels: product, brand, and supply chain.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Designed multiple navigation patterns and filtering systems. Tested with users to find the optimal balance of information density.',
        insight: 'Visual sustainability badges increased click-through by 35%.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Implemented a clean, nature-inspired UI with clear trust indicators. Every product page shows a complete sustainability breakdown.',
      },
    ],
    results: [
      '55% increase in purchase conversion',
      '4.6★ app store rating',
      '30% higher average order value',
      '78% user trust score',
    ],
    gallery: ['/images/project-2.jpg'],
  },
  {
    id: '3',
    slug: 'nusantara',
    title: 'Nusantara Brand',
    subtitle: 'Indonesian Cultural Brand Identity',
    category: 'branding',
    year: '2023',
    duration: '6 Weeks',
    image: '/images/project-3.jpg',
    featured: true,
    client: 'Nusantara Foundation',
    role: 'Creative Director',
    tools: ['Illustrator', 'Photoshop', 'After Effects'],
    overview: 'A complete brand identity system for Nusantara Foundation, an organization promoting Indonesian cultural heritage to global audiences.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Immersed in Indonesian cultural motifs, batik patterns, and traditional art forms. Interviewed cultural experts and the foundation team.',
        insight: 'The brand needs to feel both traditional and contemporary — not stuck in the past.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Established brand pillars: Heritage, Unity, and Progress. Defined the visual language that bridges tradition with modernity.',
        insight: 'The identity should be a conversation starter about Indonesian culture.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Created 5 distinct visual directions, from minimalist to ornate. Tested with both Indonesian and international audiences.',
        insight: 'International audiences preferred subtle cultural references over literal motifs.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Final identity uses a modular pattern system inspired by batik geometry, paired with clean typography. The logo is a modern interpretation of the wayang shadow puppet.',
      },
    ],
    results: [
      'Featured in 3 design publications',
      '200% increase in social engagement',
      'Brand recognition up 85%',
      'Adopted by 15 partner organizations',
    ],
    gallery: ['/images/project-3.jpg'],
  },
  {
    id: '4',
    slug: 'healthpulse',
    title: 'HealthPulse',
    subtitle: 'Healthcare Monitoring Dashboard',
    category: 'product',
    year: '2023',
    duration: '10 Weeks',
    image: '/images/project-4.jpg',
    featured: true,
    client: 'HealthPulse Medical',
    role: 'Product Designer',
    tools: ['Figma', 'ProtoPie', 'Notion'],
    overview: 'HealthPulse is a healthcare monitoring dashboard for patients and doctors to track vital signs, medication schedules, and health trends.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Shadowed healthcare professionals and interviewed 20 patients. Found that existing dashboards were too clinical and intimidating for patients.',
        insight: 'Patients avoid checking their health data because it causes anxiety.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Created separate but connected experiences for patients (calming, simple) and doctors (detailed, efficient).',
        insight: 'The same data needs two completely different presentations.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Explored visual treatments ranging from clinical to friendly. Tested color psychology for health data presentation.',
        insight: 'Soft gradients and friendly icons reduced patient anxiety by 40%.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Built a dual-interface system. Patient view uses soft colors and clear progress indicators. Doctor view uses dense data tables with quick-scan highlights.',
      },
    ],
    results: [
      '3x increase in patient engagement',
      '50% faster doctor workflow',
      '92% patient satisfaction score',
      'Deployed in 5 clinics',
    ],
    gallery: ['/images/project-4.jpg'],
  },
  {
    id: '5',
    slug: 'urbanspace',
    title: 'UrbanSpace',
    subtitle: 'Smart City Mobile App',
    category: 'ux',
    year: '2023',
    duration: '14 Weeks',
    image: '/images/project-5.jpg',
    featured: false,
    client: 'Jakarta Smart City',
    role: 'UX Lead',
    tools: ['Figma', 'Maze', 'FigJam'],
    overview: 'UrbanSpace connects city residents with public services, from parking to waste management, in one unified platform.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Mapped 15+ city services and interviewed 50+ residents. Found that citizens were using 6+ different apps for city services.',
        insight: 'Service fragmentation was the #1 pain point for city residents.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Created a unified service architecture. Designed a smart recommendation system that surfaces relevant services based on context.',
        insight: 'Users need services, not departments. The app should hide government complexity.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Tested 3 navigation paradigms: service-based, location-based, and time-based. Location won in usability tests.',
        insight: '"What\'s near me?" is the most important question for users.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Built a map-first interface with contextual service cards. Integrated real-time data for parking availability and queue times.',
      },
    ],
    results: [
      '100K+ downloads in first month',
      '4.5★ rating',
      '70% reduction in service complaints',
      '5 city departments unified',
    ],
    gallery: ['/images/project-5.jpg'],
  },
  {
    id: '6',
    slug: 'carikopi',
    title: 'CariKopi',
    subtitle: 'Coffee Discovery Platform',
    category: 'product',
    year: '2024',
    duration: '8 Weeks',
    image: '/images/project-6.jpg',
    featured: false,
    client: 'CariKopi Indonesia',
    role: 'Product Designer',
    tools: ['Figma', 'Principle', 'Hotjar'],
    overview: 'CariKopi helps coffee enthusiasts discover specialty coffee shops, track their tasting notes, and connect with the local coffee community.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Interviewed 30 coffee enthusiasts and 15 cafe owners. Found that discovery was entirely word-of-mouth and Instagram-based.',
        insight: 'Coffee lovers want curated recommendations based on their taste profile, not just location.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Built a taste profiling system and recommendation engine. Designed for two user types: explorers and regulars.',
        insight: 'Personalization is key — every coffee drinker has unique preferences.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Tested multiple discovery patterns: map-first, list-first, and taste-quiz-first. The taste quiz had the highest engagement.',
        insight: 'Gamified taste profiling increased profile completion by 80%.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Created a warm, coffee-toned UI with a swipeable discovery interface. Integrated community features for sharing tasting notes.',
      },
    ],
    results: [
      '50K+ active users',
      '4.7★ app store rating',
      '300+ partner cafes',
      '60% user retention at 30 days',
    ],
    gallery: ['/images/project-6.jpg'],
  },
  {
    id: '7',
    slug: 'teknofest',
    title: 'TeknoFest',
    subtitle: 'Tech Festival Branding',
    category: 'branding',
    year: '2024',
    duration: '4 Weeks',
    image: '/images/project-8.jpg',
    featured: false,
    client: 'TeknoFest Indonesia',
    role: 'Art Director',
    tools: ['Illustrator', 'Photoshop', 'Cinema 4D'],
    overview: 'Complete visual identity for Indonesia\'s largest technology festival, attracting 50K+ attendees. The brand needed to feel cutting-edge yet accessible.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Analyzed tech festival branding globally. Found that most either felt too corporate or too playful. The sweet spot was "exciting innovation".',
        insight: 'The brand should feel like a festival first, tech second.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Established brand keywords: Electric, Inclusive, Forward. Created a visual system that scales across digital, print, and environmental.',
        insight: 'The identity needs to work at billboard scale and app icon scale simultaneously.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Explored generative art approaches, glitch aesthetics, and neon-inspired palettes. Tested visibility in both daylight and nighttime contexts.',
        insight: 'High contrast neon on dark performed best in environmental testing.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Created a dynamic identity system using generative grid patterns. The logo animates and adapts to different formats while maintaining recognition.',
      },
    ],
    results: [
      '50K+ attendees',
      '3M+ social impressions',
      'Brand system adopted for 3 events',
      'Featured in Behance Galleries',
    ],
    gallery: ['/images/project-8.jpg'],
  },
  {
    id: '8',
    slug: 'greenroute',
    title: 'GreenRoute',
    subtitle: 'Sustainable Transport App',
    category: 'ux',
    year: '2024',
    duration: '10 Weeks',
    image: '/images/project-9.jpg',
    featured: false,
    client: 'GreenRoute Foundation',
    role: 'UX Designer',
    tools: ['Figma', 'Miro', 'Lookback'],
    overview: 'GreenRoute encourages sustainable transportation by showing eco-friendly route options, carbon savings, and gamifying green commuting choices.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Surveyed 150 commuters about their transportation choices. Found that people want to be eco-friendly but convenience always wins.',
        insight: 'Sustainability needs to be the convenient choice, not the sacrifice.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Designed a system that shows eco-routes alongside regular routes, highlighting time and carbon trade-offs transparently.',
        insight: 'Users make greener choices when they see the impact of their decisions.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Tested multiple incentive models: points, streaks, community challenges, and carbon credits. Community challenges had highest engagement.',
        insight: 'Social accountability increases green commuting by 45%.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Built a route planner with real-time eco-scoring. Added team challenges and a personal carbon dashboard. The UI uses green as a reward color, not a preachy theme.',
      },
    ],
    results: [
      '25K+ active commuters',
      '15% shift to green transport',
      '200 tons CO2 saved monthly',
      '4.4★ app rating',
    ],
    gallery: ['/images/project-9.jpg'],
  },
  {
    id: '9',
    slug: 'artisanid',
    title: 'ArtisanID',
    subtitle: 'Artisan E-Commerce Branding',
    category: 'branding',
    year: '2023',
    duration: '6 Weeks',
    image: '/images/project-3.jpg',
    featured: false,
    client: 'ArtisanID Platform',
    role: 'Brand Designer',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    overview: 'Brand identity for ArtisanID, a platform connecting Indonesian artisans with global buyers. The brand needed to feel authentic, handcrafted, and trustworthy.',
    process: [
      {
        step: '01',
        title: 'Discover',
        body: 'Visited 10 artisan workshops across Indonesia. Documented traditional techniques and the stories behind each craft.',
        insight: 'Each craft has a story that machines can\'t replicate. The brand should be a storyteller.',
      },
      {
        step: '02',
        title: 'Define',
        body: 'Built a brand around the concept of "provenance" — every product tells the story of its maker, materials, and technique.',
        insight: 'Buyers pay 30% more when they know the artisan\'s story.',
      },
      {
        step: '03',
        title: 'Explore',
        body: 'Explored visual directions from rustic to refined. Tested with both artisans (suppliers) and international buyers.',
        insight: 'Both audiences preferred a clean, gallery-like presentation that lets the crafts shine.',
      },
      {
        step: '04',
        title: 'Execute',
        body: 'Created an understated, gallery-inspired identity. The logo is a hand-drawn mark that echoes artisan signatures. Product photography guidelines emphasize process over perfection.',
      },
    ],
    results: [
      '120+ artisan partners',
      'Global buyer base in 15 countries',
      'Average 40% higher artisan income',
      'Featured in Design Week',
    ],
    gallery: ['/images/project-3.jpg'],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getAllProjects = () => projects;
export const getProjectsByCategory = (category: string) =>
  category === 'all' ? projects : projects.filter((p) => p.category === category);
