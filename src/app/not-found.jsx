'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        className="text-center max-w-2xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-8">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="text-9xl font-bold text-indigo-600 mb-4"
          >
            404
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-gray-800 mb-4"
            variants={item}
          >
            Oops! Page Not Found
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={item}
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
        </motion.div>
        
        <motion.div variants={item} className="space-y-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-indigo-700 transition-colors"
            >
              Go Back Home
            </motion.button>
          </Link>
          <div className="text-sm text-gray-500">
            <p>You'll be redirected to the homepage in 10 seconds...</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          variants={item}
        >
          <div className="relative w-64 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-indigo-600"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 10, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
