// "use client"
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // Project data with descriptions
// const projects = [

//   {
//     id: 4,
//     image: '/4.png',
//     title: 'Bugal Sang Kwarto Distrito',
//     description: 'Cultural heritage project highlighting local traditions and community.',
//     link: '#'
//   },
//   {
//     id: 5,
//     image: '/5.png',
//     title: 'Home Power Event',
//     description: 'Bring HOME the POWER with our promotional event featuring guest ambassadors.',
//     link: '#'
//   },
//   {
//     id: 6,
//     image: '/6.png',
//     title: 'Honda City Campaign',
//     description: 'TAKE BACK THE CITY with the all-new Honda City marketing campaign.',
//     link: '#'
//   },
//   {
//     id: 7,
//     image: '/7.png',
//     title: 'Project Seven',
//     description: 'Description for Project Seven will appear on hover.',
//     link: '#'
//   },
//   {
//     id: 8,
//     image: '/8.png',
//     title: 'Project Eight',
//     description: 'Description for Project Eight will appear on hover.',
//     link: '#'
//   },
//   {
//     id: 9,
//     image: '/9.png',
//     title: 'Project Nine',
//     description: 'Description for Project Nine will appear on hover.',
//     link: '#'
//   }
// ];

// const WorksGrid = () => {
//   const [hoveredProject, setHoveredProject] = useState(null);

//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center mb-12">
//           <div className="w-16 h-16 border-2 border-blue-900 rounded-full flex items-center justify-center mr-6">
//             <div className="w-8 h-8 bg-blue-900 rounded-full"></div>
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 tracking-wider">OUR WORKS</h2>
//           <div className="flex-1 h-px bg-gray-300 ml-6"></div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {projects.map((project) => (
//             <div 
//               key={project.id}
//               className="relative overflow-hidden aspect-video"
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <Link href={project.link}>
//                 <div className="w-full h-full">
//                   <Image 
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 hover:scale-105"
//                   />
                  
//                   {/* Overlay that appears on hover */}
//                   <div 
//                     className={`absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
//                       hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   >
//                     <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-sm md:text-base text-gray-100">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorksGrid;