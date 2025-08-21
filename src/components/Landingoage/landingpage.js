"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import LightRaysEffect from '../Hero/LightRays';
import ScholarshipsSection from '../Scholarships/ScholarshipsSection';
import TestimonialsSection from './testonimials';
import CountryGrid from './CountryCard';
import AboutUs from './aboutus';
import GetInTouchSection from './getintouch';

const LandingPage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <LightRaysEffect />
      <AboutUs />
      <ScholarshipsSection />
      <TestimonialsSection />
      <CountryGrid />
      <GetInTouchSection />
    </div>
  );
};

export default LandingPage;