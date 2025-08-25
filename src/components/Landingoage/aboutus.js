"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="relative pt-[130px] pb-[90px] bg-[#E3F2FD] font-['Lato'] text-lg leading-[34px] font-normal text-[rgba(0,0,0,0.7)] z-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-2 bg-blue-100/50 rounded-full border border-blue-200"
          >
            <span className="text-blue-600 font-medium text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              About Us
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
          >
            Your Gateway to Global{" "}
            <span className="text-blue-600">
              Opportunities
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed text-lg lg:text-xl max-w-2xl"
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
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <button className="group relative px-6 py-3 overflow-hidden bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-gray-900/40 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                <span className="relative z-10 flex items-center gap-2">
                  Explore More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-[length:200%_100%] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 hover:bg-[length:200%_100%] hover:animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative">
            {/* Image backdrop */}
            <div className="absolute inset-0 bg-blue-100/30 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-all duration-300"></div>
            
            {/* Main image */}
            <div className="relative bg-white p-2 rounded-2xl shadow-lg border border-gray-200">
              <Image
                src="/aboutus.jpg"
                alt="Professional immigration consulting team in Rawalpindi"
                width={600}
                height={700}
                className="rounded-xl object-cover w-full h-auto"
              />
              
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 bg-blue-50/80 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700">Trusted Partners</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
}