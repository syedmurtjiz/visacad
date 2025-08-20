'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle, Clock, Users, Trophy, Globe, Star, ChevronRight, Phone, Mail, Calendar, FileText, Award, Briefcase } from 'lucide-react';

// Enhanced service data with more comprehensive information
const serviceData = {
  'skilled-immigration': {
    title: 'Skilled Immigration',
    subtitle: 'Your Gateway to Permanent Residency',
    description: 'Navigate the complex world of skilled immigration with our expert guidance. We specialize in permanent residency pathways for skilled professionals seeking to build their future in top destinations worldwide.',
    heroImage: '🌍',
    features: [
      {
        icon: FileText,
        title: 'Comprehensive Eligibility Assessment',
        description: 'Detailed evaluation of your qualifications, work experience, and language proficiency to determine the best immigration pathway.'
      },
      {
        icon: Globe,
        title: 'Express Entry Optimization',
        description: 'Expert assistance with profile creation, documentation, and strategy to maximize your Comprehensive Ranking System (CRS) score.'
      },
      {
        icon: Award,
        title: 'Provincial Nominee Programs',
        description: 'Access to exclusive PNP opportunities across different provinces with tailored application strategies.'
      },
      {
        icon: Briefcase,
        title: 'Credential Recognition',
        description: 'Professional guidance through skills assessment and credential evaluation processes with recognized assessment bodies.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Initial Consultation',
        description: 'Comprehensive assessment of your profile and immigration goals'
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Customized immigration strategy based on your unique circumstances'
      },
      {
        step: '03',
        title: 'Documentation',
        description: 'Complete preparation and review of all required documents'
      },
      {
        step: '04',
        title: 'Application Submission',
        description: 'Expert submission and ongoing application management'
      },
      {
        step: '05',
        title: 'Post-Landing Support',
        description: 'Continued assistance with settlement and integration services'
      }
    ],
    stats: {
      successRate: '98%',
      avgProcessingTime: '8-12 months',
      clientsSatisfied: '2,500+',
      countriesServed: '15+'
    },
    testimonial: {
      text: "The skilled immigration process seemed overwhelming until I found this team. Their expertise and personalized approach made my Canadian PR dream a reality.",
      name: "Sarah Chen",
      position: "Software Engineer",
      country: "Now in Toronto, Canada"
    }
  },
  'visit-visa': {
    title: 'Visit Visa Services',
    subtitle: 'Seamless Travel Authorization',
    description: 'Whether for tourism, business, or family visits, our visa experts ensure your travel applications are prepared with precision and submitted with confidence.',
    heroImage: '✈️',
    features: [
      {
        icon: Globe,
        title: 'Tourist Visa Applications',
        description: 'Complete assistance with tourist visa applications for popular destinations worldwide.'
      },
      {
        icon: Briefcase,
        title: 'Business Visit Visas',
        description: 'Professional support for business travel visas, conferences, and corporate visits.'
      },
      {
        icon: Users,
        title: 'Family Visit Visas',
        description: 'Specialized assistance for family reunification and visitor visa applications.'
      },
      {
        icon: FileText,
        title: 'Document Preparation',
        description: 'Meticulous document review and preparation to ensure application success.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Destination Assessment',
        description: 'Evaluation of visa requirements for your intended destination'
      },
      {
        step: '02',
        title: 'Document Collection',
        description: 'Comprehensive checklist and guidance for required documentation'
      },
      {
        step: '03',
        title: 'Application Preparation',
        description: 'Professional preparation and review of your visa application'
      },
      {
        step: '04',
        title: 'Submission & Tracking',
        description: 'Application submission and real-time status tracking'
      },
      {
        step: '05',
        title: 'Travel Preparation',
        description: 'Pre-travel guidance and support for your journey'
      }
    ],
    stats: {
      successRate: '95%',
      avgProcessingTime: '2-6 weeks',
      clientsSatisfied: '5,000+',
      countriesServed: '50+'
    },
    testimonial: {
      text: "Thanks to their expert guidance, my family visit visa was approved without any complications. Professional service from start to finish.",
      name: "Ahmed Hassan",
      position: "Business Owner",
      country: "Visiting family in UK"
    }
  },
  'investment-immigration': {
    title: 'Immigration by Investment',
    subtitle: 'Citizenship Through Strategic Investment',
    description: 'Secure citizenship or residency through carefully selected investment programs. Our expertise in global investment immigration ensures you make informed decisions for your future.',
    heroImage: '💼',
    features: [
      {
        icon: Trophy,
        title: 'Citizenship by Investment',
        description: 'Access to premium CBI programs offering fast-track citizenship through strategic investments.'
      },
      {
        icon: Globe,
        title: 'Residence by Investment',
        description: 'Golden visa programs providing residency pathways through approved investment options.'
      },
      {
        icon: Briefcase,
        title: 'Real Estate Investments',
        description: 'Carefully vetted real estate opportunities that qualify for immigration programs.'
      },
      {
        icon: Award,
        title: 'Business Investment Options',
        description: 'Government-approved business investment opportunities with immigration benefits.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Investment Consultation',
        description: 'Comprehensive review of investment immigration options'
      },
      {
        step: '02',
        title: 'Due Diligence',
        description: 'Thorough background checks and compliance verification'
      },
      {
        step: '03',
        title: 'Investment Selection',
        description: 'Strategic selection of qualified investment opportunities'
      },
      {
        step: '04',
        title: 'Application Process',
        description: 'Complete management of citizenship/residency application'
      },
      {
        step: '05',
        title: 'Ongoing Support',
        description: 'Continued support for investment management and compliance'
      }
    ],
    stats: {
      successRate: '100%',
      avgProcessingTime: '3-6 months',
      clientsSatisfied: '500+',
      countriesServed: '12+'
    },
    testimonial: {
      text: "Their expertise in investment immigration helped me secure European residency efficiently. The investment options were well-researched and profitable.",
      name: "David Kim",
      position: "Entrepreneur",
      country: "Now resident of Portugal"
    }
  },
  'study-abroad': {
    title: 'Study Abroad Services',
    subtitle: 'Your Academic Journey Starts Here',
    description: 'Transform your educational aspirations into reality with our comprehensive study abroad services. From university selection to student visa approval, we guide you every step of the way.',
    heroImage: '🎓',
    scholarship: {
      title: 'Scholarship Opportunities',
      description: 'Access exclusive scholarship programs and financial aid options to make your international education dreams more affordable.',
      features: [
        'Merit-based scholarships up to 100% tuition coverage',
        'Need-based financial aid packages',
        'Country-specific scholarship programs',
        'University-specific funding opportunities',
        'Research and teaching assistantships',
        'Sports and arts scholarships'
      ],
      eligibility: [
        'Academic excellence (minimum GPA requirements)',
        'Standardized test scores (SAT, ACT, GRE, GMAT, etc.)',
        'Extracurricular achievements',
        'Leadership experience',
        'Community service involvement',
        'Research publications (for graduate programs)'
      ],
      applicationProcess: [
        'Scholarship eligibility assessment',
        'Document preparation (essays, recommendation letters)',
        'Application submission strategy',
        'Interview preparation',
        'Follow-up and acceptance procedures'
      ]
    },
    features: [
      {
        icon: Globe,
        title: 'University Selection',
        description: 'Strategic selection of universities and programs aligned with your career goals and budget.'
      },
      {
        icon: FileText,
        title: 'Application Assistance',
        description: 'Complete support with university applications, essays, and admission requirements.'
      },
      {
        icon: Award,
        title: 'Scholarship Guidance',
        description: 'Access to scholarship opportunities and funding options to reduce education costs.'
      },
      {
        icon: Users,
        title: 'Student Visa Support',
        description: 'Expert assistance with student visa applications and interview preparation.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Academic Consultation',
        description: 'Assessment of academic background and career aspirations'
      },
      {
        step: '02',
        title: 'University Matching',
        description: 'Strategic selection of universities and programs'
      },
      {
        step: '03',
        title: 'Application Support',
        description: 'Complete assistance with applications and documentation'
      },
      {
        step: '04',
        title: 'Visa Processing',
        description: 'Student visa application and interview preparation'
      },
      {
        step: '05',
        title: 'Pre-Departure',
        description: 'Orientation and support for your academic journey abroad'
      }
    ],
    stats: {
      successRate: '97%',
      avgProcessingTime: '4-8 months',
      clientsSatisfied: '3,000+',
      countriesServed: '25+'
    },
    testimonial: {
      text: "From university selection to visa approval, they made my dream of studying at a top UK university come true. Exceptional guidance throughout.",
      name: "Priya Sharma",
      position: "Master's Student",
      country: "Studying in London, UK"
    }
  }
};

export default function ServicePage() {
  const [currentSlug, setCurrentSlug] = useState('skilled-immigration');
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeService, setActiveService] = useState('skilled-immigration');

  // Update service when slug changes
  useEffect(() => {
    const pathSlug = window.location.pathname.split('/').pop();
    if (pathSlug && pathSlug in serviceData) {
      setCurrentSlug(pathSlug);
      setActiveService(pathSlug);
    }
  }, []);

  // Load service data when currentSlug changes
  useEffect(() => {
    setLoading(true);
    // Simulate loading and get service data
    setTimeout(() => {
      const serviceInfo = serviceData[currentSlug];
      if (serviceInfo) {
        setService(serviceInfo);
        // Update URL without page reload
        window.history.pushState({}, '', `/services/${currentSlug}`);
        setActiveService(currentSlug);
      }
      setLoading(false);
    }, 300);
  }, [currentSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-400 mx-auto mb-4"></div>
          <div className="text-gray-300">Loading service details...</div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <button 
            onClick={() => setCurrentSlug('skilled-immigration')}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View Available Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="text-8xl mb-6 animate-bounce">{service.heroImage}</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">{service.subtitle}</p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">{service.description}</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{service.stats.successRate}</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{service.stats.avgProcessingTime}</div>
              <div className="text-gray-300 text-sm">Avg. Processing</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{service.stats.clientsSatisfied}</div>
              <div className="text-gray-300 text-sm">Satisfied Clients</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{service.stats.countriesServed}</div>
              <div className="text-gray-300 text-sm">Countries Served</div>
            </div>
          </div>

          {/* Services Features */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-emerald-400">Comprehensive</span> Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-emerald-400">Proven</span> Process
            </h2>
            <div className="max-w-4xl mx-auto">
              {service.process.map((step, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Connection line */}
                  {index < service.process.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-emerald-400 to-teal-400"></div>
                  )}
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship Section */}
          {service.slug === 'study-abroad' && service.scholarship && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-emerald-400">Scholarship</span> Opportunities
              </h2>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Funding Your Education</h3>
                <p className="text-gray-300 mb-8">{service.scholarship.description}</p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-4">Scholarship Features</h4>
                    <ul className="space-y-3">
                      {service.scholarship.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-4">Eligibility Criteria</h4>
                    <ul className="space-y-3">
                      {service.scholarship.eligibility.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-4">Application Process</h4>
                    <ul className="space-y-3">
                      {service.scholarship.applicationProcess.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-sm mr-2 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle scholarship eligibility check
                      alert('Scholarship eligibility check will be processed. Our team will contact you shortly.');
                    }}
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Check Your Scholarship Eligibility
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl p-8 md:p-12 border border-blue-500/20 mb-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 italic">
                "{service.testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {service.testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white">{service.testimonial.name}</div>
                  <div className="text-gray-300">{service.testimonial.position}</div>
                  <div className="text-blue-400 text-sm">{service.testimonial.country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 bg-grid-pattern"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Take the first step towards achieving your goals. Our expert consultants are ready to guide you through every step of the process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group relative px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                  </span>
                </button>
                
                <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +1 (555) 123-4567
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-emerald-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Certified Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          <style jsx global>{`
            .bg-grid-pattern {
              background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
              background-size: 40px 40px;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.5s ease-out forwards;
            }
            .animate-bounce {
              animation: bounce 2s infinite;
            }
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}</style>
    </div>
  );
}