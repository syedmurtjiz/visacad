'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Mock data - replace with your actual data fetching logic
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
  // Add more countries as needed
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-2xl text-emerald-400">Loading...</div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-2xl text-white">Country not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative">
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl hover:border-emerald-500/50 transition-all duration-300">
          <div className="relative h-96 w-full">
            <Image
              src={country.image}
              alt={country.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {country.name}
              </h1>
            </div>
          </div>

          <div className="p-8">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">{country.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">Available Scholarships</h2>
                <ul className="space-y-4">
                  {country.scholarships.map((scholarship, index) => (
                    <li key={index} className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
                      <h3 className="font-medium text-white text-lg">{scholarship.name}</h3>
                      <p className="text-emerald-400 mt-1">{scholarship.amount}</p>
                      <button className="mt-3 text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                        Apply Now
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">Visa Types</h2>
                <ul className="space-y-4">
                  {country.visaTypes.map((visa, index) => (
                    <li key={index} className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 flex items-start">
                      <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
                        <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{visa}</h3>
                        <p className="text-sm text-gray-400 mt-1">Learn more about requirements</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
