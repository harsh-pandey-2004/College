import React, { useState, useMemo } from "react";
import { ArrowUpDown, BookOpen, Search } from "lucide-react";
const theme = {
  primary: "#7C3AED",
  secondary: "#ffffff",
  text: "#fff",
  accent: "#FF5733",
};
const CoursesTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const courses = [
    { name: "Online BCom", fee: "₹ 150000", type: "Commerce" },
    { name: "Online MA", fee: "₹ 130000", type: "Arts" },
    { name: "Online BBA", fee: "₹ 165000-₹ 225000", type: "Business" },
    {
      name: "Online MCA",
      fee: "₹ 170000-₹ 250000",
      type: "Computer Applications",
    },
    {
      name: "Online MBA",
      fee: "₹ 199000-₹ 299000",
      type: "Business Administration",
    },
    { name: "Online BA", fee: "₹ 99000-₹ 170000", type: "Arts" },
    { name: "Online MAJMC", fee: "₹ 170000", type: "Journalism" },
    { name: "Online MCom", fee: "₹ 120000", type: "Commerce" },
    { name: "Online BCA", fee: "₹ 225000", type: "Computer Applications" },
    {
      name: "Online Certificate Programme",
      fee: "₹ 118000",
      type: "Certificate",
    },
  ];

  // Get unique course types
  const courseTypes = ["all", ...new Set(courses.map((course) => course.type))];

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = [...courses];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (selectedType !== "all") {
      filtered = filtered.filter((course) => course.type === selectedType);
    }

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [courses, searchTerm, selectedType, sortConfig]);

  return (
    <div className="h-fit bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6  pb-12">
      <div className="w-full ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses</h1>
          <p className="text-xl text-gray-600">
            Explore online learning courses in Amity University Online
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 hover:border-violet-600 focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50 transition-colors duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Course Type Filter */}
            <div className="md:w-64">
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:border-violet-600 focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50 bg-white transition-colors duration-200"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {courseTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => requestSort("name")}
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen
                        className="w-5 h-5"
                        style={{ color: theme.primary }}
                      />
                      <span className="font-semibold text-gray-900">
                        Course Name
                      </span>
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => requestSort("type")}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">Type</span>
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() => requestSort("fee")}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">
                        Fee Structure
                      </span>
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right">
                    <span className="font-semibold text-gray-900">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAndSortedCourses.map((course, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">
                        {course.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{course.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{course.fee}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        className="inline-flex items-center space-x-2 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                        style={{ background: theme.primary }}
                      >
                        <span>View Details</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTable;
