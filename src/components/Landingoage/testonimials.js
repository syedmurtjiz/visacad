'use client';

import { useState, useEffect } from 'react';
import { Star, User, GraduationCap, Award, Globe, Briefcase, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    icon: GraduationCap,
    rating: 5,
    text: 'The expertise and personalized guidance I received transformed my study abroad journey. Every step was handled with precision and care, making what seemed impossible, achievable.',
    name: 'Sarah Johnson',
    position: 'Master\'s Student',
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
    <div className={`relative transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
      <div className="group relative h-full bg-gray-800/60 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:bg-gray-800/80">
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Quote decoration */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
        </div>
        
        <div className="relative z-10">
          {/* Client Info */}
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold text-sm sm:text-base lg:text-lg shadow-lg">
                {testimonial.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full border-2 border-gray-800 flex items-center justify-center shadow-lg">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="ml-3 sm:ml-4 flex-1">
              <h4 className="text-base sm:text-lg font-bold text-white">{testimonial.name}</h4>
              <p className="text-xs sm:text-sm text-gray-400">{testimonial.position}</p>
              <p className="text-xs sm:text-sm text-emerald-400 font-medium">{testimonial.country}</p>
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
                    : 'text-gray-600'
                }`}
              />
            ))}
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-400 font-medium">5.0 out of 5</span>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium italic">
            &ldquo;{testimonial.text}&rdquo;
          </blockquote>

          {/* Program Badge */}
          <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700/50 text-emerald-400 text-xs sm:text-sm font-medium rounded-full border border-emerald-500/20">
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                {testimonial.program}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-t-2 border-r-2 border-emerald-500/30 rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-2xl sm:rounded-tr-3xl transition-all duration-300 group-hover:border-emerald-500/70"></div>
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
    
    // Always show only current testimonial on mobile (< 768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      visible.push({
        testimonial: testimonials[currentIndex],
        index: currentIndex,
        isActive: true
      });
    }
    // For tablet (768px - 1279px), show current + next
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
    // For desktop (1280px+), show prev + current + next
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
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[1200px] sm:h-[1200px] bg-gradient-radial from-transparent via-transparent to-gray-800/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-400/20 backdrop-blur-sm mb-6 sm:mb-8">
            <span className="text-emerald-400 font-medium text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full"></span>
              Client Testimonials
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 px-2">
            What Our{" "}
            <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Success Stories
            </span>{" "}
            <span className="relative">
              Say
              <div className="absolute bottom-0.5 sm:bottom-1 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-2">
            Discover how we&apos;ve transformed dreams into reality for thousands of clients worldwide. 
            Their journeys inspire us to deliver excellence in every consultation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 py-6 sm:py-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
          <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">1,200+</h3>
            <p className="text-gray-300 text-sm sm:text-base">Success Stories</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <User className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">5,000+</h3>
            <p className="text-gray-300 text-sm sm:text-base">Happy Clients</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">75+</h3>
            <p className="text-gray-300 text-sm sm:text-base">Countries</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">98%</h3>
            <p className="text-gray-300 text-sm sm:text-base">Success Rate</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile, shown on tablet+ */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>
          
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Testimonials Display */}
          <div className="overflow-hidden px-2 sm:px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
              {getVisibleTestimonials().map(({ testimonial, index, isActive }) => (
                <div key={index} className={`transition-all duration-700 ${isActive ? 'xl:scale-105 xl:-translate-y-4' : 'xl:scale-95'}`}>
                  <TestimonialCard testimonial={testimonial} isActive={isActive} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center mt-6 space-x-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
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
                    ? 'bg-emerald-500 scale-125 shadow-lg shadow-emerald-500/30'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
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
      `}</style>
    </section>
  );
}