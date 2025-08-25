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
    <div className="min-h-screen bg-[#E3F2FD] text-white  relative overflow-hidden">
      {/* Background elements */}
      <AboutUs />  
      <WhyChooseUs />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Team Section */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center px-5 py-2 bg-blue-100/50 rounded-full border border-blue-200 mb-6">
              <span className="text-blue-600 font-medium text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Our Team
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet <span className="text-blue-600">Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Our team of dedicated professionals is here to guide you through every step of your international education journey.
            </p>
            
            <TeamCarousel 
              members={teamMembers} 
              title=""
              titleColor="#1e40af"
              background="transparent"
              cardWidth={300}
              cardHeight={420}
              cardRadius={16}
              infoPosition="bottom"
              infoTextColor="#000000"
              infoBackground="#1e40af"
              showArrows={true}
              showDots={true}
              grayscaleEffect={false}
              sideCardOpacity={0.8}
              sideCardScale={0.9}
              className="mt-8"
              cardClassName="bg-black shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
