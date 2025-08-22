'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CountryGrid = () => {
  const router = useRouter();

  const handleCountryClick = (countryName) => {
    const slug = countryName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/countries/${slug}`);
  };

  const countries = [
    {
      name: 'Canada',
      image: '/canada.jpg',
      flag: '/canada.jpg',
      alt: 'Toronto skyline with CN Tower',
      popular: true
    },
    {
      name: 'Australia', 
      image: '/australia.jpg',
      flag: '/australia.jpg',
      alt: 'Sydney Opera House and Harbour Bridge',
      popular: true
    },
    {
      name: 'America',
      image: '/america.jpg', 
      flag: '/america.jpg',
      alt: 'Statue of Liberty',
      popular: true
    },
    {
      name: 'United Kingdom',
      image: '/uk.jpg',
      flag: '/uk.jpg', 
      alt: 'Big Ben and Houses of Parliament',
      popular: false
    },
    {
      name: 'New Zealand',
      image: '/newzealand.jpg',
      flag: '/newzealand.jpg',
      alt: 'Auckland city skyline with Sky Tower',
      popular: false
    },
    {
      name: 'Germany',
      image: '/germany.jpg',
      flag: '/germany.jpg',
      alt: 'Eiffel Tower in Paris',
      popular: false
    },
    {
      name: 'China',
      image: '/china.jpg',
      flag: '/china.jpg',
      alt: 'Temple of Heaven in Beijing',
      popular: false
    },
    {
      name: 'Portugal',
      image: '/portugal.jpg',
      flag: '/portugal.jpg',
      alt: 'Pena Palace in Sintra',
      popular: false
    }
  ];

  const CountryCard = ({ country }) => {
    return (
      <div 
        onClick={() => handleCountryClick(country.name)}
        className="group relative cursor-pointer"
      >
        
        {/* Main card */}
        <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-emerald-500/20">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src={country.image}
              alt={country.alt}
              fill
              className="object-cover"
            />
            
            {/* Flag overlay - enhanced */}
            <div className="absolute bottom-3 right-3 w-14 h-14 rounded-full overflow-hidden border-4 border-white/20 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:border-emerald-400/50">
              <Image
                src={country.flag}
                alt={`${country.name} flag`}
                fill
                className="object-cover"
              />
            </div>

            {/* Popular badge - matching About Us overlay style */}
            {country.popular && (
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-xs font-medium text-amber-300">Popular</span>
                </div>
              </div>
            )}

            {/* Gradient overlay for better text readability */}
          </div>
          
          {/* Country Name */}
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-white">
              {country.name}
            </h3>
          </div>

          {/* Available badge - matching About Us */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-xs font-medium text-black">Available</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="countries" className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements - matching About Us */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-transparent via-transparent to-gray-800/50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section - matching About Us style */}
        <div className="text-center mb-16">
          {/* Section Badge - matching About Us */}
          <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-400/20 backdrop-blur-sm mb-8">
            <span className="text-emerald-400 font-medium text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Popular Destinations
            </span>
          </div>

          {/* Main Heading - matching About Us style */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Explore Your{" "}
            <br />
            <span className="mr-2">Dream</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          
          {/* Description - matching About Us style */}
          <p className="text-gray-300 leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto">
            Discover the best countries for immigration, study abroad, and work opportunities. 
            Each destination offers unique advantages for your international journey.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} index={index} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
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
};

export default CountryGrid;