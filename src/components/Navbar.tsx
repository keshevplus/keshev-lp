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
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md bg-white/95 backdrop-blur-lg' : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto max-w-5xl px-4 flex items-center justify-between h-20">
        <a href="#" className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="קשב פלוס"
            className={`object-contain w-32 transition-opacity duration-700 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-semibold px-4 py-2 rounded-lg text-green-800 hover:text-white hover:bg-green-600 transition-colors duration-200"
            >
              {item.text}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:flex items-center gap-2 text-green-600 font-bold"
          >
            <img src="/assets/images/greenphone.svg" alt="" className="h-6" />
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>

          <button
            className="md:hidden text-green-800 h-10 w-10 flex items-center justify-center"
            aria-label="תפריט"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-green-800/95 px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-semibold py-2"
            >
              {item.text}
            </a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="text-white text-lg font-semibold py-2">
            התקשרו: {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </nav>
  );
}
