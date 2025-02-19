import React, { useState } from "react";

export const ProgramCard = ({ theme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-[80vh] group">
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage:
            'url("https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fcard-image%2Fcard.webp&w=640&q=75")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        {/* <div className="absolute inset-0 bg-black/10 "></div> */}
      </div>

      <div className="relative  flex items-center  px-4 py-8 h-full">
        <div className="relative  rounded-xl  overflow-hidden transition-all duration-300  mx-auto w-full transform text-white max-w-6xl">
          <div className="relative p-6 md:p-8 text-white max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 text-white">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Online", "On Campus"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md bg-white"
                      style={{
                        // backgroundColor: `${theme.primary}20`,
                        color: "purple",
                        borderLeft: `3px solid ${theme.primary}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="space-y-3"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h3 className="text-lg font-semibold text-white flex items-center gap-3 mb-5">
                    <div className="relative text-white">
                      <img
                        src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Ficon%2Ficon.webp&w=96&q=75"
                        alt="University Logo"
                        className="rounded-full ring-offset-2 bg-white p-3 h-20 w-20"
                        // style={{ ringColor: theme.primary }}
                      />
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-white"></span>
                    </div>
                    <span className="text-xl md:text-4xl font-bold text-white leading-tight ">
                      Amity University
                    </span>
                  </h3>
                  <span className="text-xl md:text-xl font-bold text-white leading-tight mt-4">
                    Noida, Uttar Pradesh
                  </span>
                  <p className="text-white text-md font-medium">
                    NIRF Ranking: 49 (Overall Category)
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <button
              className="w-1/2 py-4 px-6 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg mb-8 relative overflow-hidden group"
              style={{ backgroundColor: theme.primary }}
            >
              <span className="relative z-10">Visit Programme Website</span>
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
