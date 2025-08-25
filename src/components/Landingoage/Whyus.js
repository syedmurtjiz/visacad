import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiAward } from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section - Responsive */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-2 bg-blue-100/50 rounded-full border border-blue-200 mb-6"
          >
            <span className="text-blue-600 font-medium text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Why Choose Us
            </span>
          </motion.div>

          {/* Main Heading - Responsive typography */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 md:mb-6"
          >
            Your Trusted <span className="text-blue-600">Partner</span>
          </motion.h2>
          
          {/* Description - Responsive */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed text-lg lg:text-xl max-w-2xl mx-auto"
          >
            At Fly Next, we&apos;re redefining the potential for worldwide exploration. 
            We cordially welcome you to start a life-changing adventure with us. 
            Let&apos;s explore our mission and vision, which reflect our steadfast commitment 
            to providing the best immigration and study consulting services possible.
          </motion.p>
        </motion.div>

        {/* Mission and Vision Cards - Responsive Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            {/* Decorative background shapes - Mobile optimized */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 bg-blue-100/30 rounded-full"></div>
            
            {/* Card backdrop */}
            <div className="absolute inset-0 bg-blue-100/30 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-all duration-300"></div>
            
            {/* Main card */}
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-all duration-300 border border-gray-200 group-hover:border-blue-300">
              {/* Header with icon */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                <motion.div 
                  className="p-3 md:p-4 bg-blue-100/50 rounded-xl md:rounded-2xl shadow-lg border border-blue-200 self-start"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiZap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                We are global journey architects, not just immigration and visa experts. As the top visa consultants in Rawalpindi & Islamabad and the best immigration consultant in Pakistan, our goal is to reach the ultimate level of perfection. We specialize in offering specialized solutions for individuals, whether they are highly trained professionals, businesses, or aspirational students.
              </p>

              {/* Overlay badge - Mobile optimized */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-blue-100/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-lg md:rounded-xl shadow-lg">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-blue-800">Mission</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            {/* Decorative background shapes - Mobile optimized */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 bg-blue-100/30 rounded-full"></div>
            
            {/* Card backdrop */}
            <div className="absolute inset-0 bg-blue-100/30 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-all duration-300"></div>
            
            {/* Main card */}
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-all duration-300 border border-gray-200 group-hover:border-blue-300">
              {/* Header with icon */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                <motion.div 
                  className="p-3 md:p-4 bg-blue-100/50 rounded-xl md:rounded-2xl shadow-lg border border-blue-200 self-start"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiAward className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                At Fly Next, our mission is to be the unchallenged leader in immigration and study consulting, defining the bar for quality and innovation. We hope to be known for having paved the way for future advancements in international mobility. With an emphasis on individualized services and expertise, we see a future where people can seamlessly fulfill their aspirations of working, studying, or relocating overseas.
              </p>

              {/* Overlay badge - Mobile optimized */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-green-100/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-lg md:rounded-xl shadow-lg">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-green-800">Vision</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @media (min-width: 768px) {
          .bg-grid-pattern {
            background-image: radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;