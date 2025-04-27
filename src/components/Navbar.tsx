
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-montserrat text-brand-dark">
          Precious<span className="text-brand-teal">Obo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium text-sm hover:text-brand-teal transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-gray-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-brand-teal hover:bg-brand-dark text-white transition-colors">
            Book a Call
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-brand-teal focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={toggleMenu}
                className="text-gray-800 font-medium text-sm hover:text-brand-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-brand-teal hover:bg-brand-dark text-white transition-colors w-full">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
