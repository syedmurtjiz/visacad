'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="relative py-12 sm:py-16 bg-[linear-gradient(190deg,white_0%,#f9fbff_30%,#E3F2FD_70%,#bbdefb_100%)] border-t border-gray-200 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
        >
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <Image
              src="/flynext.png"
              alt="Visa Cad Logo"
              width={100}
              height={100}
              className="w-40"
            />
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Your trusted partner for visa and scholarship applications worldwide, offering expert guidance to navigate the complexities of international education and immigration.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: FaFacebook, url: 'https://facebook.com', color: 'hover:text-blue-600' },
                { icon: FaTwitter, url: 'https://twitter.com', color: 'hover:text-blue-500' },
                { icon: FaInstagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
                { icon: FaLinkedin, url: 'https://linkedin.com', color: 'hover:text-blue-700' }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-gray-500 text-lg ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { text: 'Home', href: '#', target: '_self' },
                { text: 'About', href: '#', onClick: () => scrollToSection('about'), target: '_self' },
                { text: 'Services', href: '#', onClick: () => scrollToSection('services'), target: '_self' },
                { text: 'Testimonials', href: '#', onClick: () => scrollToSection('testimonials'), target: '_self' },
                { text: 'Countries', href: '#', onClick: () => scrollToSection('countries'), target: '_self' },
                { text: 'Contact', href: '#', onClick: () => scrollToSection('contact'), target: '_self' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    target={item.target || '_self'}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : ''}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-600 text-sm font-medium">Email</h4>
                  <a href="mailto:support@FlyNext.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    support@FlyNext.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-600 text-sm font-medium">Phone</h4>
                  <a href="tel:+11234567890" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    +1 (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-600 text-sm font-medium">Address</h4>
                  <p className="text-gray-800">123 Global Ave, Suite 100<br />World City, WC 10001</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-600"></span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Subscribe to our newsletter for the latest updates and exclusive offers on visa and scholarship opportunities.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-black px-5 py-2.5 rounded-lg text-base font-medium hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 shadow-md cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-6 border-t border-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Visa Cad. All rights reserved.
            <span className="mx-2">•</span>
            <Link href="/privacy" target="_self" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link href="/terms" target="_self" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Terms of Service
            </Link>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Visa Cad is not affiliated with any government agency. We provide professional consulting services for visa and scholarship applications.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;