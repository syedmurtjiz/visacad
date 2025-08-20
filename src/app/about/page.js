"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import styles from './page.module.css';
import dynamic from 'next/dynamic';

const TeamCarousel = dynamic(
  () => import('@/components/TeamCarousel/TeamCarousel.tsx'),
  { ssr: false }
);

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in international education, John founded VisaCad to help students achieve their global education dreams.',
    image: '/aboutus.jpg'
  },
  {
    id: 2,
    name: 'Sarah',
    role: 'Head of Admissions',
    bio: 'Sarah specializes in university admissions and has helped hundreds of students secure spots in top universities worldwide.',
    image: 'girl2.jpg'
  },
  {
    id: 3,
    name: 'Syed Murtjiz',
    role: 'Visa Specialist',
    bio: 'Murtjiz is an expert in visa processing and immigration laws, ensuring smooth visa applications for all our clients.',
    image: '/Untitled design.png'
  },
  {
    id: 4,
    name: 'Sadia Khan',
    role: 'Education Consultant',
    bio: 'Sadia helps students find the perfect academic programs and institutions that match their career goals and aspirations.',
    image: 'girl1.jpg'
  },
  {
    id: 5,
    name: 'David',
    role: 'Test Preparation Expert',
    bio: 'David specializes in IELTS, TOEFL, and GRE preparation, helping students achieve their target scores for university admissions.',
    image: 'boi2.jpg'
  },
  {
    id: 6,
    name: 'Ahmed',
    role: 'Student Support Manager',
    bio: 'Ahmed provides ongoing support to our students, ensuring they have all the assistance they need throughout their academic journey.',
    image: 'boi1.jpg'
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className={styles.backgroundGrid}></div>
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">VisaCad</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to VisaCad, your trusted partner in making international education and migration dreams a reality. 
                Based in Rawalpindi, Pakistan, we specialize in providing comprehensive immigration and study abroad 
                consultation services to students and professionals across the country.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of experienced consultants is dedicated to guiding you through every step of your journey, 
                from selecting the right institution to visa processing and beyond. We pride ourselves on our 
                personalized approach, ensuring that each client receives tailored advice and support.
              </p>
            </div>
            
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-500/20">
              <Image
                src="/aboutus.jpg"
                alt="About VisaCad"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower individuals with seamless international education and migration opportunities through 
                expert guidance, ethical practices, and personalized support, helping them achieve their global 
                aspirations.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the most trusted and preferred education and migration consultancy in Pakistan, recognized 
                for our commitment to excellence, integrity, and student success on a global scale.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Experienced and certified immigration consultants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Personalized guidance for each client</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>High success rate in visa approvals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Strong network of partner institutions worldwide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>End-to-end support throughout your journey</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Our Team</span>
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Our team of dedicated professionals is here to guide you through every step of your international education journey.
            </p>
            
            <TeamCarousel members={teamMembers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
