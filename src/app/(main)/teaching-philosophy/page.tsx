"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaQuoteLeft, FaQuoteRight, FaChild, FaChalkboardTeacher, FaUsers, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';

export default function TeachingPhilosophy() {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false
  });

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observerCallback = (entries: any) => {
      entries.forEach( (entry: any) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const bgImageUrl = "/philo.jpg";

  const philosophyContent = {
    section1: 'Every child is unique. Each one has their own personality, behavior, and pace when it comes to learning. As a teacher, I believe it is important to understand these differences in order to deliver lessons effectively and meaningfully. Teaching is not simply about presenting a lesson in a "one-size-fits-all" manner, nor is it about fulfilling a duty for compliance\'s sake. To be a great teacher you have to ensure that every child has the opportunity to absorb, engage, and understand the lesson being taught.',
    section2: 'It is not enough that only a few students grasp the lesson; my goal is for every learner inside my classroom to leave with new knowledge and skills that they can carry into their future. I believe that true teaching goes beyond imparting information — it is about inspiring curiosity, nurturing potential, and building confidence in each learner.',
    section3: 'As a future educator, I am committed to using differentiated instruction to meet the diverse needs of my students. By providing varied strategies, activities, and assessments that are tailored to different learning styles, interests, and abilities, I can create an inclusive environment where every student feels valued and capable.',
    section4: 'I envision a classroom where students are not afraid to ask questions, make mistakes, and express themselves. I believe in fostering not just academic growth, but also emotional, social, and moral development. I will strive to be a teacher who listens, adapts, encourages, and continuously learns alongside my students. I hope to create a space where students feel safe, respected, and empowered to reach their fullest potential — not just as learners, but as individuals who can make a positive difference in the world.'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const quoteIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay: 0.5
      }
    }
  };

  const bgElementVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.05, 0.1, 0.05],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
 
      
      <HeroSection src={"/teaching-philo.png"} />
      {/* Main Content */}
      <div className="flex-grow py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 bg-blue-500 opacity-5 rounded-full blur-3xl"
          variants={bgElementVariants as any}
          animate="animate"
          style={{ width: '40%', height: '40%' }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 bg-blue-600 opacity-5 rounded-full blur-3xl"
          variants={bgElementVariants as any}
          animate="animate"
          style={{ width: '50%', height: '50%', animationDelay: '7s' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main quote card */}
            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-blue-600 h-3 w-full"></div>
              <div className="p-8 md:p-12 relative">
                <motion.div 
                  className="absolute top-4 left-4 text-blue-200"
                  variants={quoteIconVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <FaQuoteLeft size={40} />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 right-4 text-blue-200"
                  variants={quoteIconVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <FaQuoteRight size={40} />
                </motion.div>
                
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-700 mb-2">My Teaching Philosophy</h2>
                  <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>
                
                <div className="text-gray-700 text-lg leading-relaxed space-y-6 px-8">
                  <motion.p 
                    id="section1"
                    ref={section1Ref}
                    className="transition-opacity duration-1000"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible.section1 ? 1 : 0 }}
                  >
                    {philosophyContent.section1}
                  </motion.p>
                  
                  <motion.p 
                    id="section2"
                    ref={section2Ref}
                    className="transition-opacity duration-1000"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible.section2 ? 1 : 0 }}
                  >
                    {philosophyContent.section2}
                  </motion.p>
                  
                  <motion.p 
                    id="section3"
                    ref={section3Ref}
                    className="transition-opacity duration-1000"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible.section3 ? 1 : 0 }}
                  >
                    {philosophyContent.section3}
                  </motion.p>
                  
                  <motion.p 
                    id="section4"
                    ref={section4Ref}
                    className="transition-opacity duration-1000"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible.section4 ? 1 : 0 }}
                  >
                    {philosophyContent.section4}
                  </motion.p>
                </div>
              </div>
            </motion.div>
            
            {/* Core belief cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            >
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 flex">
                <div className="mr-4 text-blue-600">
                  <FaChild size={36} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Uniqueness of Each Child</h3>
                  <p className="text-gray-700">
                    Recognizing that every student has their own pace and style of learning, requiring personalized approaches.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 flex">
                <div className="mr-4 text-blue-600">
                  <FaChalkboardTeacher size={36} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Differentiated Instruction</h3>
                  <p className="text-gray-700">
                    Using varied teaching strategies and assessments to meet diverse learning needs and styles.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 flex">
                <div className="mr-4 text-blue-600">
                  <FaUsers size={36} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusive Environment</h3>
                  <p className="text-gray-700">
                    Creating a classroom where all students feel valued, safe to express themselves, and empoweblue.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 flex">
                <div className="mr-4 text-blue-600">
                  <FaHeart size={36} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Holistic Development</h3>
                  <p className="text-gray-700">
                    Nurturing not just academic growth, but emotional, social, and moral development as well.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Signature block */}
            <motion.div 
              className="text-right mt-12 pr-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <p className="text-gray-700 italic mb-1">With passion for education,</p>
              <p className="text-blue-700 font-script text-2xl">Hannah Faye A. Casquite</p>
              <p className="text-gray-600 text-sm">BEED 4-A</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}