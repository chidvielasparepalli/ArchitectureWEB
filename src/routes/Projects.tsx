import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

type CategoryFilter = 'All' | 'Office' | 'Hospitality' | 'Education' | 'Residential';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const revealHeader = useScrollReveal(0.05);
  const revealGrid = useScrollReveal(0.05);

  const categories: CategoryFilter[] = ['All', 'Office', 'Hospitality', 'Education', 'Residential'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-36 pb-24 md:pb-32">
      {/* Header */}
      <header
        ref={revealHeader.elementRef as React.RefObject<HTMLDivElement>}
        className={`reveal-hidden ${revealHeader.isRevealed ? 'reveal-visible' : ''}`}
      >
        <SectionHeading
          label="PORTFOLIO"
          title="Spaces Designed for Human Interaction"
          subtitle="Explore our projects categorised by segment. Every environment is crafted to elevate human interaction, functional effectiveness, and physical well-being."
        />
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 border-b border-white/10 pb-6 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase py-3 px-5 transition-all duration-400 ${
              activeFilter === category
                ? 'bg-white text-[#0a0a0a]'
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        ref={revealGrid.elementRef as React.RefObject<HTMLDivElement>}
        className={`reveal-hidden ${revealGrid.isRevealed ? 'reveal-visible' : ''}`}
      >
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-white/10 bg-white/[0.02]">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-semibold">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Projects;
