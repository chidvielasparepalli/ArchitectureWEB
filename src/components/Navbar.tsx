import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'NL'>('EN');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Work with us', path: '/work-with-us' },
  ];

  return (
    <>
      {/* Skip Links for Accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:text-black focus:p-2">
        To main content
      </a>
      <a href="#footer" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:text-black focus:p-2">
        To the footer
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <span className="font-display text-sm md:text-base font-light tracking-[0.3em] uppercase text-white">
              Smeulders
            </span>
            <span className="font-display text-sm md:text-base font-light tracking-[0.3em] uppercase text-white/50 ml-1">
              IG
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white group ${
                    isActive ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-500 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-medium uppercase text-white/40 ml-6 pl-6 border-l border-white/10">
              <button
                onClick={() => setCurrentLang('EN')}
                className={`transition-colors duration-300 ${
                  currentLang === 'EN' ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                EN
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => setCurrentLang('NL')}
                className={`transition-colors duration-300 ${
                  currentLang === 'NL' ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                NL
              </button>
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-5 md:hidden">
            <button
              onClick={() => setCurrentLang(currentLang === 'EN' ? 'NL' : 'EN')}
              className="text-[10px] tracking-[0.2em] font-medium uppercase text-white/50 hover:text-white transition-colors"
            >
              {currentLang}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#0a0a0a] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-10">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-display font-light tracking-[0.2em] uppercase transition-all duration-500 ${
                    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${200 + index * 80}ms` : '0ms' }}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Language Toggle */}
            <div
              className={`flex items-center space-x-3 text-sm tracking-[0.2em] uppercase text-white/30 transition-all duration-500 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '600ms' : '0ms' }}
            >
              <button
                onClick={() => setCurrentLang('EN')}
                className={`transition-colors ${currentLang === 'EN' ? 'text-white' : ''}`}
              >
                EN
              </button>
              <span>/</span>
              <button
                onClick={() => setCurrentLang('NL')}
                className={`transition-colors ${currentLang === 'NL' ? 'text-white' : ''}`}
              >
                NL
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
