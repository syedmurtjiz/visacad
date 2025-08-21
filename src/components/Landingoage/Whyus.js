import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiAward } from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements - optimized for mobile */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 md:opacity-10"></div>
      <div className="absolute top-1/4 -right-10 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-emerald-500/10 md:bg-emerald-500/20 rounded-full mix-blend-soft-light filter blur-2xl md:blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-96 h-96 md:w-[800px] md:h-[800px] bg-purple-500/10 md:bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-2xl md:blur-3xl animate-pulse"></div>

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
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-400/20 backdrop-blur-sm mb-6 md:mb-8"
          >
            <span className="text-emerald-400 font-medium text-xs md:text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full"></span>
              Why Choose Us
            </span>
          </motion.div>

          {/* Main Heading - Responsive typography */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 px-2"
          >
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Your Trusted Partner
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-0 md:bottom-1 left-0 h-1 md:h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
              ></motion.div>
            </span>
          </motion.h2>
          
          {/* Description - Responsive */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-base md:text-lg lg:text-xl max-w-4xl mx-auto px-2"
          >
            At Fly Next, we're redefining the potential for worldwide exploration. 
            We cordially welcome you to start a life-changing adventure with us. 
            Let's explore our mission and vision, which reflect our steadfast commitment 
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
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 bg-emerald-500/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-10 h-10 md:w-20 md:h-20 bg-teal-500/10 rounded-full animate-float-delayed"></div>
            
            {/* Card backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl md:rounded-3xl transform rotate-0.5 group-hover:rotate-1 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-emerald-500/10"></div>
            
            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl transform group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-all duration-500 border border-white/10 group-hover:border-emerald-400/30">
              {/* Header with icon */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                <motion.div 
                  className="p-3 md:p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl md:rounded-2xl shadow-lg border border-emerald-400/20 self-start"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiZap className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Our Mission</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
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
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 bg-purple-200/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-10 h-10 md:w-20 md:h-20 bg-green-200/20 rounded-full animate-float-delayed"></div>
            
            {/* Card backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-green-400/20 rounded-2xl md:rounded-3xl transform -rotate-0.5 group-hover:-rotate-1 transition-transform duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl transform group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-all duration-500 border border-white/10 group-hover:border-purple-400/30">
              {/* Header with icon */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                <motion.div 
                  className="p-3 md:p-4 bg-gradient-to-br from-purple-500/10 to-green-500/10 rounded-xl md:rounded-2xl shadow-lg border border-purple-400/20 self-start"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiAward className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Our Vision</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
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
          background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @media (min-width: 768px) {
          .bg-grid-pattern {
            background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @media (min-width: 768px) {
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(1deg); }
            66% { transform: translateY(10px) rotate(-1deg); }
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
        }
        
        @media (min-width: 768px) {
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.02); }
          }
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

export default WhyChooseUs;