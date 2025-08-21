"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      // If we're on the home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      // If we're not on the home page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', onClick: () => scrollToSection('about') },
    { label: 'Services', onClick: () => scrollToSection('services') },
    { label: 'Testimonials', onClick: () => scrollToSection('testimonials') },
    { label: 'Countries', onClick: () => scrollToSection('countries') },    { label: 'Contact', onClick: () => scrollToSection('contact') },

  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <GraduationCap className="h-9 w-9 text-emerald-400 transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Fly Next</span>
          </Link>

          {/* Desktop and Tablet Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href || '#'}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className="relative text-slate-300 hover:text-white px-4 py-3 text-base font-medium transition-colors group cursor-pointer"
                prefetch={false}
              >
                {item.label}
                <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
              </Link>
            ))}
            <Link
              href="/apply"
              className="ml-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg text-base font-medium hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              prefetch={false}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white p-2 focus:outline-none rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-5 space-y-2 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href || '#'}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    router.push(item.href);
                  }
                  setIsMenuOpen(false);
                }}
                className="block px-5 py-3.5 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
              <div className="px-4 pt-3">
                <Link
                  href="/apply"
                  className="block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3.5 rounded-lg text-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/20"
                  onClick={() => setIsMenuOpen(false)}
                  prefetch={false}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}