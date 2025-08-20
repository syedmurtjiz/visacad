"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from 'lucide-react';

const GetInTouch = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your visa journey? Our expert team is here to guide you through every step of the process.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone Support</h4>
                    <p className="text-gray-400 mb-2">Available Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    <Link 
                      href="tel:+1-800-VISA-CAD" 
                      className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                    >
                      +1 (800) VISA-CAD
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-500/20">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Support</h4>
                    <p className="text-gray-400 mb-2">Response within 24 hours guaranteed</p>
                    <Link 
                      href="mailto:info@visacad.com" 
                      className="text-teal-400 hover:text-teal-300 font-semibold transition-colors"
                    >
                      info@visacad.com
                    </Link>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office Locations</h4>
                    <p className="text-gray-400 mb-2">Visit us for in-person consultations</p>
                    <div className="space-y-1">
                      <p className="text-purple-400 font-medium">RawalPindi, ON • Karachi, BC • Lahore, QC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-gray-300" />
                <h4 className="font-semibold text-white">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-semibold text-white">Send us a Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Visa Type
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                    <option value="" className="bg-gray-800">Select visa type</option>
                    <option value="visitor" className="bg-gray-800">Visitor Visa</option>
                    <option value="student" className="bg-gray-800">Student Visa</option>
                    <option value="work" className="bg-gray-800">Work Permit</option>
                    <option value="family" className="bg-gray-800">Family Sponsorship</option>
                    <option value="express" className="bg-gray-800">Express Entry</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your visa requirements and any specific questions you have..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>

                <p className="text-sm text-gray-400 text-center">
                  * Required fields. We&apos;ll respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

// Professional grid pattern styles (keeping original)
const styles = `
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
`;

// Add styles to the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}