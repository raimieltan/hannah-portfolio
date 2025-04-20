"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaBookOpen, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';
import Carousel from '@/app/components/Carousel';

export default function Domains() {
  const bgImageUrl = "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/480877918_1191945892290718_2370627197464526496_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmULZXRKECBu8dNsqRsB-s4IGqieC--CLggaqJ4L74Ijp8EvpfdsFOBgS6v5BI8DfS_0ua4WyIac0zNNFEOJHw&_nc_ohc=0YcaQtn3NK4Q7kNvwEQL7cc&_nc_oc=AdksmuopWAbGMsEbsicvyQ0D3kHgS1yI3N7pRQtULC5e2_liDifG0gX4hz7FqlJRPxDOiebJAvCyWZAGpJ44HbDi&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=DPLh7J1WpMfPAYoxWsbUiA&oh=00_AfEbFBxGtEP0XAP4cWAsxvhvyifol5DOvtW_xlxeNgij5w&oe=6807A6A1";

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* Header Banner */}
      <HeroSection src={"/domains.png"} />

      {/* Domain 1 Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-white shadow-md">
        <div className="w-full mx-auto">
          {/* Domain Header */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-blue-900 mb-2 px-6 py-2 border-b-4 border-orange-400">Domain 1</h2>
            <h3 className="text-2xl text-blue-800 mt-2">Content Knowledge and Pedagogy</h3>
          </div>

          {/* Domain Image */}
          <div className="flex justify-center w-full mx-auto">
            <div className="w-1/2 border border-blue-300 rounded-lg overflow-hidden">
              <Image
                src="/26.png"
                alt="Domain 1"
                layout='responsive'
                width={300}
                height={300}
                className="object-contain border border-red-300"
              />
            </div>
          </div>

          {/* Lesson Plans Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">Lesson Plans</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(num => (
                <div key={num} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl border border-gray-200">
                  <div className="h-64 bg-gray-200 relative">
                    <iframe
                      src={`/AP-LESSON-${num}.pdf`}
                      className="w-full h-full"
                      title={`AP lesson ${num}`}
                    />
                  </div>
                  <div className="p-4 border-t-4 border-orange-400">
                    <h4 className="text-lg font-bold text-blue-800">Lesson Plan #{num}</h4>
                    <p className="text-gray-600 mt-2">Araling Panlipunan</p>
                    <div className="flex justify-end mt-2">
                      <a
                        href={`/AP-LESSON-${num}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-700 transition"
                      >
                        <FaBookOpen className="mr-1" /> View PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Domain 2 Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-white shadow-md">
        <div className="w-full mx-auto">
          {/* Domain Header */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-blue-900 mb-2 px-6 py-2 border-b-4 border-orange-400">Domain 2</h2>
            <h3 className="text-2xl text-blue-800 mt-2">Learning Environment</h3>
          </div>

          {/* Domain Image */}
          <div className="flex justify-center w-full mx-auto">
            <div className="w-1/2 border border-blue-300 rounded-lg overflow-hidden">
              <Image
                src="/27.png"
                alt="Domain 1"
                layout='responsive'
                width={300}
                height={300}
                className="object-contain border border-red-300"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Domain 3 Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-white shadow-md">
        <div className="w-full mx-auto">
          {/* Domain Header */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-blue-900 mb-2 px-6 py-2 border-b-4 border-orange-400">Domain 3</h2>
            <h3 className="text-2xl text-blue-800 mt-2">Diversity of Learners</h3>
          </div>

          {/* Domain Image */}
          <div className="flex justify-center w-full mx-auto">
            <div className="w-1/2 border border-blue-300 rounded-lg overflow-hidden">
              <Image
                src="/28.png"
                alt="Domain 3"
                layout='responsive'
                width={300}
                height={300}
                className="object-contain border border-red-300"
              />
            </div>
          </div>

        </div>
      </div>



      {/* Domain 4 Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-white shadow-md">
        <div className="w-full mx-auto">
          {/* Domain Header */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-blue-900 mb-2 px-6 py-2 border-b-4 border-orange-400">Domain 4</h2>
            <h3 className="text-2xl text-blue-800 mt-2">Curriculum and Planning</h3>
          </div>

          {/* Domain Image */}
          <div className="flex justify-center w-full mx-auto">
            <div className="w-1/2 border border-blue-300 rounded-lg overflow-hidden">
              <Image
                src="/29.png"
                alt="Domain 1"
                layout='responsive'
                width={300}
                height={300}
                className="object-contain border border-red-300"
              />
            </div>
          </div>

          {/* Lesson Plans Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">Instructional Materials</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['MUSIC', 'ART', 'HEALTH'].map(num => (
                <div key={num} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl border border-gray-200">
                  <div className="h-64 bg-gray-200 relative">
                    <iframe
                      src={`/2${num}-PRESENTATION.pdf`}
                      className="w-full h-full"
                      title={`Domain 4 presentation`}
                    />
                  </div>
                  <div className="p-4 border-t-4 border-orange-400">
                    <h4 className="text-lg font-bold text-blue-800">{num} presentation</h4>
                    <p className="text-gray-600 mt-2">Domain 4</p>
                    <div className="flex justify-end mt-2">
                      <a
                        href={`/2${num}-PRESENTATION.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-700 transition"
                      >
                        <FaBookOpen className="mr-1" /> View PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Domain 5 Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-white shadow-md">
        <div className="w-full mx-auto">
          {/* Domain Header */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-blue-900 mb-2 px-6 py-2 border-b-4 border-orange-400">Domain 5</h2>
            <h3 className="text-2xl text-blue-800 mt-2">Assessment and Reporting</h3>
          </div>

          {/* Domain Image */}
          <div className="flex justify-center w-full mx-auto">
            <div className="w-1/2 border border-blue-300 rounded-lg overflow-hidden">
              <Image
                src="/30.png"
                alt="Domain 1"
                layout='responsive'
                width={300}
                height={300}
                className="object-contain border border-red-300"
              />
            </div>
          </div>

          {/* Lesson Plans Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">Assessment Used in Demo Teaching</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['AP', 'AP-LP-2', 'AP-LP3', 'MUSIC', 'HEALTH', 'ART'].map(num => (
                <div key={num} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl border border-gray-200">
                  <div className="h-64 bg-gray-200 relative">
                    <iframe
                      src={`/domain-5/${num}-EVALUATION.pdf`}
                      className="w-full h-full"
                      title={`Domain 5 Assessments`}
                    />
                  </div>
                  <div className="p-4 border-t-4 border-orange-400">
                    <h4 className="text-lg font-bold text-blue-800">{num} Assessment</h4>
                    <p className="text-gray-600 mt-2">Domain 5</p>
                    <div className="flex justify-end mt-2">
                      <a
                        href={`/domain-5/${num}-EVALUATION.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-700 transition"
                      >
                        <FaBookOpen className="mr-1" /> View PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Lesson Plans Section */}
          <div className="mt-6">

            <Carousel />
          </div>
        </div>
      </div>


      {/* Domain 6 Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-white shadow-md">
        <div className="w-full mx-auto">
          {/* Domain Header */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-blue-900 mb-2 px-6 py-2 border-b-4 border-orange-400">Domain 6</h2>
            <h3 className="text-2xl text-blue-800 mt-2">Community Linkages and Professional Engagement</h3>
          </div>

          {/* Domain Image */}
          <div className="flex justify-center w-full mx-auto">
            <div className="w-1/2 border border-blue-300 rounded-lg overflow-hidden">
              <Image
                src="/31.png"
                alt="Domain 3"
                layout='responsive'
                width={300}
                height={300}
                className="object-contain border border-red-300"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Domain 7 Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-white shadow-md">
        <div className="w-full mx-auto">
          {/* Domain Header */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-3xl font-bold text-blue-900 mb-2 px-6 py-2 border-b-4 border-orange-400">Domain 7</h2>
            <h3 className="text-2xl text-blue-800 mt-2">Personal Growth and Professional Development</h3>
          </div>

          {/* Domain Image */}
          <div className="flex justify-center w-full mx-auto">
            <div className="w-1/2 border border-blue-300 rounded-lg overflow-hidden">
              <Image
                src="/32.png"
                alt="Domain 3"
                layout='responsive'
                width={300}
                height={300}
                className="object-contain border border-red-300"
              />
            </div>
          </div>

        </div>
      </div>
      {/* Footer */}
    </div>
  );
}
