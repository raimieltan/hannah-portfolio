"use client"
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Images array from your provided data (removed the empty string at the end)
  const images = [
    "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/491001360_911907514301819_8065210147045753343_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ZclYz0thVzkQ7kNvwE_eJgm&_nc_oc=Adlc-KJSI-QgGZTWgY1ouCH8biqsQn3Vx-EPJIfhHwAd79ViqNCMtTQ5PMH9zJBfQZo&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&oh=03_Q7cD2AGbZ55QL11uux9sCZOboDOKoeKLqlbk1HEVYFZOnWgxEg&oe=682C5408",
    "https://scontent.fmnl8-5.fna.fbcdn.net/v/t1.15752-9/491025012_1294783895415859_8132940654696136478_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=j4seMG02tqAQ7kNvwHffz2r&_nc_oc=Adn9NgPkT-Em5kcpaa1qV5NBtpM4MGeSSZUUuMNR-3sxAIVjpv0DTUsUXqX8QPBM7JI&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&oh=03_Q7cD2AG_n-77OyPaRVVVx5az9Gyh4HvB-PmoNG3QknlJc_L-FA&oe=682C43CE",
    "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/491104951_588681164224965_3371254974811837130_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=f9duhboDQnIQ7kNvwH4YWGz&_nc_oc=AdmHo1dW_xbnmtPXTDGro63haK_0HA07EDgkMst_b4W8mpRAO6M-haY0Yv35YnXdPhc&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&oh=03_Q7cD2AGbi5sWUkKGAM70yOQjTIhxtFX1KEBFLkQkvF2-t9lywA&oe=682C435A",
    "https://scontent.fmnl40-2.fna.fbcdn.net/v/t1.15752-9/491024466_1190704922533232_6506303560509213083_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=2MRV1WP1R_EQ7kNvwGsf13c&_nc_oc=AdlD96ke1dq5KeCeeAW6ESdoB2zOdFF4N-ANdyUuRXrVWLjgNWWAExT14Tyq37wLTQg&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&oh=03_Q7cD2AFwL-e3qbMnJmIyCYdr_sjr9ofcTVTR6qYF8kLhXVlUUQ&oe=682C57FF",
    "https://scontent.fmnl40-2.fna.fbcdn.net/v/t1.15752-9/490222956_1642829519701667_2370886659095767514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=TZ5hyNeSTUcQ7kNvwE-khEg&_nc_oc=Adnp8Z0xuYYkqlBKBuHnhieYQ2ps03tFWI7_FR03SOFwdbHdCV8qDZDAZtKhP3HzTsM&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&oh=03_Q7cD2AFYaL9DTWs_nJQn0nhgb-bmWpxfIcQbQp-T5QC7xKleQA&oe=682C4937",
    "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.15752-9/490998999_1180842146639178_4488154068617917114_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=cRlBPZPWdfUQ7kNvwGZ06gM&_nc_oc=AdkoPL7B6tAfcddmc9b_dhoaRoX-0MLUBsHupdGv1Z5aJc8cwEjZjzNPfULABtggAcY&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&oh=03_Q7cD2AH2YVwUAP176_17jWiaAshp1JJkkMA-XHmeSSSpOEzs8w&oe=682C6CD0",
    "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.15752-9/491007429_667430232696927_3795062879625710871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=f-5vpJj_fFYQ7kNvwFehpjv&_nc_oc=AdkMTUw0HCpIWEdhVYjNiOHhFjnDs-znlsv4NNeChMif-oYnAN_TdwP9ko97NYgE5bw&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&oh=03_Q7cD2AF00GYWhAGNlKGDSh7az5wRW2tnsaOl9kNZjSbtYNKg0w&oe=682C575B",
    "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.15752-9/491000061_634165476098032_18990521560064396_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=58BRQOBxUFMQ7kNvwEZTeJD&_nc_oc=AdkZWRV2kb9H5YDnCGc6xEKk1hSpn7Vf-ClDf4QgIrfc6qa4_gWh6olbiMH4NhSspfA&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&oh=03_Q7cD2AFVtW7ZSujIbC1EONJ4NbiPNlIFCMIexzoh_a2gIJvYWg&oe=682C4E5F",
    "https://scontent.fmnl40-2.fna.fbcdn.net/v/t1.15752-9/490516928_1083383063825097_1030198442907183539_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=F0nsCDTUpfUQ7kNvwFQvgBI&_nc_oc=Adk7W9AOQdnqu_obnnlMVVxoXYW6nQjT6AVlvb0LpZ488Br9Pn05qSMZkrWRkbZhd8k&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&oh=03_Q7cD2AHQRtX5D-IE0gJvikkrnWBXAE7HFNJBixWKBklf7KOr4g&oe=682C7A61",
    "https://scontent.fmnl40-2.fna.fbcdn.net/v/t1.15752-9/491266587_643725538485941_2944254581622067424_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=aoVoCazUikAQ7kNvwEUC8v4&_nc_oc=AdkjVnAhaVl_BAYj-AKjjGQI2KC0zIU2jcJakGAwTU2jl7A4euNDMLL3-l5unuqvAeU&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&oh=03_Q7cD2AHZaSanNkm4N-VN83ihNj3NUi3cMcKSG9e3EU0N3MmVUg&oe=682C7259",
    "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.15752-9/491025903_957724772915226_1664964576645056709_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ktdYyNlrKU8Q7kNvwGEO2L0&_nc_oc=Adl0qUANA6pe6btG_RQAC594A9Phii9X9POQxmiuSs8Yc3uREDfZIIiKuowV9Mm1OSA&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&oh=03_Q7cD2AGEFFrtiJCwLXNatZn-ViDwga1nJxyHd8_XrLgf2RRG8Q&oe=682C43F0",
    "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.15752-9/490996941_1170749524375587_1683097223912441604_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=00jg8HJkNYIQ7kNvwGnCXKk&_nc_oc=AdkvVdVrEAv6Ipbh3vqUMPTIVjz7dXQMig5bB857wgL2hgCuh-pzQOyGgxGPmJKFB8w&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&oh=03_Q7cD2AEs8Jk4Oh5YYuAUKisSUpeXEyQ5oyemc3G1XmRXYG6xnA&oe=682C49A8",
    "https://scontent.fmnl40-2.fna.fbcdn.net/v/t1.15752-9/490999665_1956754268063807_3832948419330567610_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=hUlT8tLHagIQ7kNvwE-BNu8&_nc_oc=AdnzUEnmuFX-coz-f5lCTIF4FbeUNR-QNnc1FigBQPnef78B1hxKqJI6apQP155eLws&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&oh=03_Q7cD2AEGHM1LLtZ0TFkrkli5C0Y-PCRp1GZ6hZZ9SkoWmr2SqQ&oe=682C4C8F",
    "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.15752-9/491025024_649931884542200_2277345991108667393_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XWBDgoYlT98Q7kNvwG9RYUI&_nc_oc=AdkRk2EzOouyoSnHvZ1etYc-d68wK0IsXY8EclxM46lQ2GeKpWtvkw0mKf4_mfa9djI&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&oh=03_Q7cD2AEbzceOpnZZtH1n3zYptjk4fbrEbCItSLYcQrLyZEaDWA&oe=682C7959",
    "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.15752-9/491023186_1213551640495701_6326822656501569995_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=3vTSbUTdc1YQ7kNvwH28xpx&_nc_oc=AdkHaO5JL64vVwQY_PouCilV56TWybRf0Empvdl15Mkfbedts5lJ-we_ZWQjWogfiBI&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&oh=03_Q7cD2AFCRvo2l7S6gZouXZjTqSuDuU0Du7MzGQzZVlhlYHXsYw&oe=682C6D37"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

const goToSlide = (index: number): void => {
    setCurrentIndex(index);
};

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Student's Outputs</h1>
       
      </div>
      
      {/* Main Carousel */}
      <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center' : 'w-full'}`}>
        <div 
          className={`
            relative overflow-hidden 
            ${isFullscreen ? 'w-full h-full' : 'aspect-video max-h-[70vh] border-4 border-orange-400 rounded-lg shadow-xl mx-auto my-8'}
          `}
        >
          {/* Main Image */}
          <img 
            src={images[currentIndex]} 
            alt={`Gallery image ${currentIndex + 1}`} 
            className={`
              w-full h-full object-contain
              ${isFullscreen ? '' : 'max-h-[70vh]'}
            `}
          />

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-800 bg-opacity-80 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-800 bg-opacity-80 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Fullscreen Toggle */}
          <button 
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-blue-800 bg-opacity-80 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            <FaExpand className="text-xl" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-blue-900 bg-opacity-80 text-white px-3 py-1 rounded-lg shadow">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mx-auto max-w-6xl px-4 mb-10">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-blue-800 mb-4 text-center">Gallery Navigation</h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <div 
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  cursor-pointer overflow-hidden aspect-square rounded-md
                  ${currentIndex === index ? 'border-4 border-orange-400' : 'border border-gray-300 opacity-70 hover:opacity-100'}
                `}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}