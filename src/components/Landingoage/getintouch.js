"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    visaType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const data = await response.json();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        visaType: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      formData.message.trim() &&
      Object.keys(errors).length === 0
    );
  };

  return (
    <section id="contact" className="relative pt-[130px] pb-[90px] bg-[#E3F2FD] font-['Lato'] text-lg leading-[34px] font-normal text-[rgba(0,0,0,0.7)] z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-5 py-2 bg-blue-100/50 rounded-full border border-blue-200 mb-6">
              <span className="text-blue-600 font-medium text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Contact Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              We're here to help you navigate your journey. Reach out to us for personalized support and expert guidance.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200 group-hover:bg-blue-200/50 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone Support</h4>
                    <p className="text-gray-600 mb-2">Available Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    <Link
                      href="tel:+1-800-VISA-CAD"
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                    >
                      +1 (800) VISA-CAD
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200 group-hover:bg-blue-200/50 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Support</h4>
                    <p className="text-gray-600 mb-2">Response within 24 hours guaranteed</p>
                    <Link
                      href="mailto:info@FlyNext.com"
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                    >
                      info@FlyNext.com
                    </Link>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200 group-hover:bg-blue-200/50 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Office Locations</h4>
                    <p className="text-gray-600 mb-2">Visit us for in-person consultations</p>
                    <div className="space-y-1">
                      <p className="text-blue-600 font-medium">Rawalpindi, ON • Karachi, BC • Lahore, QC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-800">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
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
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-800">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Visa Type
                  </label>
                  <select 
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select visa type</option>
                    <option value="visitor">Visitor Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="work">Work Permit</option>
                    <option value="family">Family Sponsorship</option>
                    <option value="express">Express Entry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-gray-50 border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
                      placeholder="Tell us about your visa requirements and any specific questions you have..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <motion.div 
                  className="relative w-full"
                  whileHover={isFormValid() && !isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={isFormValid() && !isSubmitting ? { scale: 0.98 } : {}}
                >
                  <button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className={`w-full px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
                      isFormValid() && !isSubmitting
                        ? 'text-black cursor-pointer'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isFormValid() && !isSubmitting ? (
                      <>
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 hover:animate-gradient-shift opacity-100"></span>
                      </>
                    ) : (
                      <span className="flex items-center gap-2">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    )}
                  </button>
                  {isFormValid() && !isSubmitting && (
                    <div className="absolute inset-0 rounded-lg shadow-2xl shadow-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  )}
                </motion.div>
                
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.success 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      {submitStatus.success ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
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

export default GetInTouch;