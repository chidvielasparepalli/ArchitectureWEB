import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const imageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const totalSlides = projects.length;

  // Auto-rotate images within current slide
  useEffect(() => {
    if (isTransitioning) return;

    imageTimerRef.current = setTimeout(() => {
      const project = projects[currentSlide];
      if (project.carouselImages.length > 1) {
        setCurrentImageIndex((prev) =>
          prev < project.carouselImages.length - 1 ? prev + 1 : 0
        );
      }
    }, 4000);

    return () => {
      if (imageTimerRef.current) clearTimeout(imageTimerRef.current);
    };
  }, [currentSlide, currentImageIndex, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentImageIndex(0);

      if (timerRef.current) clearTimeout(timerRef.current);
      if (imageTimerRef.current) clearTimeout(imageTimerRef.current);

      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 600);
    },
    [currentSlide, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1);
  }, [currentSlide, totalSlides, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  // Custom cursor tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const project = projects[currentSlide];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] cursor-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      >
        <div className="cursor-ring" />
        <div className="cursor-dot" />
      </div>
      {/* ========== SLIDES ========== */}
      {projects.map((proj, slideIndex) => (
        <div
          key={proj.id}
          className={`hero-slide ${slideIndex === currentSlide && !isTransitioning ? 'active' : ''}`}
        >
          {/* Crossfading images within each slide */}
          {proj.carouselImages.map((imgSrc, imgIndex) => (
            <div
              key={imgSrc}
              className={`slide-image ${slideIndex === currentSlide && imgIndex === currentImageIndex ? 'active' : ''}`}
            >
              <img
                src={imgSrc}
                alt={`Project image: ${proj.name}`}
                className="w-full h-full object-cover ken-burns"
                style={{
                  animationDelay: `${imgIndex * 0.5}s`,
                  animationDuration: '8s',
                }}
              />
            </div>
          ))}

          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-[1]" />
        </div>
      ))}

      {/* ========== PROJECT TITLE (Bottom-Left Knockout Text) ========== */}
      <div className="absolute inset-0 z-[10] pointer-events-none">
        <div className="absolute bottom-[10%] left-[10%] right-[10%] md:right-auto md:max-w-[65%]">
          <div
            key={`title-${currentSlide}`}
            className="title-reveal"
          >
            <h2
              className="knockout-text font-display font-bold tracking-tight leading-[0.9]"
              style={{
                backgroundImage: `url(${project.carouselImages[currentImageIndex] || project.heroImage})`,
              }}
            >
              {project.name}
            </h2>
          </div>
        </div>
      </div>

      {/* ========== BOTTOM INFO BAR ========== */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-6 md:pb-8 w-full">
          {/* CTA + Navigation Row */}
          <div
            key={`nav-${currentSlide}`}
            className="flex items-center justify-between title-reveal"
            style={{ animationDelay: '0.15s' }}
          >
            {/* Left: Read more link */}
            <Link
              to={`/projects/${project.slug}`}
              className="group flex items-center space-x-3 pointer-events-auto"
            >
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-500">
                Read more about this project
              </span>
              <ArrowRight
                size={16}
                className="text-white/50 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-500"
              />
            </Link>

            {/* Right: Slide arrows + counter */}
            <div className="flex items-center space-x-6 pointer-events-auto">
              {/* Slide counter */}
              <span className="text-[11px] font-light tracking-[0.15em] text-white/40">
                {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </span>

              {/* Arrow buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-white hover:text-white transition-all duration-400"
                  aria-label="Previous project"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-white hover:text-white transition-all duration-400"
                  aria-label="Next project"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== PROGRESS BAR (Bottom) ========== */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] h-[2px] bg-white/10">
        <div
          key={`progress-${currentSlide}`}
          className="h-full bg-white/70 slide-progress"
          style={{
            width: '0%',
            animation: `progressFill 4s linear forwards`,
          }}
        />
      </div>

      {/* ========== SIDE NAVIGATION DOTS ========== */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-[10] hidden md:flex flex-col space-y-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? 'w-[2px] h-8 bg-white'
                : 'w-[2px] h-3 bg-white/25 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Inline keyframes for progress bar */}
      <style>{`
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default Home;
