export type ProjectCategory = 'residential' | 'commercial';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  location: string;
  type: string;
  condition: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  { id: 'aster-villa-simpang', name: 'Aster Villa', category: 'residential', location: 'Bandar Tasek Mutiara, Simpang Ampat', type: 'Landed Double Storey', condition: 'New gated & guarded residential development', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', description: 'A complete interior transformation for a new double-storey home, blending modern comfort with warm, family-oriented living spaces.' },
  { id: 'aster-villa-corner', name: 'Aster Villa (Corner Lot)', category: 'residential', location: 'Bandar Tasek Mutiara, Simpang Ampat', type: 'Landed Corner Double Storey', condition: 'New gated & guarded residential development', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', description: 'Corner lot optimization with expanded natural light, custom carpentry, and seamless indoor-outdoor flow.' },
  { id: 'desa-relau-ii', name: 'Desa Relau II', category: 'residential', location: 'Lebuh Relau 2, Penang', type: 'Condominium', condition: '1999 year condominium', image: 'https://images.unsplash.com/photo-1600210492486-724fe3c67fb0?w=800&q=80', description: 'Full condo renovation revitalizing a 1999 unit with contemporary finishes, smart storage, and refreshed M&E systems.' },
  { id: 'balik-pulau-bungalow', name: 'Balik Pulau Bungalow', category: 'residential', location: 'Balik Pulau, Penang', type: 'Landed Double Storey Bungalow', condition: 'Extended landed property', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', description: "An expansive bungalow renovation celebrating Penang's natural surroundings with refined, resort-inspired interiors." },
  { id: 'pine-residence', name: 'Pine Residence', category: 'residential', location: 'Jln Bkt Kukus, Taman Terubong Indah, Penang', type: 'Condominium', condition: '2015 year condominium', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', description: 'Tailored condominium design maximizing floor area with bespoke built-ins and a cohesive material palette.' },
  { id: 'queens-waterfront-2', name: 'Queens Waterfront 2', category: 'residential', location: 'Persiaran Bayan Indah, Penang', type: 'Condominium', condition: '2022 year condominium', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', description: 'Premium waterfront condo fit-out featuring panoramic views, luxury finishes, and integrated smart home elements.' },
  { id: 'shorefront-residences', name: 'Shorefront Residences', category: 'residential', location: 'Farquhar Road, Penang', type: 'Condominium', condition: '2018 year condominium', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80', description: 'Coastal-inspired interior with 3D visualization-to-reality precision, delivering a serene urban retreat.' },
  { id: 'copen-grand', name: 'Copen Grand', category: 'residential', location: 'Tengah Garden Walk, Lim Chu Kang, Singapore', type: 'Executive Condominium', condition: '99-year leasehold', image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', description: "Cross-border residential project showcasing Hx2's capability in delivering high-spec EC interiors in Singapore." },
  { id: 'zen-6', name: 'Zen 6', category: 'residential', location: 'Persiaran Bayan Mutiara, Bayan Lepas, Penang', type: 'Condominium', condition: '2023 year condominium', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd66?w=800&q=80', description: 'Minimalist zen-inspired condo design with clean lines, natural textures, and 3D-to-built accuracy.' },
  { id: '20db-hearing-perai', name: '20dB Hearing — Perai', category: 'commercial', location: 'Pusat Bandar Seberang Jaya, Perai, Penang', type: 'Shoplot', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', description: 'Healthcare retail fit-out from bare shell, designed for patient comfort and brand clarity.' },
  { id: '20db-hearing-alor-setar', name: '20dB Hearing — Alor Setar', category: 'commercial', location: 'Jln Tunku Abdul Rahman Putra, Alor Setar', type: 'Shoplot', condition: 'Refurbish', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', description: 'Refurbishment of an existing hearing care outlet with updated branding and improved customer flow.' },
  { id: 'wurth-electronic', name: 'Würth Electronic', category: 'commercial', location: 'Lorong Bayan Indah 2, Bay Avenue, Penang', type: 'Commercial Building', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80', description: 'Corporate office fit-out for a global electronics brand, balancing functionality with professional aesthetics.' },
  { id: 'wurth-auditorium', name: 'Würth Electronic — Auditorium & Lab', category: 'commercial', location: 'Lorong Bayan Indah 2, Bay Avenue, Penang', type: 'Commercial Building', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', description: 'Specialized auditorium and laboratory spaces with acoustic treatment and technical infrastructure.' },
  { id: 'face-story', name: 'Face Story', category: 'commercial', location: 'E-gate, Lebuh Tunku Kudin 2, Penang', type: 'Commercial Building', condition: 'Refurbish', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', description: 'Beauty and wellness space refurbishment with Instagram-worthy interiors and efficient treatment room layouts.' },
  { id: 'ferringhi-bay-2', name: 'Ferringhi Bay 2', category: 'commercial', location: 'Jln Batu Ferringhi, Batu Ferringhi, Penang', type: 'Container (Proposed Design)', condition: 'Land — proposed design', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', description: 'Innovative container-based hospitality concept with coastal design language and modular construction.' },
  { id: 'hair-artisanar', name: 'Hair Artisanar', category: 'commercial', location: 'Straits Garden, George Town, Penang', type: 'Shoplot', condition: 'Refurbish', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80', description: 'Salon refurbishment featuring premium finishes, optimized station layout, and elevated client experience.' },
  { id: 'hair-story-butterworth', name: 'Hair Story — Butterworth', category: 'commercial', location: 'Butterworth Business City Centre, Butterworth', type: 'Shoplot', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1521592839978-939aebb8c393?w=800&q=80', description: 'Brand-new salon fit-out from bare unit with custom reception, wash stations, and retail display.' },
  { id: 'hair-story-gurney', name: 'Hair Story — Gurney Walk', category: 'commercial', location: 'Gurney Walk, Persiaran Gurney, Penang', type: 'Boutique Retail Mall', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb124?w=800&q=80', description: 'High-traffic mall outlet designed for maximum brand visibility and operational efficiency.' },
  { id: 'hair-story-prima', name: 'Hair Story — Prima Tanjung', category: 'commercial', location: 'Prima Tanjung, Penang', type: 'Shoplot', condition: 'Refurbish', image: 'https://images.unsplash.com/photo-1631730486572-558f1c47a0a0?w=800&q=80', description: 'Salon refresh with updated colour palette, lighting design, and improved workflow for stylists.' },
  { id: 'hair-story-puchong', name: 'Hair Story — Bandar Puteri', category: 'commercial', location: 'Jalan Puteri 2/6, Bandar Puteri, Puchong, Selangor', type: 'Shoplot', condition: 'Refurbish', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80', description: 'Salon refresh maintaining brand consistency across the Hair Story network.' },
  { id: 'beauty-lot', name: 'Beauty Lot International', category: 'commercial', location: 'Residence Park 2, Persiaran Jalil 5, Bukit Jalil', type: 'Shoplot', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', description: 'International beauty retail outlet with treatment rooms, product display, and welcoming reception area.' },
  { id: 'pickleball-factory', name: 'Pickleball Factory', category: 'commercial', location: 'Subang Jaya Industrial Estate, Subang Jaya, Selangor', type: 'Factory Warehouse', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', description: 'Industrial-to-sports facility conversion with court flooring, lighting systems, and spectator areas.' },
  { id: 'smith-associates', name: 'Smith & Associates Malaysia', category: 'commercial', location: 'Jalan Seri Tanjung Pinang, Tanjung Tokong, Penang', type: 'Straits Quay Office Block', condition: 'Bare unit', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', description: 'Prestigious Straits Quay office fit-out with executive meeting rooms and refined corporate interiors.' },
];

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '7+', label: 'Years of Expertise' },
  { value: '4', label: 'Core Services' },
  { value: '100%', label: 'Turnkey Solutions' },
];

export const services = [
  { id: 'design', title: 'Interior Design & Consultancy', description: 'Conceptualization, 3D visualization, and space planning tailored to your lifestyle or brand identity.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', icon: 'Palette' },
  { id: 'renovation', title: 'Renovation & Construction', description: 'Structural works, tiling, plumbing, and electrical installations executed to the highest standards.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', icon: 'Hammer' },
  { id: 'carpentry', title: 'Custom Carpentry', description: 'In-house fabrication of bespoke furniture, cabinetry, and built-in solutions for any space.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d4046?w=800&q=80', icon: 'Ruler' },
  { id: 'management', title: 'Project Management', description: 'Turnkey solutions from site supervision to final handover — on time, on budget, stress-free.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', icon: 'ClipboardCheck' },
];

export const processSteps = [
  { step: '01', title: 'Initial Consultation', description: 'We meet on-site to understand your needs, assess the space, and discuss budget parameters.' },
  { step: '02', title: 'Concept & Space Planning', description: 'Layout options, mood boards, and material palettes refined until the direction is exactly right.' },
  { step: '03', title: '3D Visualization & Quotation', description: 'Detailed 3D renders and transparent, itemized quotations before construction begins.' },
  { step: '04', title: 'Construction & Renovation', description: 'Our build team mobilizes with regular progress updates keeping you in the loop.' },
  { step: '05', title: 'Custom Carpentry & Installation', description: 'In-house workshop fabrication and precision fitting of bespoke cabinetry and built-ins.' },
  { step: '06', title: 'Final Handover & Aftercare', description: 'Thorough defect inspection, snag resolution, and ongoing support after handover.' },
];
