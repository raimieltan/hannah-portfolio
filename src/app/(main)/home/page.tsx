"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/app/components/HeroSection';
import Credentials from '@/app/components/Credentials';
import { FaBook, FaJournalWhills, FaSitemap, FaLightbulb, FaClipboardList, FaBoxOpen } from 'react-icons/fa';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const [scrolled, setScrolled] = useState<any>(false);
  const [hoveredCard, setHoveredCard] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background image URL
  const bgImageUrl = "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/480877918_1191945892290718_2370627197464526496_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmULZXRKECBu8dNsqRsB-s4IGqieC--CLggaqJ4L74Ijp8EvpfdsFOBgS6v5BI8DfS_0ua4WyIac0zNNFEOJHw&_nc_ohc=0YcaQtn3NK4Q7kNvwEQL7cc&_nc_oc=AdksmuopWAbGMsEbsicvyQ0D3kHgS1yI3N7pRQtULC5e2_liDifG0gX4hz7FqlJRPxDOiebJAvCyWZAGpJ44HbDi&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=DPLh7J1WpMfPAYoxWsbUiA&oh=00_AfEbFBxGtEP0XAP4cWAsxvhvyifol5DOvtW_xlxeNgij5w&oe=6807A6A1";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}


      {/* Hero Section */}
      <HeroSection src={"/1.png"} />

      {/* Introduction Section - With Background Image */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-15"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:w-48 bg-blue-900 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Teaching Internship</div>
                <h2 className="block mt-1 text-3xl font-bold text-gray-900 relative">
                  Introduction
                  <div className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></div>
                </h2>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  The journey toward becoming an effective educator is a continuous process of learning, reflection, and growth. This e-portfolio showcases my experiences, reflections, and accomplishments during my teaching internship as a BEED 4-A student at West Visayas State University. Throughout this internship, I had the opportunity to apply theoretical knowledge in real classroom settings, develop essential teaching strategies, and cultivate a deeper understanding of the what teaching really is.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  This portfolio highlights my experiences in the field, reflections, and teaching philosophy. It also reflects my dedication to nurturing the holistic development of my students while continuously enhancing my teaching practices.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  As I move forward in my teaching career, this internship has laid a strong foundation, equipping me with the necessary skills and values to inspire and guide future learners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgment Section - With Background Image */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-15"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('acknowledgment')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Acknowledgment</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <div className="relative">
                <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 opacity-50 rounded-full -ml-8 -mt-8"></div>
                <div className="relative z-10">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To my cooperating teachers, Ma'am Lalaine and Ma'am Marjorie, thank you for your guidance and assistance throughout this journey, as well as to your advices which made me see the beauty of this profession. You've inspired me more and push me forward to continue. Thank you for always believing in me and I will forever hold in my heart all the lessons that I've learned from the both of you. I am truly grateful that you've become part of this journey.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To my dear friends, Shaine and Ester, thank you for always being there, offering your help, time, and effort. You made this journey bearable and more meaningful. Also, to my classmates and co-practice teachers, thank you for the companionship and for your assistance.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To my loved ones, who are always there to catch me whenever I feel like giving up, thank you so much. Your endless encouragement and support are the reasons why I dare to dream and continue to pursue this profession. I cannot imagine myself surpassing this journey without you by my side.
                  </p>

                  <p className="text-gray-700 mb-8 leading-relaxed">
                    And to my students, thank you for your cooperation, patience, and understanding as I took this huge step into this profession. You embraced me despite my inexperience and you even welcomed and showed me love. You will forever have a place in my heart and I will treasure all the memories that we have shared together. I hope one day, our path will meet again.
                  </p>

                  <p className={`text-center font-medium italic text-lg transition-all duration-300 ${hoveredCard === 'acknowledgment' ? 'text-blue-700 scale-110' : 'text-blue-600'}`}>
                    For all the support, lessons, laughter, and love that I've received along the way,<br />
                    I am truly grateful.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-100 opacity-50 rounded-full -mr-8 -mb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher's Creed & Prayer Section - With Background Image */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-15"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Teacher's Creed */}
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setHoveredCard('creed')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="h-12 bg-gradient-to-r from-blue-800 to-blue-600"></div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-1M8 7h6" />
                    </svg>
                    Practice Teacher's Creed
                  </h2>
                  <div className={`bg-blue-50 p-6 rounded-lg border-l-4 transition-all duration-300 ${hoveredCard === 'creed' ? 'border-blue-700 shadow-md' : 'border-blue-600'}`}>
                    <p className="text-gray-800 mb-4 font-semibold text-center">
                      I, HANNAH FAYE CASQUITE,
                    </p>
                    <p className="text-gray-700 mb-4">
                      believe in the nobility and the dignity of the teaching profession and I am honored and privileged to be considered as a future member.
                    </p>
                    <p className="text-gray-700 mb-4">
                      I believe that as a future member, and so I pledge to prepare myself for worthy membership morally, spiritually, socially and emotionally.
                    </p>
                    <p className="text-gray-700 mb-4">
                      I believe that a teacher I hope to become will depend upon the person that I am and that, therefore, I pledge to strive each day in every way to improve as a person.
                    </p>
                    <p className="text-gray-700 mb-4">
                      I believe that as a teacher, my influence upon others will be great, therefore, I pledge to continually uphold what is moral and right for the society which I served.
                    </p>
                    <p className="text-gray-700 mb-4">
                      I believe that teaching is done largely by example and I pledge to endeavor at all times to develop the right attitude through words and actions, I believe, too, that whatever desire to do and to become with Divine Guidance and with sincerest effort, I pledge to become the teacher worthy of my chosen profession.
                    </p>
                    <p className={`text-gray-800 font-bold text-center mt-6 transition-all duration-300 ${hoveredCard === 'creed' ? 'text-blue-800 scale-110' : ''}`}>
                      SO HELP ME GOD
                    </p>
                  </div>
                </div>
              </div>

              {/* Practice Teacher's Prayer */}
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setHoveredCard('prayer')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="h-12 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Practice Teacher's Prayer
                  </h2>
                  <div className={`bg-blue-50 p-6 rounded-lg border-l-4 italic transition-all duration-300 ${hoveredCard === 'prayer' ? 'border-blue-700 shadow-md' : 'border-blue-600'}`}>
                    <p className="text-gray-700 mb-4">
                      Heavenly Father,
                    </p>
                    <p className="text-gray-700 mb-3">
                      Grant us wisdom as I'm going to teach young minds with love, passion, and dedication.
                    </p>
                    <p className="text-gray-700 mb-3">
                      I pray for peace in my classroom as I conduct daily tasks, lessons and assignment with your grace.
                    </p>
                    <p className="text-gray-700 mb-3">
                      Guide me to make decisions that will benefit my students.
                    </p>
                    <p className="text-gray-700 mb-3">
                      Give them grace as they help their classmates who were thriving and struggling and to speak with love and respect to one another.
                    </p>
                    <p className="text-gray-700 mb-3">
                      Help me to recognize talents and potentials of my pupils so I can help them become the person they aspired to be.
                    </p>
                    <p className="text-gray-700 mb-3">
                      Give me strength to overcome what challenges I may counter within the day of being a practice teacher.
                    </p>
                    <p className="text-gray-700 mb-3">
                      Help me not to judge my student too harshly, to be fair at all and became a good role model to them.
                    </p>
                    <p className="text-gray-700 mb-3">
                      Guide me throughout my journey.
                    </p>
                    <p className="text-gray-700 mb-3">
                      I pray for my fellow practice teachers, cooperating teachers and to the parents.
                    </p>
                    <p className={`text-gray-700 font-medium transition-all duration-300 ${hoveredCard === 'prayer' ? 'text-blue-800 scale-110' : ''}`}>
                      In Jesus name, I pray. Amen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Credentials />

      {/* Portfolio Sections */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">E-Portfolio Sections</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Reading */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredCard('reading')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 bg-blue-600 relative flex items-center justify-center">
                <FaBook className="h-20 w-20 text-white opacity-80" />
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Reading</h3>
                <p className="text-gray-600 mb-4">Explore literature reviews and professional readings that have informed my teaching practice.</p>
                <Link
                  href="/professional-reading"
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-transform duration-300 ${hoveredCard === 'reading' ? 'translate-x-2' : ''}`}
                >
                  View Professional Reading
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Weekly Journal */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredCard('journal')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 bg-green-600 relative flex items-center justify-center">
                <FaJournalWhills className="h-20 w-20 text-white opacity-80" />
                <div className="absolute inset-0 bg-green-900 opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Journal</h3>
                <p className="text-gray-600 mb-4">Weekly reflections documenting my experiences, challenges, and growth during my internship.</p>
                <Link
                  href="/weekly-journal"
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-transform duration-300 ${hoveredCard === 'journal' ? 'translate-x-2' : ''}`}
                >
                  View Weekly Journal
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* PPST Domains */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredCard('ppst')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 bg-purple-600 relative flex items-center justify-center">
                <FaSitemap className="h-20 w-20 text-white opacity-80" />
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">PPST Domains</h3>
                <p className="text-gray-600 mb-4">Exploration of the Philippine Professional Standards for Teachers and my alignment with these domains.</p>
                <Link
                  href="/ppst-domains"
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-transform duration-300 ${hoveredCard === 'ppst' ? 'translate-x-2' : ''}`}
                >
                  View PPST Domains
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredCard('philosophy')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 bg-red-600 relative flex items-center justify-center">
                <FaLightbulb className="h-20 w-20 text-white opacity-80" />
                <div className="absolute inset-0 bg-red-900 opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teaching Philosophy</h3>
                <p className="text-gray-600 mb-4">My core beliefs and approach to teaching and learning in elementary education.</p>
                <Link
                  href="/teaching-philosophy"
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-transform duration-300 ${hoveredCard === 'philosophy' ? 'translate-x-2' : ''}`}
                >
                  View Teaching Philosophy
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* LP and Documentations */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredCard('lp')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 bg-yellow-600 relative flex items-center justify-center">
                <FaClipboardList className="h-20 w-20 text-white opacity-80" />
                <div className="absolute inset-0 bg-yellow-900 opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">LP and Documentations</h3>
                <p className="text-gray-600 mb-4">Lesson plans, teaching materials, and documentation of classroom activities and projects.</p>
                <Link
                  href="/lp-documentation"
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-transform duration-300 ${hoveredCard === 'lp' ? 'translate-x-2' : ''}`}
                >
                  View LP and Documentations
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Additional Resources */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredCard('resources')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 bg-blue-600 relative flex items-center justify-center">
                <FaBoxOpen className="h-20 w-20 text-white opacity-80" />
                <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Additional Resources</h3>
                <p className="text-gray-600 mb-4">Supplementary materials, references, and teaching resources to enhance educational practices.</p>
                <Link
                  href="/resources"
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-transform duration-300 ${hoveredCard === 'resources' ? 'translate-x-2' : ''}`}
                >
                  Explore Resources
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Background */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-6">I'd love to hear from you! Feel free to reach out with any questions or feedback about my teaching journey.</p>

                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">hannah.casquite@example.com</span>
                </div>

                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-gray-700">BEED 4-A</span>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-700">West Visayas State University</span>
                </div>
              </div>

              <div className="md:w-1/2 bg-blue-600 p-8 text-white">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Email" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea rows={4} className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Message"></textarea>
                  </div>

                  <button type="button" className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}