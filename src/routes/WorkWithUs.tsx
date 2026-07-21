import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin } from 'lucide-react';

interface JobOpening {
  title: string;
  location: string;
  type: string;
  responsibilities: string[];
  emailSubject: string;
}

const openings: JobOpening[] = [
  {
    title: 'Senior Interior Architect',
    location: 'Amsterdam, NL',
    type: 'Full-time',
    responsibilities: [
      'Lead design planning for large-scale office & hospitality projects.',
      'Specify sustainable, circular material schemes in line with studio guidelines.',
      'Coordinate technical drawings, joinery detailing, and manufacturing hand-off.'
    ],
    emailSubject: 'Application: Senior Interior Architect'
  },
  {
    title: 'Sustainability & Circularity Consultant',
    location: 'Amsterdam, NL (Hybrid)',
    type: 'Full-time / Part-time',
    responsibilities: [
      'Conduct complete LCA (Life Cycle Assessments) on materials and spatial assemblies.',
      'Advise project teams on circular design frameworks and environmental certifications.',
      'Audit suppliers and expand our sustainable material library.'
    ],
    emailSubject: 'Application: Sustainability Consultant'
  },
  {
    title: 'Bespoke Furniture & Joinery Designer',
    location: 'Amsterdam, NL',
    type: 'Full-time',
    responsibilities: [
      'Design modular, dry-joint partitions and architectural furniture products.',
      'Build mockups and structural prototypes using digital fabrication files.',
      'Collaborate directly with wood workshops and metal fabricators.'
    ],
    emailSubject: 'Application: Bespoke Furniture Designer'
  },
  {
    title: 'Junior Technical Drafter',
    location: 'Amsterdam, NL',
    type: 'Full-time',
    responsibilities: [
      'Translate conceptual design sketches into detailed layout blueprint sets.',
      'Manage documentation, space schedules, and detail catalogues.',
      'Support project managers during construction supervision phases.'
    ],
    emailSubject: 'Application: Junior Technical Drafter'
  }
];

export function WorkWithUs() {
  const revealHeader = useScrollReveal(0.05);
  const revealCulture = useScrollReveal(0.1);
  const revealOpenings = useScrollReveal(0.1);

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
          label="CAREERS"
          title="Collaborate on Spaces that Shape Behavior"
          subtitle="Join a team of designers, detailers, and material researchers dedicated to creating beautiful, circular, and functional human environments."
        />
      </section>

      {/* Culture Section */}
      <section
        ref={revealCulture.elementRef as React.RefObject<HTMLElement>}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20 reveal-hidden ${
          revealCulture.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 h-[350px] md:h-[500px] bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1000&q=80"
              alt="Bright design workshop desk"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-light text-white/90 leading-tight">
              A Culture Grounded in Research & Respect
            </h3>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              We reject the industry model of sleepless design nights and high-burnout client delivery. Smeulders Interieurgroep operates on a structured 36-hour weekly baseline, prioritizing mental clarity, ongoing spatial research, and collaborative problem-solving.
            </p>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              Every Friday, we host &ldquo;Studio Materials Lab&rdquo; sessions where the entire office — regardless of seniority — examines newly manufactured bio-polymers, local timbers, or acoustic structures. We believe the best ideas are nurtured in a culture of active curiosity.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <h5 className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-1">Weekly Baseline</h5>
                <p className="text-xs text-white/40 font-light">36 Hours (Flexible Schedules)</p>
              </div>
              <div>
                <h5 className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-1">Materials Research</h5>
                <p className="text-xs text-white/40 font-light">Weekly Friday Lab Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section
        ref={revealOpenings.elementRef as React.RefObject<HTMLElement>}
        className={`bg-[#111] border-t border-white/5 py-24 md:py-32 reveal-hidden ${
          revealOpenings.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="VACANCIES"
            title="Open Opportunities"
            subtitle="Explore our active openings. If you feel aligned with our minimalist, sustainable philosophy, we would love to see your spatial portfolio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white/[0.02] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center space-x-3 text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase mb-4">
                    <span className="flex items-center"><MapPin size={10} className="mr-1" /> {job.location}</span>
                    <span>&middot;</span>
                    <span>{job.type}</span>
                  </div>

                  <h4 className="font-display text-xl font-light text-white mb-6">
                    {job.title}
                  </h4>

                  <h5 className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-3">
                    Core Responsibilities
                  </h5>

                  <ul className="space-y-3 mb-8 text-xs font-light text-white/50 list-disc pl-4">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Button
                    variant="outline"
                    to={`mailto:careers@smeulders-ig.nl?subject=${encodeURIComponent(job.emailSubject)}`}
                    className="w-full text-center"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default WorkWithUs;
