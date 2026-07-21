export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  category: 'Office' | 'Hospitality' | 'Education' | 'Residential';
  year: number;
  heroImage: string;
  carouselImages: string[];
  galleryImages: string[];
  summary: string;
  description: string;
  keyFacts: {
    client: string;
    services: string[];
    area: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'canopy-office',
    name: 'The Canopy Office',
    location: 'Amsterdam, NL',
    category: 'Office',
    year: 2024,
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
    carouselImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'A biophilic corporate headquarters prioritising natural illumination and organic configurations.',
    description: 'Designed as a progressive workspace environment, The Canopy Office integrates mature interior foliage, curved acoustic oak partitions, and intelligent daylight harvesting systems. We sought to soften the traditional boundaries of commercial office structures, resulting in a sanctuary that inspires collaboration and deep cognitive focus.',
    keyFacts: {
      client: 'Vanguard Ventures Holding',
      services: ['Concept Design', 'Material Sourcing', 'Acoustic Engineering', 'Furniture Curation'],
      area: '2,400 m²'
    }
  },
  {
    id: '2',
    slug: 'haven-bistro',
    name: 'Haven Bistro & Lounge',
    location: 'Rotterdam, NL',
    category: 'Hospitality',
    year: 2023,
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80',
    carouselImages: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=80',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'An earthy, tactile dining sanctuary inspired by the raw textures of Rotterdam\'s industrial ports.',
    description: 'Haven Bistro is a celebration of rough-sawn solid timber, hand-applied clay wall plasters, and micro-cement flooring. The lighting concept is deliberately low-contrast, casting intimate pools of warm illumination over bespoke oak banquettes.',
    keyFacts: {
      client: 'Culinary Group NL',
      services: ['Interior Architecture', 'Lighting Design', 'Bespoke Joinery', 'Brand Identity Integration'],
      area: '420 m²'
    }
  },
  {
    id: '3',
    slug: 'apex-learning',
    name: 'Apex Learning Commons',
    location: 'Utrecht, NL',
    category: 'Education',
    year: 2025,
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80',
    carouselImages: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'A futuristic university hub blending flexible classrooms with dynamic student study spaces.',
    description: 'The Apex Learning Commons redefines institutional spaces. We moved away from structured lecture halls to engineer fluid, multi-purpose educational landscapes. Mobile partitions, interactive media walls, and writeable surfaces allow rooms to reconfigure within minutes.',
    keyFacts: {
      client: 'University of Utrecht',
      services: ['Educational Space Planning', 'Acoustic Engineering', 'FF&E Specification', 'Sustainable Consultancy'],
      area: '3,800 m²'
    }
  },
  {
    id: '4',
    slug: 'atelier-living',
    name: 'The Atelier Living Space',
    location: 'The Hague, NL',
    category: 'Residential',
    year: 2023,
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
    carouselImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2000&q=80',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'A warm, minimal loft combining home studio functionality with serene residential comfort.',
    description: 'An elegant residential interior that shifts seamlessly between private sanctuary and creative studio. Structured in an old printmaker\'s workshop, it leverages original high-set masonry windows, exposing the industrial brick structure while layering a refined palette of warm plaster, linen drapery, and custom walnut storage.',
    keyFacts: {
      client: 'Private Commission',
      services: ['Residential Architecture', 'Spatial Restructuring', 'Custom Kitchen Design', 'Art Advisory'],
      area: '185 m²'
    }
  },
  {
    id: '5',
    slug: 'novus-creative-hub',
    name: 'Novus Creative Hub',
    location: 'Antwerp, BE',
    category: 'Office',
    year: 2025,
    heroImage: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2000&q=80',
    carouselImages: [
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=2000&q=80',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80'
    ],
    summary: 'An industrial co-working destination engineered to support agile and cross-disciplinary teams.',
    description: 'Novus Creative Hub occupies a restored warehouse in Antwerp\'s docklands. Striking a balance between raw metal structural frames and comfortable, textured soft areas, we designed a space suited to the fluid demands of early-stage startups and creative agency studios.',
    keyFacts: {
      client: 'Novus Spaces Europe',
      services: ['Coworking Interior Concept', 'FF&E Curation', 'HVAC Integration', 'Wayfinding & Signage'],
      area: '3,100 m²'
    }
  },
];
