import React from "react";
import { ArrowRight, Award, Globe, BookOpen, Users } from "lucide-react";
const theme = {
  primary: "#7C3AED",
  secondary: "#ffffff",
  text: "#fff",
  accent: "#FF5733",
};
const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br   py-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex text-sm">
          <a
            href="#"
            className="text-black hover:text-purple-600 dark:text-black dark:hover:text-purple-400"
          >
            All studies
          </a>
          <span className="mx-2 text-black">/</span>
          <a
            href="#"
            className="text-black hover:text-purple-600 dark:text-black dark:hover:text-purple-400"
          >
            Production and Manufacturing Engineering
          </a>
          <span className="mx-2 text-black">/</span>
          <a
            href="#"
            className="text-black hover:text-purple-600 dark:text-black dark:hover:text-purple-400"
          >
            Mechanical and Manufacturing Engineering
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center mb-16">
          <div className="md:w-full mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#7C3AED] dark:text-[#7C3AED]">
              Amity University Online
            </h1>
            <p className="text-black dark:text-black leading-relaxed mb-8 text-lg">
              The Amity Education Group is a not-for-profit organization that
              was started in 1986 by the Chauhan family. Today, the University
              has a presence in more than 11 countries with over 1,75,000
              students. To cater to the educational needs of a larger segment of
              individuals, Amity took the initiative to offer education through
              the online mode. Thus, Amity University became the first
              university in India to gain approval from the UGC to offer online
              degrees in 2009. To ensure that students make the most out of
              their online learning experience, the university has set up a
              one-of-its-kind platform, AMIGO, that takes care of all the
              study-related needs of students. With its innovative thinking and
              futuristic approach, Amity University is closing the gaps in
              education by making quality higher education accessible to all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
