import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { registerUser } from "../network/auth";
import Education from "../assets/Education.svg";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [stream, setStream] = useState("");
  const [level, setLevel] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      //   await registerUser(name, email, phone, stream, level, password);
      setSuccess("Registration Successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError("Registration Failed! Please try again.");
    }
  };

  return (
    <div className="flex h-[35rem] max-w-5xl mx-auto md:my-10 ">
      <div className="hidden md:flex w-1/2 justify-center items-center p-12 rounded-md bg-gray-50">
        <img
          src={Education}
          alt="Education illustration"
          className="w-full  h-full object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-purple-100">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-2">
              Welcome!
            </h2>
            <p className="text-purple-600">
              Create your account to get started
            </p>
          </div>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-2 border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-2 border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
            />

            <div className="flex space-x-2">
              <select className="border-2 border-purple-200 rounded-lg px-3 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 border-2 border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
            />

            <button className="w-full bg-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]">
              Create Account
            </button>

            <div className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <span className="text-purple-600 hover:text-purple-700 cursor-pointer font-medium">
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
