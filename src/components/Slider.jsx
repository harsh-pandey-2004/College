import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Users,
  Send,
} from "lucide-react";
import AdmissionProcess from "./AdmissionSteps";
import SalaryStats from "./Stats";
import CoursesTable from "./CourseCard";
import AboutUs from "./Aboutus";

const StatCard = () => <SalaryStats />;
const About = () => (
  <div className="space-y-8">
    <AboutUs />
  </div>
);
const Courses = () => <CoursesTable />;
const Eligibility = () => <AdmissionProcess />;

const UniversityPortal = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    {
      id: "About",
      label: "About",
      icon: Users,
      component: About,
    },
    {
      id: "Addmission Process",
      label: "Admission Process",
      icon: BookOpen,
      component: Courses,
    },
    {
      id: "Course Fee",
      label: "Course Fee",
      icon: GraduationCap,
      component: Eligibility,
    },
    {
      id: "Stats",
      label: "Stats",
      icon: Send,
      component: StatCard,
    },
  ];

  const ActiveComponent =
    menuItems.find((item) => item.id === activeSection)?.component || About;

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-white shadow-lg hover:bg-purple-50 transition-all duration-300"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-purple-600" />
          ) : (
            <Menu size={24} className="text-purple-600" />
          )}
        </button>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-purple-900/10 backdrop-blur-sm transition-all duration-300 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-white/95 backdrop-blur-md  transition-all duration-500 ease-out z-20
          lg:sticky lg:translate-x-0 lg:w-72 
          flex flex-col justify-start items-stretch pt-20
          
          
          ${
            isMobileMenuOpen
              ? "translate-x-0 w-64"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="h-full p-6 overflow-y-auto">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full px-4 py-3.5 flex items-center space-x-3 rounded-xl
                    transition-all duration-300 group relative
                    ${
                      isActive
                        ? "bg-purple-600 text-white font-medium translate-x-2"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                    }
                  `}
                >
                  <div
                    className={`
                    p-1.5 rounded-lg transition-all duration-300
                    ${
                      isActive
                        ? "bg-purple-500"
                        : "bg-purple-100/50 group-hover:bg-purple-100"
                    }
                  `}
                  >
                    <Icon
                      size={18}
                      className={`transition-transform duration-300
                        ${isActive ? "text-white" : "text-purple-500"}
                      `}
                    />
                  </div>
                  <span className="text-base font-medium text-nowrap">
                    {item.label}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`ml-auto transition-all duration-300
                      ${
                        isActive
                          ? "opacity-100 text-white translate-x-0"
                          : "opacity-0 -translate-x-4 text-purple-400"
                      }
                    `}
                  />
                  {isActive && (
                    <div className="absolute inset-y-0 -left-6 w-1 bg-purple-600 rounded-r-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-6">
        <div className="max-w-full p-8">
          <div
            className={`
               p-8
              transition-all duration-500 ease-out      
            `}
          >
            <div className="relative overflow-hidden">
              <div
                key={activeSection}
                className={`
                  transition-all duration-500 ease-out
                  ${
                    mounted
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }
                `}
              >
                <ActiveComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPortal;
