import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Education from "../assets/Education.svg";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!phone) {
      setError("Phone number is required.");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    try {
      setError(null);
      setSuccess(null);
      setLoading(true);
      setOtpSent(true);
      setSuccess("OTP sent successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Failed to send OTP. Try again.");
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp) {
      setError("OTP is required.");
      return;
    }

    try {
      setError(null);
      setSuccess(null);
      setLoading(true);

      let a = await verifyOTP(phone, otp);
      localStorage.setItem("token-user", a.token);
      setSuccess("OTP Verified! Logging you in...");
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex h-[35rem] max-w-5xl mx-auto md:my-10">
      <div className="hidden md:flex w-1/2 justify-center items-center p-12 rounded-md bg-gray-50">
        <img 
          src={Education} 
          alt="Education illustration" 
          className="w-full h-auto h-full object-contain"
        />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center   p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl border border-purple-100 p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center text-purple-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-purple-600 text-sm">
            Please sign in to your account
          </p>
        </div>
        
        <div className="space-y-4">
          {/* Error and Success Messages */}
          <div className="text-center">
            <p className="text-red-500">{/* {error} */}</p>
            <p className="text-green-500">{/* {success} */}</p>
          </div>

          {/* Phone Input Group */}
          <div className="flex space-x-2">
            <select className="border border-purple-200 rounded-lg px-3 py-2 bg-purple-50 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 border border-purple-200 rounded-lg px-4 py-2 bg-purple-50 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* OTP Input */}
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border border-purple-200 rounded-lg px-4 py-2 bg-purple-50 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />

          {/* Action Buttons */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mb-3">
            Send OTP
          </button>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Verify OTP & Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center text-sm mt-6">
            <span className="text-purple-600">Don't have an account? </span>
            <a className="text-purple-800 font-medium hover:text-purple-900 cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;