'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Country data with consistent slugs
const countryDetails = {
  'canada': {
    name: 'Canada',
    image: '/canada.jpg',
    description: 'Canada offers various visa and scholarship opportunities for international students and skilled workers.',
    scholarships: [
      { name: 'Vanier Canada Graduate Scholarships', amount: '$50,000 per year' },
      { name: 'Banting Postdoctoral Fellowships', amount: '$70,000 per year' }
    ],
    visaTypes: [
      'Study Permit',
      'Work Permit',
      'Express Entry',
      'Provincial Nominee Program (PNP)'
    ]
  },
  'australia': {
    name: 'Australia',
    image: '/australia.jpg',
    description: 'Australia provides excellent education and work opportunities with various visa options.',
    scholarships: [
      { name: 'Australia Awards', amount: 'Full tuition + living expenses' },
      { name: 'Endeavour Postgraduate Awards', amount: 'Up to $272,500' }
    ],
    visaTypes: [
      'Student Visa (Subclass 500)',
      'Temporary Graduate Visa (Subclass 485)',
      'Skilled Independent Visa (Subclass 189)'
    ]
  },
  'united-states': {
    name: 'United States',
    image: '/america.jpg',
    description: 'The United States offers world-class education and diverse work opportunities for international students and professionals.',
    scholarships: [
      { name: 'Fulbright Foreign Student Program', amount: 'Full tuition + living expenses' },
      { name: 'Hubert H. Humphrey Fellowship Program', amount: 'Full funding' }
    ],
    visaTypes: [
      'F-1 Student Visa',
      'J-1 Exchange Visitor',
      'H-1B Work Visa',
      'EB-3 Employment-Based Visa'
    ]
  },
  'united-kingdom': {
    name: 'United Kingdom',
    image: '/uk.jpg',
    description: 'The UK is home to some of the world\'s most prestigious universities and offers excellent post-study work opportunities.',
    scholarships: [
      { name: 'Chevening Scholarships', amount: 'Full tuition + living expenses' },
      { name: 'Commonwealth Scholarships', amount: 'Full tuition + stipend' }
    ],
    visaTypes: [
      'Student Visa (Tier 4)',
      'Graduate Route Visa',
      'Skilled Worker Visa',
      'Global Talent Visa'
    ]
  },
  'new-zealand': {
    name: 'New Zealand',
    image: '/newzealand.jpg',
    description: 'New Zealand offers high-quality education and a welcoming environment for international students and skilled migrants.',
    scholarships: [
      { name: 'New Zealand Scholarships', amount: 'Full tuition + living allowance' },
      { name: 'University of Auckland International Student Excellence Scholarship', amount: 'Up to $10,000' }
    ],
    visaTypes: [
      'Student Visa',
      'Post-study Work Visa',
      'Skilled Migrant Category Resident Visa',
      'Accredited Employer Work Visa'
    ]
  },
  'germany': {
    name: 'Germany',
    image: '/germany.jpg',
    description: 'Germany offers tuition-free education and excellent career prospects for international students and professionals.',
    scholarships: [
      { name: 'DAAD Scholarships', amount: '€850-1,200 per month' },
      { name: 'Deutschlandstipendium', amount: '€300 per month' }
    ],
    visaTypes: [
      'Student Visa',
      'Job Seeker Visa',
      'EU Blue Card',
      'Freelance Visa'
    ]
  }
};

export default function CountryDetailPage() {
  const params = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const countryData = countryDetails[params.slug];
    setCountry(countryData);
    setIsLoading(false);
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#E3F2FD] flex items-center justify-center">
        <div className="animate-pulse text-2xl text-blue-600">Loading...</div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen bg-[#E3F2FD] flex items-center justify-center">
        <div className="text-2xl text-gray-800">Country not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E3F2FD] text-gray-800 py-12 relative font-['Lato'] text-lg leading-[34px] font-normal">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="relative h-96 w-full">
            <Image
              src={country.image}
              alt={country.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {country.name}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 leading-relaxed text-lg"
            >
              {country.description}
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Available Scholarships</h2>
                <ul className="space-y-4">
                  {country.scholarships.map((scholarship, index) => (
                    <li 
                      key={index} 
                      className="bg-blue-50 p-5 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300"
                    >
                      <h3 className="font-medium text-gray-800 text-lg">{scholarship.name}</h3>
                      <p className="text-blue-600 mt-1">{scholarship.amount}</p>
                      <button className="mt-3 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                        Apply Now
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Visa Types</h2>
                <ul className="space-y-4">
                  {country.visaTypes.map((visa, index) => (
                    <li 
                      key={index} 
                      className="bg-blue-50 p-5 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 flex items-start"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-medium">{visa}</h3>
                        <p className="text-sm text-gray-500 mt-1">Learn more about requirements</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
