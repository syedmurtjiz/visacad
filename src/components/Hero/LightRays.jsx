import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Users, CheckCircle, Star, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/80"></div>
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
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
              ></motion.div>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Expert visa consultation and scholarship guidance with a proven track record. 
            <span className="text-white font-medium">15,000+ successful applications</span> across 
            <span className="text-white font-medium"> 95% approval rate</span> worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center">
              <span className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 border border-slate-600 text-slate-300 font-medium rounded-lg hover:bg-slate-800 hover:border-slate-500 hover:text-white transition-all duration-300">
              View Success Stories
            </button>
          </motion.div>


          {/* Services cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Fast-Track Processing</h3>
              <p className="text-slate-400 leading-relaxed">Expedited visa processing with priority handling and regular status updates throughout the application journey.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure & Confidential</h3>
              <p className="text-slate-400 leading-relaxed">Bank-level security protocols protect your sensitive documents and personal information at every step.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Expert Guidance</h3>
              <p className="text-slate-400 leading-relaxed">Dedicated immigration specialists provide personalized support from initial consultation to final approval.</p>
            </div>
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