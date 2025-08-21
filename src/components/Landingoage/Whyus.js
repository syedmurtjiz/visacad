import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              Why Choose Us
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
                Your Trusted Partner
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-1 left-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
              ></motion.div>
            </span>
          </motion.h2>
          
          {/* Description - matching About Us style */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Here at Fly Next, we&apos;re redefining the potential for worldwide exploration. 
            We cordially welcome you to start a life-changing adventure with us. 
            Let&apos;s now explore our goal and vision, which reflect our steadfast commitment 
            to providing the best immigration and study consulting services possible.
          </motion.p>
        </motion.div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Decorative background shapes */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-teal-500/10 rounded-full animate-float-delayed"></div>
            
            {/* Card backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/20"></div>
            
            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500 border border-white/10 group-hover:border-emerald-400/30">
              {/* Header with icon */}
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl mr-4 shadow-lg border border-emerald-400/20"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">Learn more</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                We are global trip architects, not just immigration and visa experts. As the top visa consultants in Rawalpindi & Islamabad and the best immigration consultant in Pakistan, our goal is to reach the ultimate level of perfection. We specialize in offering specialized solutions for individuals, whether they are highly trained professionals, businesses, or aspirational students. Our commitment to unleashing a world of opportunity is our foundation. Our goal is to exceed our client&apos;s expectations by providing a smooth and trustworthy experience from the beginning to the completion of their worldwide objectives, in addition to ensuring their pleasure.
              </p>

              {/* Overlay badge - matching About Us */}
              <div className="absolute top-6 right-6 bg-blue-100/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-blue-800">Mission</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Decorative background shapes - matching About Us */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-purple-200 rounded-full opacity-40 animate-float-delayed"></div>
            
            {/* Card backdrop - matching About Us style */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-purple-500 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500 border border-white/10 group-hover:border-emerald-400/30">
              {/* Header with icon */}
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mr-4 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                At Fly Next, our mission is to be the unchallenged leader in immigration and study consulting, defining the bar for quality and creativity. In addition to being acknowledged as the best immigration consultants in Pakistan, we hope to be known for having paved the way for future advancements in international mobility. With an emphasis on individualized services and knowledge, we see a future in which people may easily fulfill their aspirations of working, studying, or relocating overseas with the help of our committed staff. Being the best visa consultants in Rawalpindi & Islamabad, we view ourselves as strategic collaborators who support worldwide travel and international job success.
              </p>

              {/* Overlay badge - matching About Us */}
              <div className="absolute top-6 right-6 bg-green-100/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-green-800">Vision</span>
                </div>
              </div>
            </div>
          </motion.div>
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

export default WhyChooseUs;