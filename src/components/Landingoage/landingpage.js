"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Award, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LightRaysEffect from '../Hero/LightRays';
import ScholarshipsSection from '../Scholarships/ScholarshipsSection';
import TestimonialsSection from './testonimials';
import CountryGrid from './CountryCard';
import Whyus from './Whyus';
import AboutUs from './aboutus';
import GetInTouchSection from './getintouch';
const LandingPage = () => {
  const router = useRouter();
  
  const handleViewAllServices = () => {
    router.push('/services');
  };
    // Testimonial state and auto-rotation removed as it's handled in TestimonialsSection

  // Moved stats, services, and scholarships to their respective components

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      text: 'Got my student visa approved in just 3 weeks! The team was incredibly supportive throughout.',
      rating: 5,
      image: '🎓'
    },
    {
      name: 'Ahmed Hassan',
      country: 'Canada',
      text: 'Received a $25,000 scholarship through their guidance. Life-changing experience!',
      rating: 5,
      image: '🏆'
    },
    {
      name: 'Maria Garcia',
      country: 'Australia',
      text: 'Professional service and transparent process. Highly recommended for visa applications.',
      rating: 5,
      image: '✈️'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">

    <LightRaysEffect />
    <AboutUs />
    <ScholarshipsSection />
    <Whyus />
    <TestimonialsSection />
    <CountryGrid />
    <GetInTouchSection />
    </div>
  );
};

export default LandingPage;