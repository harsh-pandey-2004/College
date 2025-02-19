import React, { useState } from "react";
import {
  Star,
  Search,
  Filter,
  ChevronDown,
  MapPin,
  GraduationCap,
  Users,
  Building,
} from "lucide-react";

const CollegeListingComponent = () => {
  const [selectedCategories, setSelectedCategories] = useState(["all"]);
  const [selectedRating, setSelectedRating] = useState(null);

  const colleges = [
    {
      id: 1,
      name: "Amity University",
      location: "Noida, Uttar Pradesh",
      rating: 4.2,
      reviewCount: 1245,
      image:
        "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fcard-image%2Fcard.webp&w=640&q=75",
      category: "Private",
      established: "1995",
      fees: "₹3-4 Lakhs/year",
      courses: ["B.Tech", "MBA", "BBA", "Law", "Fashion Design"],
      facilities: [
        "Sports Complex",
        "Smart Classrooms",
        "Research Labs",
        "Hostels",
      ],
      studentCount: "25,000+",
      placement: "85%",
    },
    {
      id: 2,
      name: "Delhi University",
      location: "New Delhi",
      rating: 4.8,
      reviewCount: 2189,
      image:
        "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fonline-manipal-jaipur%2Fcard-image%2Fcard.webp&w=640&q=75",
      category: "Government",
      established: "1922",
      fees: "₹20-30K/year",
      courses: ["B.A.", "B.Com", "B.Sc", "M.A.", "Ph.D"],
      facilities: [
        "Libraries",
        "Research Centers",
        "Sports Facilities",
        "Hostels",
      ],
      studentCount: "80,000+",
      placement: "78%",
    },
    {
      id: 3,
      name: "Maharaja Agrasen Institute of Technology",
      location: "Delhi",
      rating: 4.3,
      reviewCount: 892,
      image:
        "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Flovely-professional-university-online%2Fcard-image%2Fcard.webp&w=640&q=75",
      category: "Private",
      established: "1999",
      fees: "₹1.5-2.5 Lakhs/year",
      courses: ["B.Tech", "M.Tech", "BCA", "MCA"],
      facilities: ["Computer Labs", "Workshop", "Auditorium", "Cafeteria"],
      studentCount: "12,000+",
      placement: "82%",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating)
                ? "fill-purple-400 text-purple-400"
                : "text-purple-100"
            }`}
          />
        ))}
        <span className="text-sm text-purple-700 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Find Your Dream College
          </h1>
          <p className="text-purple-600 text-lg">
            Discover top universities and colleges in India
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-6 bg-white rounded-xl shadow-lg p-6 space-y-8 border border-purple-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search colleges..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-purple-900 mb-4">
                  Type
                </h3>
                <div className="space-y-3">
                  {["All", "Government", "Private", "Deemed"].map(
                    (category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                          checked={selectedCategories.includes(
                            category.toLowerCase()
                          )}
                          onChange={() => {}}
                        />
                        <span className="text-purple-700 group-hover:text-purple-900 text-sm">
                          {category}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="border-t border-purple-100 pt-6">
                <h3 className="text-base font-semibold text-purple-900 mb-4">
                  Courses
                </h3>
                <div className="space-y-3">
                  {[
                    "Engineering",
                    "Management",
                    "Medical",
                    "Arts",
                    "Science",
                  ].map((course) => (
                    <label
                      key={course}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-purple-700 group-hover:text-purple-900 text-sm">
                        {course}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-purple-100 pt-6">
                <h3 className="text-base font-semibold text-purple-900 mb-4">
                  Location
                </h3>
                <div className="space-y-3">
                  {["Delhi", "Noida", "All India"].map((location) => (
                    <label
                      key={location}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-purple-700 group-hover:text-purple-900 text-sm">
                        {location}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-2">
                  Top Colleges
                </h2>
                <p className="text-purple-600">
                  Explore India's leading educational institutions
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                Sort by
              </button>
            </div>

            <div className="space-y-6">
              {colleges.map((college) => (
                <div
                  key={college.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-purple-900 group-hover:text-purple-600 transition-colors mb-2">
                            {college.name}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-600 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>{college.location}</span>
                          </div>
                          <div className="flex items-center gap-4 mb-4">
                            {renderStars(college.rating)}
                            <span className="text-sm text-purple-600">
                              ({college.reviewCount} reviews)
                            </span>
                          </div>
                        </div>
                        <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
                          {college.category}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-purple-700">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-sm">
                            Placement: {college.placement}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-700">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">
                            Students: {college.studentCount}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-700">
                          <Building className="w-4 h-4" />
                          <span className="text-sm">
                            Est. {college.established}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-700">
                          <span className="text-sm font-medium">
                            Fees: {college.fees}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {college.courses.slice(0, 4).map((course, index) => (
                          <span
                            key={index}
                            className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                        {college.courses.length > 4 && (
                          <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm">
                            +{college.courses.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeListingComponent;
