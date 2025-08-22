'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
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
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-16 pb-8 border-t border-slate-800/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950/80 to-slate-950"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(16,185,129,0.2) 0%, transparent 50%)',
      }}></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
        backgroundSize: '24px 24px',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)'
      }}></div>
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-40 -bottom-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
        >
          {/* Brand Section */}
          <motion.div 
            className="space-y-5"
            variants={itemVariants}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-50 h-16"
            />
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner for visa and scholarship applications worldwide, helping you navigate the complexities of international education and immigration.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: FaFacebook, url: 'https://facebook.com', color: 'hover:text-blue-500' },
                { icon: FaTwitter, url: 'https://twitter.com', color: 'hover:text-cyan-400' },
                { icon: FaInstagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
                { icon: FaLinkedin, url: 'https://linkedin.com', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-slate-400 text-xl ${social.color} transition-colors duration-300`}
                  whileHover={{ y: -3 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
            </h3>
            <ul className="space-y-3">
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
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-slate-400 text-sm">Email</h4>
                  <a href="mailto:support@Fly Next.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors">
                    support@Fly Next.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-slate-400 text-sm">Phone</h4>
                  <a href="tel:+11234567890" className="text-white hover:text-emerald-400 transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-slate-400 text-sm">Address</h4>
                  <p className="text-white">123 Global Ave, Suite 100<br />World City, WC 10001</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
            </h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent text-white placeholder-slate-500 transition-all"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-slate-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Visa Cad. All rights reserved.
            <span className="mx-2">•</span>
            <Link href="/privacy" target="_self" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link href="/terms" target="_self" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Visa Cad is not affiliated with any government agency. We provide consulting services for visa and scholarship applications.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;