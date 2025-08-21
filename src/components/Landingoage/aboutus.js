"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-transparent via-transparent to-gray-800/50"></div>
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-400/20 backdrop-blur-sm"
          >
            <span className="text-emerald-400 font-medium text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              About Us
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            Your Gateway to{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Global Opportunities
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

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-lg lg:text-xl max-w-2xl"
          >
            Embark on a transformative journey with our expert guidance. We specialize in turning international 
            education and career aspirations into reality through personalized visa solutions, 
            university admissions, and comprehensive immigration support. Let us help you navigate 
            the path to your global future with confidence and ease.
          </motion.p>



          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden border border-emerald-400/20 hover:border-emerald-300/30">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Journey
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
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Decorative background shapes */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-teal-500/10 rounded-full animate-float-delayed"></div>
          
          {/* Main image container */}
          <div className="relative group">
            {/* Image backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/20"></div>
            
            {/* Main image */}
            <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500 border border-white/10 group-hover:border-emerald-400/30">
              <Image
                src="/aboutus.jpg" 
                alt="Professional immigration consulting team in Rawalpindi"
                width={600}
                height={700}
                className="rounded-2xl object-cover w-full h-auto"
              />
              
              {/* Overlay badge */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white/90">Trusted Partners</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
}