"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaBookOpen, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';

export default function WeeklyJournal() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isFlipping, setIsFlipping] = useState(false);
  const containerRef = useRef(null);

  // Weekly journal entries - replace with your actual journal data
  const journalEntries = [
    { id: 1, image: '/14.png', week: 'Week 1', title: 'First Week Journal' },
    { id: 2, image: '/15.png', week: 'Week 2', title: 'Second Week Journal' },
    { id: 3, image: '/16.png', week: 'Week 3', title: 'Third Week Journal' },
    { id: 4, image: '/17.png', week: 'Week 4', title: 'Fourth Week Journal' },
    { id: 5, image: '/18.png', week: 'Week 5', title: 'Fifth Week Journal' },
    { id: 6, image: '/19.png', week: 'Week 6', title: 'Sixth Week Journal' },
    { id: 7, image: '/20.png', week: 'Week 7', title: 'Seventh Week Journal' },
    { id: 8, image: '/21.png', week: 'Week 8', title: 'Eighth Week Journal' },
    { id: 9, image: '/22.png', week: 'Week 9', title: 'Ninth Week Journal' },
    { id: 10, image: '/23.png', week: 'Week 10', title: 'Tenth Week Journal' },
    { id: 11, image: '/24.png', week: 'Week 11', title: 'Eleventh Week Journal' },
    { id: 12, image: '/25.png', week: 'Week 12', title: 'Twelfth Week Journal' },
  ];

  const navigateWeek = (direction: any) => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setDirection(direction);
    
    // Calculate the new week index
    const newActiveWeek = direction > 0 
      ? (activeWeek + 1) % journalEntries.length 
      : (activeWeek - 1 + journalEntries.length) % journalEntries.length;
    
    setTimeout(() => {
      setActiveWeek(newActiveWeek);
      setIsFlipping(false);
    }, 500); // Match this with animation duration
  };

  const bgImageUrl = "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/480877918_1191945892290718_2370627197464526496_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmULZXRKECBu8dNsqRsB-s4IGqieC--CLggaqJ4L74Ijp8EvpfdsFOBgS6v5BI8DfS_0ua4WyIac0zNNFEOJHw&_nc_ohc=0YcaQtn3NK4Q7kNvwEQL7cc&_nc_oc=AdksmuopWAbGMsEbsicvyQ0D3kHgS1yI3N7pRQtULC5e2_liDifG0gX4hz7FqlJRPxDOiebJAvCyWZAGpJ44HbDi&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=DPLh7J1WpMfPAYoxWsbUiA&oh=00_AfEbFBxGtEP0XAP4cWAsxvhvyifol5DOvtW_xlxeNgij5w&oe=6807A6A1";

  // Book flipping animation variants
  const pageVariants = {
    enter: (direction: any) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.9,
      zIndex: 1,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      zIndex: 2,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction: any) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HeroSection src={"/weekly.png"} />
      <div className="relative py-12 bg-blue-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-white hover:text-blue-200 flex items-center mr-4">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <FaBookOpen className="mr-3" />
                Weekly Journal
              </h1>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-white mr-2" />
              <span className="text-white">
                {journalEntries[activeWeek].week} of Internship
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Journal Display */}
      <div className="flex-grow py-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-5/6 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="text-left w-1/3">
                <button 
                  onClick={() => navigateWeek(-1)}
                  disabled={isFlipping}
                  className={`flex items-center px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition ${isFlipping ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <FaChevronLeft className="mr-2" />
                  Previous Week
                </button>
              </div>
              
              <div className="text-center w-1/3">
                <h2 className="text-2xl font-bold text-gray-800">
                  {journalEntries[activeWeek].title}
                </h2>
              </div>
              
              <div className="text-right w-1/3">
                <button 
                  onClick={() => navigateWeek(1)}
                  disabled={isFlipping}
                  className={`flex items-center justify-center ml-auto px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition ${isFlipping ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Next Week
                  <FaChevronRight className="ml-2" />
                </button>
              </div>
            </div>
            
            {/* Book container */}
            <div 
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-lg shadow-2xl perspective-1000 bg-white p-4"
              style={{ perspective: "1000px" }}
            >
              {/* Page turning effect */}
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={activeWeek}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 rounded-lg shadow-md bg-white"
                  style={{ 
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transformOrigin: direction > 0 ? "left center" : "right center"
                  }}
                >
                  {/* Journal page content */}
                  <div className="w-full h-full flex flex-col overflow-hidden">
                    <div className="w-full h-full relative rounded-t-lg overflow-hidden">
                      <Image 
                        src={journalEntries[activeWeek].image}
                        alt={journalEntries[activeWeek].title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="bg-green-50 p-4 border-t border-green-200">
                      <h3 className="text-xl font-bold text-green-800">
                        {journalEntries[activeWeek].week}: {journalEntries[activeWeek].title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Book binding visual effect */}
                  <div className={`absolute h-full w-8 ${direction > 0 ? 'left-0' : 'right-0'} top-0 bg-gradient-to-r from-gray-300 to-transparent rounded-l-lg`}></div>
                </motion.div>
              </AnimatePresence>
              
              {/* Page corner fold effect */}
              <div className="absolute right-0 bottom-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-bl-lg z-10"></div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {journalEntries.map((entry, index) => (
                <button
                  key={entry.id}
                  onClick={() => {
                    if (isFlipping) return;
                    setDirection(index > activeWeek ? 1 : -1);
                    setIsFlipping(true);
                    setTimeout(() => {
                      setActiveWeek(index);
                      setIsFlipping(false);
                    }, 500);
                  }}
                  className={`w-3 h-3 rounded-full ${activeWeek === index ? 'bg-green-600' : 'bg-gray-300'} 
                    transition-all hover:bg-green-400 ${isFlipping ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label={`Go to ${entry.week}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation - Shown only on small screens */}
      <div className="fixed bottom-4 left-0 right-0 md:hidden flex justify-center z-20">
        <div className="flex space-x-4 bg-white px-6 py-3 rounded-full shadow-xl">
          <button 
            onClick={() => navigateWeek(-1)}
            disabled={isFlipping}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-green-600 text-white"
          >
            <FaChevronLeft />
          </button>
          <div className="flex items-center text-green-800 font-medium">
            {activeWeek + 1} / {journalEntries.length}
          </div>
          <button 
            onClick={() => navigateWeek(1)}
            disabled={isFlipping}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-green-600 text-white"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}