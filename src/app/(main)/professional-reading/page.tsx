"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBook, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaLightbulb, FaArrowLeft } from 'react-icons/fa';
import HeroSection from '@/app/components/HeroSection';

const professionalReadings = [
  {
    id: 1,
    title: "The Skillful Teacher: On Technique, Trust, and Responsiveness in the Classroom",
    author: "Stephen D. Brookfield",
    summary: "Stephen Brookfield emphasizes the importance of reflection, student engagement, and flexibility in teaching. He stresses that a skillful teacher continuously gather feedback to assess the effectiveness of their practice as well as to adapt their teaching methods to meet the needs of diverse learners. His book also explores the strategies to create an inclusive learning environment and maintaining students' motivation.",
    reflection: "As a pre-service teacher, I gained a lot of insights while reading Brookfield's book. There are a lot of strategies and ideas that I can surely apply in my future classroom. One of the most significant takeaways from this book is the importance of building trust among the students and fostering a positive relationship with them. As I venture in my internship journey, I must agree with what Brookfield said. The first step of becoming a great teacher is to know your students, making them feel safe, respected and valued. You need to be consistent and empathize with them to fully understand their needs and by doing this, you can create an instruction that aligns with their needs and interests which ensures that the students become more engaged and motivated to learn.\n\nBrookfield also emphasized the importance of ongoing reflection and adaptability in teaching, and this really resonated with me. Every child is unique, and each one of them requires a different approach of teaching. We cannot simply teach in a one-size-fits-all strategy as every student have different learning style, pace, and perspective. By continuously reflecting on our teaching strategies and by understanding our students, we can adapt our instructions to better meet their needs. By reflecting on our practices, we can identify which strategy works well and what needs improvement. Through this, we can grow professionally and we can provide a quality instruction that each of our students deserve.\n\nMoreover, Brookfield also highlights the importance of creating an inclusive learning environment. Learning becomes more effective in an environment where students feel that they belong, safe, valued, and empowered. It is important that we make our student feel seen and important despite their differences. As a future educator, I want to build a classroom where students would want to come to, where they are comfortable in their own skin. I want to make an environment where each students can thrive because their needs are being catered.\n\nAfter reading Brookfield's book, I feel my passion in teaching ignite. It inspires me to become a great teacher that does not only deliver her lessons, but a teacher who reflects, understands her students needs, and is eager to create a classroom where they can thrive and reach their full potential.",
    color: "blue",
    icon: <FaBook />
  },
  {
    id: 2,
    title: "Classroom Instruction That Works: Research-Based Strategies for Increasing Student Achievement",
    author: "Robert J. Marzano, Debra J. Pickering, and Jane E. Pollock",
    summary: "The book provides information on what works in education, how teachers can find what works, how educational research can find its way into classrooms, and how teachers can apply it to help individual students. It presents and examines the nine research-based instructional strategies that have been proven to have a positive impact on student learning. These strategies include identifying similarities and differences, summarizing and note taking, reinforcing effort and providing recognition, homework and practice, nonlinguistic representations, cooperative learning, setting objectives and providing feedback, generating and testing hypotheses, and questions, cues, and advance organizers. The authors emphasize that by implementing these strategies effectively, it can significantly improve student achievement across all grade levels.",
    reflection: "To be an effective teacher, you must discover strategies that align with your students' needs. Reading this book has provided me with strategies that I can use in my future classroom. It emphasizes the nine strategies that have been proven to enhance the student's achievement, and I recognize the importance of these techniques to create an effective and engaging learning environment.\n\nDuring my internship, I can say that Manzano's strategy of setting objectives and providing feedback is very effective in creating an effective learning environment. Throughout my college years, most of my professors would always say that you must always set clear objectives in the classroom, and during my internship, I saw how really important it is. By setting objectives or expectations, you can help the students focus on what they need to achieve. Providing feedback is also essential as it can guide the students towards improvement and reach their full potential.\n\nAnother strategy that has impacted me is reinforcing effort and providing recognition. During my internship, I saw how important it is to recognize your students' efforts as it boosts their motivation and engagement in class. With this, you can also create a learning environment where everyone is seen and free to speak their mind and would not be afraid to make mistakes. As a pre-service teacher, I want to create a classroom where student's hard work is recognized and allow them to see that their efforts contribute to their success.\n\nMoreover, the book also tackled cooperative learning and summarizing which highlighted the importance of collaboration and critical thinking. Having the students work together does not only allow them to create a strong bond with each other but also helps them develop their communication skills as well as understanding the lessons better as they share their different perspectives and ideas with each other.\n\nUsing nonlinguistic representation, such as different visual aids, can also enhance student's understanding. It ensures that each learning style is catered to help the students process the information effectively.\n\nIn my future classroom, I aim to incorporate all the strategies that I have learned from this book. By implementing these strategies, I can create a learning environment that is inclusive and where learners are empowered to achieve their full potential.",
    color: "green",
    icon: <FaLightbulb />
  }
];

export default function ProfessionalReading() {
  const [activeReading, setActiveReading] = useState(0);
  const [activeTab, setActiveTab] = useState('summary');


  const getColorClass = (color: any, element: any) => {
    const colorMap: any = {
      blue: {
        bg: 'bg-blue-600',
        bgLight: 'bg-blue-50',
        bgHover: 'hover:bg-blue-700',
        border: 'border-blue-600',
        text: 'text-blue-600',
        gradient: 'from-blue-800 to-blue-600'
      },
      green: {
        bg: 'bg-green-600',
        bgLight: 'bg-green-50',
        bgHover: 'hover:bg-green-700',
        border: 'border-green-600',
        text: 'text-green-600',
        gradient: 'from-green-800 to-green-600'
      }
    };
    
    return colorMap[color][element];
  };
  
  const bgImageUrl = "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/480877918_1191945892290718_2370627197464526496_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmULZXRKECBu8dNsqRsB-s4IGqieC--CLggaqJ4L74Ijp8EvpfdsFOBgS6v5BI8DfS_0ua4WyIac0zNNFEOJHw&_nc_ohc=0YcaQtn3NK4Q7kNvwEQL7cc&_nc_oc=AdksmuopWAbGMsEbsicvyQ0D3kHgS1yI3N7pRQtULC5e2_liDifG0gX4hz7FqlJRPxDOiebJAvCyWZAGpJ44HbDi&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=DPLh7J1WpMfPAYoxWsbUiA&oh=00_AfEbFBxGtEP0XAP4cWAsxvhvyifol5DOvtW_xlxeNgij5w&oe=6807A6A1";

  return (
    <div className="min-h-screen flex flex-col">
            <HeroSection src={"/weekly.png"} />

      {/* Header */}
      <div className="relative py-12 bg-blue-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-white hover:text-blue-200 flex items-center mr-4">
                <FaArrowLeft className="mr-2" /> Back to Home
              </Link>
              <h1 className="text-3xl font-bold text-white">Professional Reading</h1>
            </div> */}
            {/* <div className="flex space-x-2">
              {professionalReadings.map((reading, index) => (
                <button
                  key={reading.id}
                  onClick={() => {
                    setActiveReading(index);
                    setActiveTab('summary');
                  }}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeReading === index 
                      ? `bg-white text-${reading.color}-600` 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Reading {index + 1}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <section className="py-12 relative flex-grow bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Reading header */}
            <div className={`p-6 ${getColorClass(professionalReadings[activeReading].color, 'bg')} text-white`}>
              <div className="flex items-start">
                <div className="p-4 bg-white/20 rounded-full mr-4">
                  {professionalReadings[activeReading].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{professionalReadings[activeReading].title}</h2>
                  <p className="mt-1 text-white/80">Written by: {professionalReadings[activeReading].author}</p>
                </div>
              </div>
            </div>
            
            {/* Tab navigation */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'summary' 
                    ? `${getColorClass(professionalReadings[activeReading].color, 'text')} border-b-2 ${getColorClass(professionalReadings[activeReading].color, 'border')}` 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Summary
              </button>
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'reflection' 
                    ? `${getColorClass(professionalReadings[activeReading].color, 'text')} border-b-2 ${getColorClass(professionalReadings[activeReading].color, 'border')}` 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                My Reflection
              </button>
            </div>
            
            {/* Tab content */}
            <div className="p-6">
              {activeTab === 'summary' ? (
                <div className="prose max-w-none">
                  <div className="flex">
                    <FaQuoteLeft className={`h-8 w-8 mr-4 flex-shrink-0 ${getColorClass(professionalReadings[activeReading].color, 'text')}`} />
                    <p className="text-gray-700 leading-relaxed">
                      {professionalReadings[activeReading].summary}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="prose max-w-none">
                  {professionalReadings[activeReading].reflection.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Navigation cards */}
          {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalReadings.map((reading, index) => (
              <div 
                key={reading.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${
                  activeReading === index ? 'ring-2 ' + getColorClass(reading.color, 'border') : ''
                }`}
                onClick={() => {
                  setActiveReading(index);
                  setActiveTab('summary');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-32 relative flex items-center justify-center bg-gradient-to-r ${getColorClass(reading.color, 'gradient')}`}>
                  <div className="absolute right-4 top-4 bg-white rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold">{reading.title}</h3>
                    <p className="text-white/80 text-sm">by {reading.author}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 line-clamp-2 mb-2">{reading.summary.substring(0, 120)}...</p>
                  <button 
                    className={`px-4 py-2 rounded ${getColorClass(reading.color, 'bg')} text-white ${getColorClass(reading.color, 'bgHover')} transition-all flex items-center justify-center w-full ${
                      hoveredCard === index ? 'translate-y-0' : 'translate-y-1'
                    }`}
                  >
                    {activeReading === index ? 'Currently Viewing' : 'View This Reading'} 
                    {activeReading !== index && <FaChevronRight className="ml-2" />}
                  </button>
                </div>
              </div>
            ))}
          </div> */}
          
          {/* Quick navigation */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => {
                const newIndex = activeReading > 0 ? activeReading - 1 : professionalReadings.length - 1;
                setActiveReading(newIndex);
                setActiveTab('summary');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center text-black"
            >
              <FaChevronLeft className="mr-2" /> Previous Reading
            </button>
            
            <button
              onClick={() => {
                const newIndex = (activeReading + 1) % professionalReadings.length;
                setActiveReading(newIndex);
                setActiveTab('summary');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center text-black"
            >
              Next Reading <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      

    </div>
  );
}