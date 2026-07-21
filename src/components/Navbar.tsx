import { useEffect, useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '../config';

const navItems = [
  { href: '#about', text: 'אודות' },
  { href: '#services', text: 'למי זה מתאים' },
  { href: '#contact', text: 'יצירת קשר' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center shrink-0">
          <img src="/assets/images/logo.png" alt="קשב פלוס" className="object-contain w-28" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium px-4 py-2 rounded-full text-gray-700 hover:text-green-800 hover:bg-green-50 transition-colors duration-200"
            >
              {item.text}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden lg:flex items-center gap-2 text-green-700 font-semibold"
          >
            <img src="/assets/images/greenphone.svg" alt="" className="h-5 w-auto" />
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-800 transition-colors duration-200"
          >
            קבעו פגישת ייעוץ
          </a>

          <button
            className="md:hidden text-gray-700 h-10 w-10 flex items-center justify-center"
            aria-label="תפריט"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className="text-2xl leading-none">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 text-base font-medium py-2.5"
            >
              {item.text}
            </a>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-green-700 text-base font-semibold py-2.5"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </nav>
  );
}
