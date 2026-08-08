import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenFAQ: () => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onToggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFAQ,
  onOpenContact,
  onOpenAbout,
  onToggleMobileMenu,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Scrolled state for dark background
      if (currentY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentY > lastY && currentY > 60) {
        setIsVisible(false);
      } else if (currentY < lastY) {
        setIsVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 py-4 sm:py-5 flex items-center justify-between select-none">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Luxivo Home"
        >
          <div className="w-[30px] h-[30px] flex items-center justify-center text-white transition-transform group-hover:rotate-45 duration-500">
            {/* Turbo spiral SVG icon */}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white fill-current"
            >
              <path
                d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c5.523 0 10 4.477 10 10 0 2.45-.88 4.693-2.348 6.435l-3.328-3.328A5.966 5.966 0 0 0 21 16c0-2.761-2.239-5-5-5s-5 2.239-5 5a4.99 4.99 0 0 0 2.1 4.053l-3.048 3.048A8.956 8.956 0 0 1 7 16c0-4.97 4.03-9 9-9z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-2xl sm:text-[27px] font-medium text-white tracking-tight leading-none font-sans lowercase">
            Luxivo
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 sm:gap-14">
          <div className="hidden md:flex items-center gap-10 sm:gap-12 text-sm sm:text-[15px] font-normal tracking-wide text-neutral-200">
            <button
              onClick={onOpenFAQ}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              FAQ
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Contact
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              About us
            </button>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            onClick={onToggleMobileMenu}
            className="flex flex-col justify-center items-end gap-[5px] w-7 h-7 cursor-pointer focus:outline-none group"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-[2px] bg-white rounded-full transition-all group-hover:w-7"></span>
            <span className="w-4 h-[2px] bg-white rounded-full transition-all group-hover:w-7"></span>
            <span className="w-6 h-[2px] bg-white rounded-full transition-all group-hover:w-7"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
