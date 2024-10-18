import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Sample validation logic for the email and password
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8; // Password must be at least 8 characters
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Validate the email and password
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Simulate login success/failure (replace with real login logic)
    if (email === "test@example.com" && password === "password123") {
      // Redirect to dashboard/home page on successful login
      navigate("/");
    } else {
      // Show error message if login fails
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 bg-black border-zinc-100 flex-col justify-center pt-3 pb-6 lg:px-8">
        <Header />
        <div className="loginContent px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoFocus
                    autoComplete="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-800 font-medium outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-200"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to="/404Page"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password here"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-700 font-medium px-2.5 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-200">
              Not a member?{" "}
              <Link
                to="/signupForm"
                className="font-semibold leading-6 text-gray-200 hover:text-white ml-1"
              >
                Start a 14 day free trial
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
