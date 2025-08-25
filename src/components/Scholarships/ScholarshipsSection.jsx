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
    image: './image4.jpg',
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
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-200 hover:border-blue-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link href={service.href} className="block h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          {/* Image backdrop */}
          <div className="absolute inset-2 bg-blue-100/30 rounded-xl transform rotate-2 group-hover:rotate-3 transition-all duration-300"></div>

          {/* Main image */}
          <div className="relative bg-white p-2 rounded-xl m-1 group-hover:-translate-y-1 transition-all duration-300 h-full border border-gray-200">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg object-cover w-full h-full"
            />

            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-blue-50/80 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-blue-700">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg flex-grow">
            {service.shortDescription}
          </p>

          {/* CTA Button */}
          <div className="mt-auto pt-4">
            <button className="group relative px-6 py-3 overflow-hidden bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-gray-900/40 transition-all duration-300 flex items-center cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                {service.buttonText}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full bg-[length:200%_100%] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 hover:bg-[length:200%_100%] hover:animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white font-['Lato'] relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-2 bg-blue-100/50 rounded-full border border-blue-200 mb-6"
          >
            <span className="text-blue-600 font-medium text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Our Services
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Comprehensive <br />
          Immigration
            <span className="text-blue-600">
               Solutions
            </span>
          </h2>

           <br />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto"
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
        .container {
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;