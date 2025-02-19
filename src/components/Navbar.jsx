import React, { useState } from "react";
import { Search, Heart, MessageCircle, User } from "lucide-react";

const Navbar = ({ theme = { primary: "#6366F1" } }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navItems = ["Explore", "Decide", "Apply"];
  const actionButtons = [
    { icon: Heart, label: "Wishlist" },
    { icon: MessageCircle, label: "Chat" },
    { icon: User, label: "Profile" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-baseline">
                <span 
                  className="text-3xl font-bold tracking-tight transition-all duration-300 group-hover:opacity-90"
                  style={{ color: theme.primary }}
                >
                  DegreeFyd
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex ml-12">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium relative group py-2"
                  >
                    {item}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: theme.primary }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Search and Actions Section */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <div
                className={`flex rounded-lg transition-all duration-300 ${
                  isSearchFocused ? "ring-2" : "hover:ring-1"
                }`}
                style={{ ringColor: theme.primary }}
              >
                <input
                  type="text"
                  placeholder="What to study?"
                  className="w-40 lg:w-48 px-4 py-2.5 border-y border-l border-gray-300 rounded-l-lg text-sm focus:outline-none focus:border-violet-500"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  style={{ 
                    '--tw-ring-color': 'transparent',
                    '--tw-ring-offset-width': '0px'
                  }}
                />
                <input
                  type="text"
                  placeholder="Where to study?"
                  className="w-40 lg:w-48 px-4 py-2.5 border border-gray-300 text-sm focus:outline-none focus:border-violet-500"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  style={{ 
                    '--tw-ring-color': 'transparent',
                    '--tw-ring-offset-width': '0px'
                  }}
                />
                <button
                  className="px-4 rounded-r-lg transition-all duration-300 hover:opacity-90 flex items-center justify-center"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {actionButtons.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="group relative p-3 hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white">
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="What to study?"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-500"
              style={{ 
                '--tw-ring-color': 'transparent',
                '--tw-ring-offset-width': '0px'
              }}
            />
            <input
              type="text"
              placeholder="Where to study?"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-violet-500"
              style={{ 
                '--tw-ring-color': 'transparent',
                '--tw-ring-offset-width': '0px'
              }}
            />
            <button
              className="w-full py-2.5 rounded-lg text-white transition-all duration-300 hover:opacity-90 flex items-center justify-center space-x-2"
              style={{ backgroundColor: theme.primary }}
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>

          <div className="space-y-1 pt-2">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex justify-around pt-4 border-t border-gray-200">
            {actionButtons.map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex flex-col items-center p-3 text-gray-600 hover:text-gray-900"
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;