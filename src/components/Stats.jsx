import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, BriefcaseIcon } from 'lucide-react';
const theme = {
  primary: "#7C3AED",
  secondary: "#ffffff",
  text: "#fff",
  accent: "#FF5733",
};
const StatCounter = ({ end, duration = 2000, prefix = "", isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span>{prefix}{count}</span>;
};

const SalaryStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering the animation
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative w-full my-16 p-1 bg-gradient-to-r from-[#7C3AED]/60 to-[#7C3AED]/30 rounded-2xl backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl" />
      <div className="absolute inset-0 border border-[#7C3AED]/20 rounded-2xl" />
      
      {/* Content container */}
      <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Average Salary */}
          <div className={`
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-xl transition-all duration-300 group-hover:from-white/40 group-hover:to-white/20" />
              <div className="relative p-6 rounded-xl border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#7C3AED]/20 rounded-lg mr-3">
                    <TrendingUp className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-lg font-medium text-white/90">Average Salary</h3>
                </div>
                <p className="text-4xl font-bold text-white group-hover:text-white/90 transition-colors">
                  ₹ <StatCounter end={18} isVisible={isVisible} /> LPA
                </p>
              </div>
            </div>
          </div>

          {/* Highest Salary */}
          <div className={`
            transform transition-all duration-1000 delay-300 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-xl transition-all duration-300 group-hover:from-white/40 group-hover:to-white/20" />
              <div className="relative p-6 rounded-xl border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#7C3AED]/20 rounded-lg mr-3">
                    <BriefcaseIcon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-lg font-medium text-white/90">Highest Salary</h3>
                </div>
                <p className="text-4xl font-bold text-white group-hover:text-white/90 transition-colors">
                  ₹ <StatCounter end={25} isVisible={isVisible} /> LPA
                </p>
              </div>
            </div>
          </div>

          {/* Interview Opportunities */}
          <div className={`
            transform transition-all duration-1000 delay-500 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-xl transition-all duration-300 group-hover:from-white/40 group-hover:to-white/20" />
              <div className="relative p-6 rounded-xl border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#7C3AED]/20 rounded-lg mr-3">
                    <Users className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-lg font-medium text-white/90">Interview Opportunities</h3>
                </div>
                <p className="text-4xl font-bold text-white group-hover:text-white/90 transition-colors">
                  <StatCounter end={3} isVisible={isVisible} />x
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryStats;