import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Animated Top button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-8 right-8 transition-all duration-300 ease-in-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}
          ${isHovered ? 'scale-110' : 'scale-100'}`}
      >
        <div className="bg-white rounded-full p-4 shadow-lg group hover:bg-[#7C3AED] transition-colors duration-300 flex">
          <Rocket 
            className={`w-8 h-8 transition-all duration-300
              ${isHovered ? 'text-white transform -translate-y-1' : 'text-[#7C3AED]'}`}
          />
        </div>
      </button>

      {/* Main footer content with watermark */}
      <div className="bg-[#7C3AED] text-white pt-16 pb-8 relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 overflow-hidden pointer-events-none">
          <span className="text-white text-9xl font-bold transform -rotate-12 select-none" style={{ fontSize: "20rem" }}>
            Degreefyd
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* About section */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-4">About Degreefyd</h3>
              <ul className="space-y-2">
                {['About Degreefyd', 'AI Student Advisor', 'Our Marketing Services', 'Careers', 'Contact us'].map((item, index) => (
                  <li key={index} className="transition-all duration-300 hover:translate-x-2">
                    <a href="#" className="hover:text-white/80 relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our websites section */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-4">Our websites</h3>
              <ul className="space-y-2">
                {[
                  'Bachelorsportal', 'Mastersportal', 'PhDportal', 'DistanceLearningportal',
                  'ShortCoursesportal', 'AdmissionTestportal', 'EnglishTestportal', 'StudentInsuranceportal'
                ].map((item, index) => (
                  <li key={index} className="transition-all duration-300 hover:translate-x-2">
                    <a href="#" className="hover:text-white/80 relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nationality & currency section */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-4">Nationality & currency</h3>
              <div className="inline-flex items-center border border-white/20 rounded px-4 py-2 mb-6 hover:bg-white/10 transition-colors duration-300">
                <span className="mr-2">IN</span>|<span className="ml-2">INR</span>
              </div>

              <h3 className="text-xl font-semibold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                {['facebook', 'linkedin', 'youtube'].map((platform, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="transition-all duration-300 hover:text-white/80"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {platform === 'facebook' && (
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      )}
                      {platform === 'linkedin' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      )}
                      {platform === 'youtube' && (
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      )}
                    </svg>
                  </a>
                ))}
              </div>

              <button className="mt-6 border border-white/20 rounded px-4 py-2 hover:bg-white/10 transition-all duration-300">
                Add to home screen
              </button>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0 transition-all duration-300">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-2xl font-bold">Degree<span className="text-white/80">Fyd</span></span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {['Terms of Use', 'Privacy & Cookie statement', 'Disclaimer'].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="hover:text-white/80 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8 text-sm text-white/80">
              Crafted with ❤️ by our team of 35 nationalities | Copyright © 2007-2025 Degreefyd B.V.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;