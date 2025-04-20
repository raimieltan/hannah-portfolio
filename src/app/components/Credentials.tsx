"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Credentials = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Handle closing modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setCurrentImageIndex(0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (event: any) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage]);

  const documents = [
    {
      id: 1,
      title: "Curriculum Vitae",
      description: "Professional background, education, and teaching experience",
      image: "/7.png",
      type: "CV"
    },
    {
      id: 2,
      title: "Teaching Certificates",
      description: "Official certifications and professional accreditations",
      images: ["/8.png", "/9.png"],
      imageLabels: ["Certificate of Completion - In Campus", "Certificate of Completion - Off Campus"],
      type: "Certificates"
    }
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextImage = () => {
    if (selectedImage?.images) {
      setCurrentImageIndex(prev => (prev < selectedImage.images.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <section className="py-16 relative">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-15"
        style={{ backgroundImage: "url(https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/480877918_1191945892290718_2370627197464526496_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmULZXRKECBu8dNsqRsB-s4IGqieC--CLggaqJ4L74Ijp8EvpfdsFOBgS6v5BI8DfS_0ua4WyIac0zNNFEOJHw&_nc_ohc=0YcaQtn3NK4Q7kNvwEQL7cc&_nc_oc=AdksmuopWAbGMsEbsicvyQ0D3kHgS1yI3N7pRQtULC5e2_liDifG0gX4hz7FqlJRPxDOiebJAvCyWZAGpJ44HbDi&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=DPLh7J1WpMfPAYoxWsbUiA&oh=00_AfEbFBxGtEP0XAP4cWAsxvhvyifol5DOvtW_xlxeNgij5w&oe=6807A6A1)" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Credentials & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-800 max-w-2xl mx-auto">
            View my professional qualifications, certifications, and curriculum vitae. 
            Click on any document to view it in full size.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              onClick={() => {
                setSelectedImage(doc);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative h-64 overflow-hidden border-b border-gray-100">
                {doc.image ? (
                  <Image 
                    src={doc.image}
                    alt={doc.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                ) : doc.images && (
                  <Image 
                    src={doc.images[0]}
                    alt={doc.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                    {doc.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">{doc.title}</h3>
                  {doc.images && doc.images.length > 1 && (
                    <p className="text-white text-sm mt-1">Contains {doc.images.length} documents</p>
                  )}
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <button 
                  className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition flex justify-center items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(doc);
                    setCurrentImageIndex(0);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  View Document{doc.images && doc.images.length > 1 ? 's' : ''}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for full-size image view - Fixed z-index and positioning */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
          <div 
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-hidden"
            style={{ zIndex: 10000 }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-20">
              <h3 className="text-xl font-semibold text-gray-900">
                {selectedImage.images ? 
                  `${selectedImage.title} (${currentImageIndex + 1}/${selectedImage.images.length}) - ${selectedImage.imageLabels?.[currentImageIndex] || ''}` : 
                  selectedImage.title
                }
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Body with Image - Scrollable */}
            <div className="overflow-auto" style={{ maxHeight: 'calc(95vh - 8rem)' }}>
              <div className="p-4 flex justify-center">
                <div className="relative">
                  <Image
                    src={selectedImage.images ? selectedImage.images[currentImageIndex] : selectedImage.image}
                    alt={selectedImage.title}
                    width={800}
                    height={1000}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-4 sticky bottom-0 bg-white z-20 flex justify-between">
              {/* Navigation controls for multiple images */}
              {selectedImage.images && selectedImage.images.length > 1 ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                    className={`px-3 py-1 rounded ${currentImageIndex === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'} transition flex items-center`}
                  >
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  <span className="text-gray-600">
                    {currentImageIndex + 1} of {selectedImage.images.length}
                  </span>
                  <button
                    onClick={handleNextImage}
                    disabled={currentImageIndex === selectedImage.images.length - 1}
                    className={`px-3 py-1 rounded ${currentImageIndex === selectedImage.images.length - 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'} transition flex items-center`}
                  >
                    Next
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div></div> // Empty div to maintain spacing
              )}
              
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Credentials;