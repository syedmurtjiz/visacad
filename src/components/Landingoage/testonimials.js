'use client';

import { useState, useEffect } from 'react';
import { Star, User, GraduationCap, Award, Globe, Briefcase, Trophy, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
      <div className="group relative h-full bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:bg-gray-800/80">
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Quote decoration */}
        <div className="absolute top-4 right-4 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300">
          <Quote className="w-8 h-8" />
        </div>
        
        <div className="relative z-10">
          {/* Client Info */}
          <div className="flex items-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-lg">
                {testimonial.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-gray-800 flex items-center justify-center shadow-lg">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.position}</p>
              <p className="text-sm text-emerald-400 font-medium">{testimonial.country}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-600'
                }`}
              />
            ))}
            <span className="ml-3 text-sm text-gray-400 font-medium">5.0 out of 5</span>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-gray-300 text-base leading-relaxed mb-6 font-medium italic">
            "{testimonial.text}"
          </blockquote>

          {/* Program Badge */}
          <div className="mt-auto pt-6 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-4 py-2 bg-gray-700/50 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20">
                <IconComponent className="w-4 h-4 mr-2" />
                {testimonial.program}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative corner - matching your original style */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-emerald-500/30 rounded-bl-3xl rounded-tr-3xl transition-all duration-300 group-hover:border-emerald-500/70"></div>
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
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({
        testimonial: testimonials[index],
        index,
        isActive: i === 0
      });
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements - matching your original theme */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-transparent via-transparent to-gray-800/50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section - matching your About Us style */}
        <div className="text-center mb-16">
          {/* Section Badge - matching your style */}
          <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-400/20 backdrop-blur-sm mb-8">
            <span className="text-emerald-400 font-medium text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Client Testimonials
            </span>
          </div>

          {/* Main Heading - matching your style */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            What Our{" "}
            <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Success Stories
            </span>{" "}
            <span className="relative">
              Say
              <div className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            </span>
          </h2>
          
          {/* Description - matching your style */}
          <p className="text-gray-300 leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto">
            Discover how we've transformed dreams into reality for thousands of clients worldwide. 
            Their journeys inspire us to deliver excellence in every consultation.
          </p>
        </div>

        {/* Stats Section - matching your theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-16 max-w-5xl mx-auto">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">1,200+</h3>
            <p className="text-gray-300">Success Stories</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <User className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">5,000+</h3>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">75+</h3>
            <p className="text-gray-300">Countries</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">98%</h3>
            <p className="text-gray-300">Success Rate</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Testimonials Display */}
          <div className="overflow-hidden px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {getVisibleTestimonials().map(({ testimonial, index, isActive }, i) => (
                <div key={index} className={`transition-all duration-700 ${isActive ? 'md:scale-105 md:-translate-y-4' : 'md:scale-95'}`}>
                  <TestimonialCard testimonial={testimonial} isActive={isActive} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - matching your theme */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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