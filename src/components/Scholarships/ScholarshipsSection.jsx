'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const visaServices = [
  {
    id: 'skilled-immigration',
    title: 'Skilled Immigration',
    description: 'Permanent residency pathways for skilled professionals looking to immigrate to their dream destination. We help you navigate the complex immigration process with expert guidance.',
    shortDescription: 'Permanent residency pathways for skilled professionals',
    image: './skill.jpg',
    href: '/services/skilled-immigration',
    buttonText: 'Explore Immigration'
  },
  {
    id: 'visit-visa',
    title: 'Visit Visa',
    description: 'Expert assistance with tourist, business, and family visit visa applications worldwide. Our team ensures your application stands the best chance of approval.',
    shortDescription: 'Expert assistance with tourist, business, and family visit visas',
    image: './visa.jpg',
    href: '/services/visit-visa',
    buttonText: 'Apply for Visa'
  },
  {
    id: 'investment-immigration',
    title: 'Immigration by Investment',
    description: 'Citizenship and residency through investment programs in top destinations. We help you find the best investment opportunities for your immigration goals.',
    shortDescription: 'Citizenship and residency through investment programs',
    image: './investment.jpg',
    href: '/services/investment-immigration',
    buttonText: 'View Programs'
  },
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'Comprehensive support for international student admissions and student visas. From university selection to visa processing, we guide you every step of the way.',
    shortDescription: 'Comprehensive support for international student admissions',
    image: './abroad.jpg',
    href: '/services/study-abroad',
    buttonText: 'Find Programs'
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 flex flex-col h-full relative border border-white/10 hover:border-emerald-400/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <Link href={service.href} className="block h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-teal-500/10 rounded-full animate-float-delayed"></div>
          
          {/* Image backdrop */}
          <div className="absolute inset-2 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/20"></div>
          
          {/* Main image */}
          <div className="relative bg-white/5 backdrop-blur-sm p-2 rounded-2xl m-1 group-hover:-translate-y-1 transition-all duration-500 h-full border border-white/10 group-hover:border-emerald-400/30">
            <img 
              src={service.image} 
              alt={service.title}
              className="rounded-xl object-cover w-full h-full"
            />
            
            {/* Overlay badge - matching About Us */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-black">Available</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
          <h3 className="text-2xl font-bold text-white">
            {service.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed text-lg flex-grow">
            {service.shortDescription}
          </p>
          
          {/* CTA Button - matching About Us style */}
          <div className="mt-auto pt-4">
            <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden w-full border border-emerald-400/20 hover:border-emerald-300/30">
              <span className="relative z-10 flex items-center justify-center gap-3">
                {service.buttonText}
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-teal-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-transparent via-transparent to-gray-800/50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section - matching About Us style */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge - matching About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-400/20 backdrop-blur-sm mb-8"
          >
            <span className="text-emerald-400 font-medium text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Our Services
            </span>
          </motion.div>

          {/* Main Heading - matching About Us style */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-1 left-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
              ></motion.div>
            </span>{" "}
            Immigration Solutions
          </motion.h2>
          
          {/* Description - matching About Us style */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto"
          >
            From skilled immigration to study abroad programs, we provide expert guidance 
            for all your immigration and visa needs with personalized support every step of the way.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visaServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: -1s;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;