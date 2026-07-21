import { useEffect, useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '../config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-cream/90 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
        <a href="#" className="flex items-center shrink-0">
          <img src="/assets/images/logo.png" alt="קשב פלוס" className="object-contain w-24" />
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:flex items-center gap-2 font-semibold text-forest"
          >
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center bg-orange-400 text-forest text-sm sm:text-base font-bold px-5 py-2.5 rounded-full hover:bg-orange-300 transition-colors duration-200"
          >
            קבעו תור עכשיו
          </a>
        </div>
      </div>
    </nav>
  );
}
