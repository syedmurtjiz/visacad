'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const CountryGrid = () => {
  const router = useRouter();

  const handleCountryClick = (countryName) => {
    // Convert to lowercase and replace spaces with hyphens
    let slug = countryName.toLowerCase().replace(/\s+/g, '-');
    
    // Handle special cases to match the countryDetails keys
    if (countryName === 'United States' || countryName === 'America') {
      slug = 'united-states';
    } else if (countryName === 'United Kingdom') {
      slug = 'united-kingdom';
    } else if (countryName === 'New Zealand') {
      slug = 'new-zealand';
    }
    
    router.push(`/countries/${slug}`);
  };

  const countries = [
    {
      name: 'Canada',
      image: '/canada.jpg',
      flag: '/canada.jpg',
      alt: 'Toronto skyline with CN Tower',
    },
    {
      name: 'Australia', 
      image: '/australia.jpg',
      flag: '/australia.jpg',
      alt: 'Sydney Opera House and Harbour Bridge',
    },
    {
      name: 'America',
      image: '/america.jpg', 
      flag: '/america.jpg',
      alt: 'Statue of Liberty',
    },
    {
      name: 'United Kingdom',
      image: '/uk.jpg',
      flag: '/uk.jpg', 
      alt: 'Big Ben and Houses of Parliament',
    },
    {
      name: 'New Zealand',
      image: '/newzealand.jpg',
      flag: '/newzealand.jpg',
      alt: 'Auckland city skyline with Sky Tower',
        },
    {
      name: 'Germany',
      image: '/germany.jpg',
      flag: '/germany.jpg',
      alt: 'Brandenburg Gate in Berlin',
    },
    {
      name: 'China',
      image: '/china.jpg',
      flag: '/china.jpg',
      alt: 'Temple of Heaven in Beijing',
    },
    {
      name: 'Portugal',
      image: '/portugal.jpg',
      flag: '/portugal.jpg',
      alt: 'Pena Palace in Sintra',
    }
  ];

  const CountryCard = ({ country, index }) => {
    return (
      <motion.div 
        onClick={() => handleCountryClick(country.name)}
        className="group relative cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        style={{
          display: 'flex',
          marginBottom: '40px',
          borderRadius: '20px',
          background: '#ffffff',
          position: 'relative',
          zIndex: 1,
          transition: 'all 0.4s ease 0s',
          visibility: 'visible',
          animationName: 'fadeInUp'
        }}
      >
        {/* Main card */}
        <div className="relative flex flex-col w-full bg-white rounded-[20px] shadow-md border border-gray-200 group-hover:border-primary group-hover:shadow-lg transition-all duration-400 thumb">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden rounded-t-[20px]">
            <Image
              src={country.image}
              alt={country.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Flag overlay */}
            <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 group-hover:border-primary transition-all duration-400">
              <Image
                src={country.flag}
                alt={`${country.name} flag`}
                fill
                className="object-cover"
              />
            </div>

              {/* Popular badge */}
            {country.popular && (
              <div className="absolute top-3 left-3 bg-primary-bg-subtle px-3 py-1.5 rounded-lg shadow-sm border border-primary-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs font-medium text-primary">Popular</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Country Name */}
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors duration-400">
              {country.name}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="countries" 
      className="relative"
      style={{
        paddingTop: '130px',
        paddingBottom: '90px',
        backgroundColor: '#ffffff',
        fontFamily: '"Lato", sans-serif',
        fontSize: '18px',
        lineHeight: '34px',
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 0.7)',
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Lato',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2 bg-blue-100/50 rounded-full border border-blue-200 mb-6 sm:mb-8">
            <span className="text-blue-600 font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></span>
              Popular Destinations
            </span>
          </div>
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6"
          >
            Explore Your <br />
            Dream
            <span className="text-blue-600"> Destinations</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-secondary leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Discover the best countries for immigration, study abroad, and work opportunities. 
            Each destination offers unique advantages for your international journey.
          </motion.p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        :root {
          --bs-blue: #0d6efd;
          --bs-primary: #0d6efd;
          --bs-primary-rgb: 13, 110, 253;
          --bs-primary-text-emphasis: #052c65;
          --bs-primary-bg-subtle: #cfe2ff;
          --bs-primary-border-subtle: #9ec5fe;
          --bs-secondary: #6c757d;
          --bs-secondary-rgb: 108, 117, 125;
          --bs-secondary-text-emphasis: #2b2f32;
          --bs-secondary-bg-subtle: #e2e3e5;
          --bs-secondary-border-subtle: #c4c8cb;
          --bs-dark: #212529;
          --bs-dark-rgb: 33, 37, 41;
          --bs-white: #fff;
          --bs-gray-200: #e9ecef;
          --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .container {
          max-width: 1200px;
        }

        .rounded-[20px] {
          border-radius: 20px;
        }

        .rounded-t-[20px] {
          border-radius: 20px 20px 0 0;
        }



        .border-gray-200 {
          border-color: var(--bs-gray-200);
        }

        .border-primary {
          border-color: var(--bs-primary);
        }

        .bg-primary-bg-subtle {
          background-color: var(--bs-primary-bg-subtle);
        }

        .border-primary-border-subtle {
          border-color: var(--bs-primary-border-subtle);
        }

        .text-primary {
          color: var(--bs-primary);
        }

        .text-dark {
          color: var(--bs-dark);
        }

        .text-secondary {
          color: var(--bs-secondary);
        }

        .shadow-md {
          box-shadow: var(--bs-box-shadow);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .thumb::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          width: 100%;
          height: 0px;
          background-color: #C62828;
          z-index: 1;
          border-radius: 30px;
          -webkit-transition: all 0.4s ease 0s;
          -moz-transition: all 0.4s ease 0s;
          -ms-transition: all 0.4s ease 0s;
          -o-transition: all 0.4s ease 0s;
          transition: all 0.4s ease 0s;
        }

        .group:hover .thumb::before {
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default CountryGrid;