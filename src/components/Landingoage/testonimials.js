'use client';

import { useState, useEffect } from 'react';
import { Star, User, GraduationCap, Award, Globe, Briefcase, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    icon: GraduationCap,
    rating: 5,
    text: 'The expertise and personalized guidance I received transformed my study abroad journey. Every step was handled with precision and care, making what seemed impossible, achievable.',
    name: 'Sarah Johnson',
    position: 'Master\'s Hamilton',
    country: 'Canada',
    program: 'Study Abroad',
    avatar: 'SJ'
  },
  {
    icon: Globe,
    rating: 5,
    text: 'Exceptional service that exceeded all expectations. The team\'s deep knowledge of immigration law and attention to detail made our family\'s relocation seamless.',
    name: 'Liam Smith',
    position: 'Software Engineer',
    country: 'Australia',
    program: 'Immigration',
    avatar: 'LS'
  },
  {
    icon: Award,
    rating: 5,
    text: 'Outstanding professionalism and results. My visa was approved faster than expected, and the support throughout the process was remarkable.',
    name: 'Ayesha Khan',
    position: 'Research Scientist',
    country: 'Pakistan',
    program: 'Visa Processing',
    avatar: 'AK'
  },
  {
    icon: Trophy,
    rating: 5,
    text: 'Incredible guidance that led to a fully funded scholarship. Their strategic approach and insider knowledge made all the difference in achieving my academic goals.',
    name: 'David Brown',
    position: 'PhD Candidate',
    country: 'United Kingdom',
    program: 'Scholarship',
    avatar: 'DB'
  },
  {
    icon: Briefcase,
    rating: 5,
    text: 'Professional excellence at its finest. They handled complex documentation with ease and kept me informed every step of the way.',
    name: 'Maria Lopez',
    position: 'Marketing Director',
    country: 'Spain',
    program: 'Work Visa',
    avatar: 'ML'
  },
  {
    icon: User,
    rating: 5,
    text: 'World-class consultancy with unmatched expertise. Their personalized approach and strategic insights delivered results beyond my expectations.',
    name: 'Ahmed Ali',
    position: 'Business Owner',
    country: 'United Arab Emirates',
    program: 'Business Visa',
    avatar: 'AA'
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  const IconComponent = testimonial.icon;
  
  return (
    <div className={`relative transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
      <div className="group relative h-full bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200 hover:border-blue-200 transition-all duration-300">
        {/* Quote decoration */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-blue-200 group-hover:text-blue-400 transition-colors duration-300">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
        </div>
        
        <div className="relative z-10">
          {/* Client Info */}
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-blue-100/50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base lg:text-lg shadow-sm">
                {testimonial.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="ml-3 sm:ml-4 flex-1">
              <h4 className="text-base sm:text-lg font-bold text-gray-800">{testimonial.name}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.position}</p>
              <p className="text-xs sm:text-sm text-blue-600 font-medium">{testimonial.country}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  i < testimonial.rating 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-500 font-medium">5.0 out of 5</span>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium italic">
            &ldquo;{testimonial.text}&rdquo;
          </blockquote>

          {/* Program Badge */}
          <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100/50 text-blue-600 text-xs sm:text-sm font-medium rounded-full border border-blue-200">
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                {testimonial.program}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    // For mobile, show only current testimonial
    // For tablet, show current + next
    // For desktop, show prev + current + next
    
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      visible.push({
        testimonial: testimonials[currentIndex],
        index: currentIndex,
        isActive: true
      });
    }
    else if (typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1280) {
      for (let i = 0; i <= 1; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visible.push({
          testimonial: testimonials[index],
          index,
          isActive: i === 0
        });
      }
    }
    else {
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + testimonials.length) % testimonials.length;
        visible.push({
          testimonial: testimonials[index],
          index,
          isActive: i === 0
        });
      }
    }
    return visible;
  };

  return (
    <section id="testimonials" className="relative pt-[130px] pb-[90px] bg-[#E3F2FD] font-['Lato'] text-lg leading-[34px] font-normal text-[rgba(0,0,0,0.7)] z-10"
>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2 bg-blue-100/50 rounded-full border border-blue-200 mb-6 sm:mb-8">
            <span className="text-blue-600 font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></span>
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            What Our <br />
            Success Stories
            <span className="text-blue-600">
              Says
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-2">
            Discover how we&apos;ve transformed dreams into reality for thousands of clients worldwide. 
            Their journeys inspire us to deliver excellence in every consultation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 py-6 sm:py-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
          <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md text-center border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">1,200+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Success Stories</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md text-center border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200 group-hover:scale-110 transition-transform duration-300">
              <User className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">5,000+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Happy Clients</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md text-center border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">75+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Countries</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md text-center border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">98%</h3>
            <p className="text-gray-600 text-sm sm:text-base">Success Rate</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile, shown on tablet+ */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 shadow-md rounded-full items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>
          
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 shadow-md rounded-full items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Testimonials Display */}
          <div className="overflow-hidden px-2 sm:px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
              {getVisibleTestimonials().map(({ testimonial, index, isActive }) => (
                <div key={index} className={`transition-all duration-500 ${isActive ? 'xl:scale-105 xl:-translate-y-4' : 'xl:scale-95'}`}>
                  <TestimonialCard testimonial={testimonial} isActive={isActive} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center mt-6 space-x-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-white border border-gray-200 shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white border border-gray-200 shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125 shadow-md shadow-blue-200'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
}