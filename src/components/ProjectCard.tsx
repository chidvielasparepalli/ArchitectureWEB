import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block overflow-hidden ${className}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-white/5">
        <img
          src={project.heroImage}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] tracking-[0.15em] text-white/30 uppercase block">
            {project.category} &middot; {project.location}
          </span>
          <h3 className="mt-1.5 font-display text-lg md:text-xl font-light leading-snug text-white group-hover:text-white/80 transition-colors duration-500">
            {project.name}
          </h3>
        </div>
        <div className="mt-2 text-white/20 transform -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
}
export default ProjectCard;
