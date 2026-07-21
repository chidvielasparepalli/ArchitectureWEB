import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Minimize, User } from 'lucide-react';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  const revealHero = useScrollReveal(0.05);
  const revealContent = useScrollReveal(0.1);
  const revealGallery = useScrollReveal(0.1);
  const revealNav = useScrollReveal(0.1);

  if (!project) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-36 text-center">
        <h2 className="font-display text-3xl font-light mb-6">Project Not Found</h2>
        <p className="text-white/40 mb-8 max-w-md mx-auto font-light">
          The project you are looking for does not exist or has been relocated.
        </p>
        <Button variant="primary" to="/projects">
          Back to Projects
        </Button>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="overflow-hidden">
      {/* Project Hero */}
      <section
        ref={revealHero.elementRef as React.RefObject<HTMLDivElement>}
        className="relative h-[70vh] md:h-[85vh] flex items-end bg-[#111]"
      >
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24 text-white">
          <Link
            to="/projects"
            className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft size={12} className="mr-2" /> Back to projects
          </Link>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase block mb-3">
            {project.category}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-none mb-6">
            {project.name}
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-white/60 font-light leading-relaxed">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Main Content & Key Facts */}
      <section
        ref={revealContent.elementRef as React.RefObject<HTMLDivElement>}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28 reveal-hidden ${
          revealContent.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-light text-white/90 mb-6">
              The Spatial Concept
            </h2>
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
              In developing {project.name}, Smeulders Interieurgroep focused on reducing visual noise while enhancing functional density. Every custom cabinetry detail, shadow gap, and material transition was planned in coordination with structural acoustics.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10 sticky top-32">
              <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-8 border-b border-white/10 pb-4">
                Key Facts
              </h3>

              <ul className="space-y-6 text-xs md:text-sm font-light">
                <li className="flex items-start justify-between py-1 border-b border-white/5">
                  <span className="text-white/30 flex items-center"><MapPin size={14} className="mr-2 text-white/50" /> Location</span>
                  <span className="font-medium text-right text-white/80">{project.location}</span>
                </li>
                <li className="flex items-start justify-between py-1 border-b border-white/5">
                  <span className="text-white/30 flex items-center"><User size={14} className="mr-2 text-white/50" /> Client</span>
                  <span className="font-medium text-right text-white/80">{project.keyFacts.client}</span>
                </li>
                <li className="flex items-start justify-between py-1 border-b border-white/5">
                  <span className="text-white/30 flex items-center"><Calendar size={14} className="mr-2 text-white/50" /> Year</span>
                  <span className="font-medium text-right text-white/80">{project.year}</span>
                </li>
                <li className="flex items-start justify-between py-1 border-b border-white/5">
                  <span className="text-white/30 flex items-center"><Minimize size={14} className="mr-2 text-white/50" /> Area</span>
                  <span className="font-medium text-right text-white/80">{project.keyFacts.area}</span>
                </li>
                <li className="flex flex-col pt-3">
                  <span className="text-white/30 mb-3">Services</span>
                  <div className="flex flex-wrap gap-2">
                    {project.keyFacts.services.map((service) => (
                      <span
                        key={service}
                        className="bg-white/5 text-white/60 text-[10px] tracking-[0.15em] uppercase font-medium px-3 py-1.5"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        ref={revealGallery.elementRef as React.RefObject<HTMLDivElement>}
        className={`bg-[#111] border-t border-white/5 py-20 md:py-28 reveal-hidden ${
          revealGallery.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase block mb-12 text-center">
            PROJECT GALLERY
          </span>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-3 aspect-[4/3] bg-white/5 overflow-hidden">
              <img
                src={project.galleryImages[0]}
                alt={`${project.name} interior detail 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-3 aspect-[4/3] bg-white/5 overflow-hidden">
              <img
                src={project.galleryImages[1]}
                alt={`${project.name} interior detail 2`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-6 aspect-[16/9] bg-white/5 overflow-hidden">
              <img
                src={project.heroImage}
                alt={`${project.name} wide interior angle`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nav Links */}
      <section
        ref={revealNav.elementRef as React.RefObject<HTMLDivElement>}
        className={`border-t border-white/5 py-16 reveal-hidden ${
          revealNav.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between items-center">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start text-left max-w-[45%]"
            >
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 flex items-center mb-1">
                <ArrowLeft size={10} className="mr-1.5 transform group-hover:-translate-x-1 transition-transform" /> Previous
              </span>
              <span className="font-display text-sm md:text-lg font-light text-white group-hover:text-white/70 transition-colors hover-underline pb-0.5">
                {prevProject.name}
              </span>
            </Link>
          ) : (
            <div className="w-10 h-10" />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end text-right max-w-[45%]"
            >
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 flex items-center mb-1">
                Next <ArrowRight size={10} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-display text-sm md:text-lg font-light text-white group-hover:text-white/70 transition-colors hover-underline pb-0.5">
                {nextProject.name}
              </span>
            </Link>
          ) : (
            <div className="w-10 h-10" />
          )}
        </div>
      </section>
    </div>
  );
}
export default ProjectDetail;
