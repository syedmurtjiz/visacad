"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Award, Users, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Menu, X, Play, Clock, Shield, Zap } from 'lucide-react';
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
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '15000+', label: 'Successful Applications', icon: CheckCircle },
    { number: '95%', label: 'Approval Rate', icon: Award },
    { number: '50+', label: 'Countries Covered', icon: Globe },
    { number: '10+', label: 'Years Experience', icon: Users }
  ];

  const services = [
    {
      title: 'Student Visa',
      description: 'Complete guidance for study abroad dreams',
      features: ['University Selection', 'Document Preparation', 'Interview Training'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Work Visa',
      description: 'Professional immigration solutions',
      features: ['Job Matching', 'Skill Assessment', 'Work Permits'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Tourist Visa',
      description: 'Hassle-free travel documentation',
      features: ['Quick Processing', 'Travel Insurance', '24/7 Support'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const scholarships = [
    {
      title: 'Merit Scholarships',
      description: 'Based on academic excellence',
      amount: 'Up to $50,000',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Need-based Aid',
      description: 'Financial assistance programs',
      amount: 'Up to $30,000',
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Sports Scholarships',
      description: 'Athletic achievement rewards',
      amount: 'Up to $40,000',
      color: 'from-purple-500 to-pink-600'
    }
  ];

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