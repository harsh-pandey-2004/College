// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProgramCard } from "./pages/HomePage";
import Aboutus from "./components/Aboutus";
import CoursesGrid from "./components/CourseCard";
import AdmissionProcess from "./components/AdmissionSteps";
import SalaryStats from "./components/Stats";
import Footer from "./components/Footer";
import UniversityPortal from "./components/Slider";
import ReviewComponent from "./components/Comments";
import CourseListingComponent from "./pages/CourseListing";
import LoginForm from "./components/Login";
import RegistrationForm from "./components/Register";
import BlogGrid from "./components/Blog";

const defaultTheme = {
  primary: "#7C3AED",
  secondary: "#ffffff",
  text: "#fff",
  accent: "#FF5733",
};

// Create HomePage component with all sections
const HomePage = () => {
  return (
    <>
      <ProgramCard theme={defaultTheme} />
      <UniversityPortal />
      <Aboutus />
      <CoursesGrid />
      <AdmissionProcess />
      <SalaryStats />
      <ReviewComponent />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar theme={defaultTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/courseListing" element={<CourseListingComponent />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/blog" element={<BlogGrid />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
