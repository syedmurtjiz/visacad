import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Add keyframes for gradient animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;
  document.head.appendChild(style);
  return (
    <section className="relative w-full min-h-screen flex font-[Lato] items-center justify-center overflow-hidden">
      {/* Background Video with Professional Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/airplane.mp4"
        />
        {/* Professional dark overlay */}
      </div>

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Global Immigration{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500
 bg-clip-text text-transparent">
                Excellence
              </span>

            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Expert visa consultation and scholarship guidance with a proven track record.
            <span className="font-medium "> 15,000+ successful applications</span> across
            <span className="font-medium "> 95% approval rate</span> worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <button className="group relative px-8 py-4 overflow-hidden bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500
             text-black font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-gray-900/40 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center">
              <span className="relative z-10 flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 w-full h-full bg-[length:200%_100%] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 hover:bg-[length:200%_100%] hover:animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            <button className="px-8 py-4 border border-slate-600 text-slate-300 font-medium rounded-lg hover:bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 hover:border-none hover:text-black transition-all duration-300">
              View Success Stories
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle ambient lighting effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;