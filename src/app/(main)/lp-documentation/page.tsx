"use client"
import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaDownload, FaExpand, FaCompress, FaBook, FaGraduationCap, FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/app/components/HeroSection';

export default function PDFViewer() {
  const [isFullscreen1, setIsFullscreen1] = useState(false);
  const [isFullscreen2, setIsFullscreen2] = useState(false);
  const viewer1Ref = useRef<HTMLDivElement | any>(null);
  const viewer2Ref = useRef<HTMLDivElement | any>(null);
  const [activeTab, setActiveTab] = useState(0);

  // PDF file data
  const pdfData = [
    {
      file: "/lp-ap.pdf",
      title: "Banghay Aralin sa Araling Panlipunan",
      subject: "Araling Panlipunan",
      grade: "Grade IV",
      icon: <FaGraduationCap className="text-blue-500" />
    },
    {
      file: "/music.pdf",
      title: "Lesson Plan in MAPEH II: Music",
      subject: "Music",
      grade: "Grade II",
      icon: <FaBook className="text-green-500" />
    }
  ];

  // Toggle fullscreen for specific viewer
  const toggleFullscreen = (viewerRef: React.RefObject<HTMLDivElement>, setFullscreen: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (!viewerRef.current) return;

    setFullscreen(prev => {
      if (!prev) {
        if (viewerRef.current?.requestFullscreen) {
          viewerRef.current.requestFullscreen();
        }
        return true;
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        return false;
      }
    });
  };

  // Handle fullscreen change event
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen1(false);
        setIsFullscreen2(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <HeroSection src={"/lp.png"} />
      
      {/* Main Header with hardcoded decorative elements */}
      <div className="relative py-8 text-center bg-navy-900 text-white overflow-hidden">
        {/* Hardcoded decorative dots */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-24 h-24 rounded-full bg-white" style={{ top: '15%', left: '10%', opacity: 0.3 }}></div>
          <div className="absolute w-16 h-16 rounded-full bg-white" style={{ top: '45%', left: '20%', opacity: 0.2 }}></div>
          <div className="absolute w-20 h-20 rounded-full bg-white" style={{ top: '25%', left: '80%', opacity: 0.4 }}></div>
          <div className="absolute w-28 h-28 rounded-full bg-white" style={{ top: '60%', left: '85%', opacity: 0.25 }}></div>
          <div className="absolute w-12 h-12 rounded-full bg-white" style={{ top: '75%', left: '30%', opacity: 0.35 }}></div>
          <div className="absolute w-32 h-32 rounded-full bg-white" style={{ top: '10%', left: '60%', opacity: 0.2 }}></div>
          <div className="absolute w-16 h-16 rounded-full bg-white" style={{ top: '65%', left: '5%', opacity: 0.3 }}></div>
          <div className="absolute w-24 h-24 rounded-full bg-white" style={{ top: '40%', left: '40%', opacity: 0.15 }}></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">BEST LESSON PLANS</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-2"></div>
          <p className="text-blue-200">Professional Teaching Resources</p>
        </div>
      </div>
      
      
      {/* PDF Viewers Container */}
      <div className="flex-grow container mx-auto px-4 py-4">
        {activeTab === 0 ? (
          // Side by side view
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfData.map((pdf, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
                {/* PDF Header */}
                <div className="bg-gray-100 p-3 flex justify-between items-center border-b">
                  <div className="flex items-center">
                    {pdf.icon}
                    <div className="ml-2">
                      <h2 className="font-semibold text-gray-800 text-lg">{pdf.title}</h2>
                      <p className="text-sm text-gray-600">{pdf.grade}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => toggleFullscreen(index === 0 ? viewer1Ref : viewer2Ref, index === 0 ? setIsFullscreen1 : setIsFullscreen2)}
                      className="p-2 rounded-md hover:bg-gray-200 text-gray-700"
                      aria-label="Toggle fullscreen"
                    >
                      {(index === 0 ? isFullscreen1 : isFullscreen2) ? <FaCompress /> : <FaExpand />}
                    </button>
                    
                    <a 
                      href={pdf.file} 
                      download
                      className="p-2 rounded-md hover:bg-gray-200 text-gray-700"
                      aria-label="Download PDF"
                    >
                      <FaDownload />
                    </a>
                  </div>
                </div>
                
                {/* PDF Viewer */}
                <div 
                  ref={index === 0 ? viewer1Ref : viewer2Ref} 
                  className="flex-grow bg-gray-200 relative"
                  style={{ height: "50vh" }}
                >
                  <iframe
                    src={pdf.file}
                    className="w-full h-full"
                    title={pdf.title}
                  />
                  
                  {/* Corner fold effect */}
                  <div className="absolute right-0 bottom-0 w-12 h-12 bg-gradient-to-tl from-gray-300 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Single PDF view
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* PDF Header */}
            <div className="bg-gray-100 p-4 flex justify-between items-center border-b">
              <div className="flex items-center">
                {pdfData[activeTab - 1].icon}
                <div className="ml-3">
                  <h2 className="font-semibold text-gray-800 text-xl">{pdfData[activeTab - 1].title}</h2>
                  <p className="text-sm text-gray-600">{pdfData[activeTab - 1].grade}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => toggleFullscreen(activeTab === 1 ? viewer1Ref : viewer2Ref, activeTab === 1 ? setIsFullscreen1 : setIsFullscreen2)}
                  className="p-2 rounded-md hover:bg-gray-200 text-gray-700"
                  aria-label="Toggle fullscreen"
                >
                  {(activeTab === 1 ? isFullscreen1 : isFullscreen2) ? <FaCompress /> : <FaExpand />}
                </button>
                
                <a 
                  href={pdfData[activeTab - 1].file} 
                  download
                  className="p-2 rounded-md hover:bg-gray-200 text-gray-700"
                  aria-label="Download PDF"
                >
                  <FaDownload />
                </a>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div 
              ref={activeTab === 1 ? viewer1Ref : viewer2Ref} 
              className="w-full bg-gray-200 relative"
              style={{ height: "70vh" }}
            >
              <iframe
                src={pdfData[activeTab - 1].file}
                className="w-full h-full"
                title={pdfData[activeTab - 1].title}
              />
              
              {/* Corner fold effect */}
              <div className="absolute right-0 bottom-0 w-16 h-16 bg-gradient-to-tl from-gray-300 to-transparent"></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Activities Documentation Header with hardcoded decorative elements */}
      <div className="relative py-8 text-center bg-navy-900 text-white overflow-hidden">
        {/* Hardcoded decorative dots */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-24 h-24 rounded-full bg-white" style={{ top: '20%', left: '15%', opacity: 0.25 }}></div>
          <div className="absolute w-16 h-16 rounded-full bg-white" style={{ top: '50%', left: '25%', opacity: 0.3 }}></div>
          <div className="absolute w-20 h-20 rounded-full bg-white" style={{ top: '30%', left: '70%', opacity: 0.35 }}></div>
          <div className="absolute w-28 h-28 rounded-full bg-white" style={{ top: '65%', left: '80%', opacity: 0.2 }}></div>
          <div className="absolute w-12 h-12 rounded-full bg-white" style={{ top: '70%', left: '35%', opacity: 0.3 }}></div>
          <div className="absolute w-32 h-32 rounded-full bg-white" style={{ top: '5%', left: '55%', opacity: 0.15 }}></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Activities Documentation</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-2"></div>
          <p className="text-blue-200">Professional Teaching Activities</p>
        </div>
      </div>
      
      {/* Campus Images Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Campus Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/34.png" 
              alt="In-Campus Activities" 
              width={600}
              height={600}
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-50"></div>
          </div>
          
          {/* Second Campus Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/35.png" 
              alt="Out-Campus Activities" 
              width={600}
              height={600}
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS */}
      <style jsx global>{`
        /* Custom color for your theme */
        .bg-navy-900 {
          background-color: #001B41;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}