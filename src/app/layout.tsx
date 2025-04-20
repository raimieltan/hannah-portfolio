import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import NavigationBar from "./components/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teaching Internship E-Portfolio | Hannah Faye A. Casquite",
  description: "Teaching Internship E-Portfolio for Hannah Faye A. Casquite, BEED 4-A at West Visayas State University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bgImageUrl = "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/480877918_1191945892290718_2370627197464526496_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmULZXRKECBu8dNsqRsB-s4IGqieC--CLggaqJ4L74Ijp8EvpfdsFOBgS6v5BI8DfS_0ua4WyIac0zNNFEOJHw&_nc_ohc=0YcaQtn3NK4Q7kNvwEQL7cc&_nc_oc=AdksmuopWAbGMsEbsicvyQ0D3kHgS1yI3N7pRQtULC5e2_liDifG0gX4hz7FqlJRPxDOiebJAvCyWZAGpJ44HbDi&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=DPLh7J1WpMfPAYoxWsbUiA&oh=00_AfEbFBxGtEP0XAP4cWAsxvhvyifol5DOvtW_xlxeNgij5w&oe=6807A6A1";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar - Client Component wrapper will be needed */}
        <header>
          <NavigationBar />
        </header>

        {/* Main content */}
        <main>
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-blue-900 text-white py-10 mt-auto relative">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-5"
            style={{ backgroundImage: `url(${bgImageUrl})` }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2 inline-block">TEACHING INTERNSHIP E-PORTFOLIO</h3>
                <p className="text-gray-300">
                  Bachelor of Elementary Education (BEED 4-A)<br />
                  West Visayas State University<br />
                  College of Education
                </p>

                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.023 10.023 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.937 9.937 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v4h-4v-4zm0-6h4v4h-4v-4zm0-6h4v4h-4V4zm6 12h4v4h-4v-4zm0-6h4v4h-4v-4zm0-6h4v4h-4V4z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-1/2">
                <div>
                  <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Navigation</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/professional-reading" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Professional Reading
                      </Link>
                    </li>
                    <li>
                      <Link href="/weekly-journal" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Weekly Journal
                      </Link>
                    </li>
                    <li>
                      <Link href="/ppst-domains" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        PPST Domains
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/teaching-philosophy" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Teaching Philosophy
                      </Link>
                    </li>
                    <li>
                      <Link href="/lp-documentation" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        LP and Documentations
                      </Link>
                    </li>
                    <li>
                      <a href="https://www.wvsu.edu.ph" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        WVSU Website
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hannah.casquite@example.com" className="text-gray-300 hover:text-white transition flex items-center">
                        <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Hannah Faye A. Casquite. All rights reserved.
              </p>

              <div className="mt-4 md:mt-0">
                <p className="text-gray-300 text-sm">
                  Created with Next.js and Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}