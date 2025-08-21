"use client";

import React from 'react';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import AboutUs from '@/components/Landingoage/aboutus';
import WhyChooseUs from '@/components/Landingoage/Whyus';
const TeamCarousel = dynamic(
  () => import('@/components/TeamCarousel/TeamCarousel.tsx'),
  { ssr: false }
);

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in international education, John founded Fly Next to help students achieve their global education dreams.',
    image: '/aboutus.jpg'
  },
  {
    id: 2,
    name: 'Sarah',
    role: 'Head of Admissions',
    bio: 'Sarah specializes in university admissions and has helped hundreds of students secure spots in top universities worldwide.',
    image: '/girl2.jpg'
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
    image: '/girl1.jpg'
  },
  {
    id: 5,
    name: 'David',
    role: 'Test Preparation Expert',
    bio: 'David specializes in IELTS, TOEFL, and GRE preparation, helping students achieve their target scores for university admissions.',
    image: '/boi2.jpg'
  },
  {
    id: 6,
    name: 'Ahmed',
    role: 'Student Support Manager',
    bio: 'Ahmed provides ongoing support to our students, ensuring they have all the assistance they need throughout their academic journey.',
    image: '/boi1.jpg'
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className={styles.backgroundGrid}></div>
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      <AboutUs />  
      <WhyChooseUs />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          
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
