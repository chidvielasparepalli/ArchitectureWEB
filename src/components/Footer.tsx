import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0a0a0a] text-white pt-24 pb-8 mt-auto border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-lg font-light tracking-[0.3em] uppercase text-white">
                C-C Developers
              </span>
              <span className="font-display text-lg font-light tracking-[0.3em] uppercase text-white/40 ml-1">
                Designings
              </span>
            </Link>
            <p className="text-sm text-white/40 font-light max-w-sm leading-relaxed mt-4">
              Crafting premium workspace environments and interior architectures that inspire connection, clarity, and focus.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Projects', path: '/projects' },
                { name: 'About', path: '/about' },
                { name: 'Sustainability', path: '/sustainability' },
                { name: 'Work with us', path: '/work-with-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/50 font-light">
              <p>Frontent Developers</p>
              <p>3D stunning Websites</p>
              <p className="pt-2">
                <a href="mailto:chidvielasparepalli@gmail.com" className="hover:text-white transition-colors duration-300">
                  chidvielasparepalli@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+91 9010862353" className="hover:text-white transition-colors duration-300">
                  +91 9010862353
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-5 mt-6">
              {['Instagram', 'LinkedIn', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href={''}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/20 font-light tracking-wider">
          <p>&copy; {currentYear} Smeulders Interieurgroep. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
