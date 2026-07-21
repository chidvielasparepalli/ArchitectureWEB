import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectSliderProps {
  projects: Project[];
}

export function ProjectSlider({ projects }: ProjectSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [projects]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.6 : clientWidth * 0.6;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="flex justify-end space-x-2 mb-8">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`flex items-center justify-center w-10 h-10 border border-white/15 text-white/50 transition-all duration-400 ${
            canScrollLeft ? 'hover:border-white hover:text-white' : 'opacity-20 cursor-not-allowed'
          }`}
          aria-label="Previous projects"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`flex items-center justify-center w-10 h-10 border border-white/15 text-white/50 transition-all duration-400 ${
            canScrollRight ? 'hover:border-white hover:text-white' : 'opacity-20 cursor-not-allowed'
          }`}
          aria-label="Next projects"
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar space-x-6 pb-4 scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-none w-[78vw] sm:w-[48vw] md:w-[45vw] lg:w-[32vw] snap-start group"
          >
            <Link to={`/projects/${project.slug}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5 mb-4">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 text-[9px] tracking-[0.15em] text-white/70 uppercase font-medium">
                  {project.category}
                </div>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.15em] text-white/30 uppercase block">
                  {project.location} &middot; {project.year}
                </span>
                <h3 className="mt-1 font-display text-xl font-light text-white group-hover:text-white/80 transition-colors duration-500">
                  {project.name}
                </h3>
                <span className="inline-block mt-3 text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 hover-underline pb-0.5">
                  Read more
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectSlider;
