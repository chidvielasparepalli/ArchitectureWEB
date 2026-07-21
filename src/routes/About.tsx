import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'C-C Developers',
    role: 'Founding Partner & Creative Director',
    bio: 'Pioneering earthy minimalism in corporate architectures with over 18 years of design practice.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    name: 'C-C Developers',
    role: 'Lead Architect',
    bio: 'Specialising in acoustic wood structures and organic material flows.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    name: 'C-C Developers',
    role: 'Head of Circular Design',
    bio: 'Passionate about structural LCA calculations and circular, zero-carbon furniture design.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    name: 'C-C Developers',
    role: 'Technical Detailing Specialist',
    bio: 'Bridging structural limits with high-end aesthetic joinery details.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80'
  }
];

export function About() {
  const revealHeader = useScrollReveal(0.05);
  const revealStory = useScrollReveal(0.1);
  const revealTeam = useScrollReveal(0.1);

  return (
    <div className="overflow-hidden">
      {/* Intro Header */}
      <section
        ref={revealHeader.elementRef as React.RefObject<HTMLElement>}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 pt-36 pb-12 reveal-hidden ${
          revealHeader.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <SectionHeading
          label="ABOUT THE STUDIO"
          title="We Craft Environments that Foster Purpose"
          subtitle="Smeulders Interieurgroep is an interior architecture and workspace solutions practice based in Amsterdam. We create minimalist, high-performance environments for corporate, education, and leisure sectors."
        />
      </section>

      {/* Story & Philosophy Section */}
      <section
        ref={revealStory.elementRef as React.RefObject<HTMLElement>}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20 reveal-hidden ${
          revealStory.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-light text-white/90 leading-tight">
              An Architectural Approach to Interior Atmospheres
            </h3>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              Founded in 2012, Smeulders Interieurgroep emerged from a simple observation: modern interior environments are often cluttered with temporary solutions that degrade human concentration and physical health. By treating interior layout with the strict precision of structural architecture, we focus on permanence, acoustic harmony, and material integrity.
            </p>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              We collaborate with forward-thinking organisations, developer groups, and public institutions to transform high-density floor plans into breathing spaces. Our designs respond to the unique culture of each partner, establishing custom spatial structures that grow with them.
            </p>
          </div>
          <div className="lg:col-span-5 h-[350px] md:h-[500px] bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Design studio team collaboration"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        ref={revealTeam.elementRef as React.RefObject<HTMLElement>}
        className={`bg-[#111] border-t border-white/5 py-24 md:py-32 reveal-hidden ${
          revealTeam.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="PEOPLE"
            title="The Thinkers & Builders"
            subtitle="Our multidisciplinary core team bridges conceptual architecture, technical layout engineering, material research, and sustainable project delivery."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className={`group flex flex-col transition-all duration-1000 ${
                  idx === 1 ? 'delay-100' : idx === 2 ? 'delay-200' : idx === 3 ? 'delay-300' : ''
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg font-light text-white">
                    {member.name}
                  </h4>
                  <span className="text-[10px] tracking-[0.15em] text-white/30 uppercase block mt-1 mb-3">
                    {member.role}
                  </span>
                  <p className="text-xs text-white/40 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
