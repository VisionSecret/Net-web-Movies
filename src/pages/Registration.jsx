import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/signupForm");
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-[60vh] sm:min-h-screen w-full mx-auto">
        <div className="content sm:w-1/4 flex flex-col justify-between px-11 lg:px-0">
          <img className="w-fit h-16 sm:h-20 mb-10" src="/images/pageLogo/devicesLogo.png" alt="" />
          <h1 className="text-3xl font-bold sm:text-center text-zinc-600 mb-6">
            Finish setting up your account
          </h1>
          <p className="mb-5 text-lg sm:text-center font-sans font-medium text-zinc-700 leading-5">
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </p>
          <button
            onClick={handleRegisterClick}
            className="bg-red-600 hover:bg-red-700 text-white text-2xl font-semibold py-4 px-4 rounded-md transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
