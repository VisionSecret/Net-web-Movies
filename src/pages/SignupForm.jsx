import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Helper functions to validate email and password
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8; // Minimum 8 characters for a strong password
};

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate password
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Clear errors if validation passes
      navigate("/"); // Redirect to the welcome page or dashboard after signup
    }
  };

  return (
    <>
      <Header bgcolor="bg-black" />
      <div className="flex flex-col items-center w-full mx-auto justify-center lg:h-[90vh] border-t-[1px] border-zinc-800 bg-black">
        <div className="signupContent lg:w-2/6 mt-7 lg:mt-3 text-black p-7 lg:px-0">
          <h1 className="lg:text-3xl text-3xl font-medium mb-4 text-white">
            Create a password to start your membership.
          </h1>
          <p className="mb-4 lg: text-[4.5vw] leading-5 lg:text-[1vw] font-medium text-white">
            Just a few more steps and you're done! We hate paperwork, too.
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-full lg:w-[90%] max-w-md"
          >
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 rounded-md border outline-none border-gray-300 bg-white text-gray-800 ${
                  errors.email ? "border-red-500" : ""
                } focus:ring-2 focus:ring-red-600`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 rounded-md border border-gray-300 outline-none bg-white text-gray-800 ${
                  errors.password ? "border-red-500" : ""
                } focus:ring-2 focus:ring-red-600`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              <p className="text-gray-400 text-sm mt-2">
                Password must be at least 8 characters long.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Sign Up
            </button>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/loginForm" className="text-red-600 hover:underline">
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupForm;
