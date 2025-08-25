'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined' && pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      router.push(`/#${sectionId}`);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', onClick: () => scrollToSection('about') },
    { label: 'Services', onClick: () => scrollToSection('services') },
    { label: 'Testimonials', onClick: () => scrollToSection('testimonials') },
    { label: 'Countries', onClick: () => scrollToSection('countries') },
    { label: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  return (
    <nav className="bg-[linear-gradient(120deg,white_0%,#f8fbff_40%,#E3F2FD_100%)] border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Visa Cad Logo"
              width={100}
              height={100}
              className="w-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) =>
              item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className="relative text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors group cursor-pointer"
                  prefetch={false}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]"></span>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="relative text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]"></span>
                </button>
              )
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/apply"
                className="ml-4 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-black px-5 py-2.5 rounded-lg text-base font-medium hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 shadow-md cursor-pointer"
                prefetch={false}
              >
                Apply Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 p-2 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-3 pt-3 pb-5 space-y-2 bg-white border-t border-gray-200">
              {navItems.map((item, index) =>
                item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}
              <motion.div
                className="px-4 pt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/apply"
                  className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-all shadow-md cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                  prefetch={false}
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}