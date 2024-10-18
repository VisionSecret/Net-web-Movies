import React from "react";
import "remixicon/fonts/remixicon.css";
import Button from "./Button";
import Input from "./Input";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

const Navbar = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form's default submission behavior
    navigate("/loginForm"); // Navigate to the login form page
  };

  console.log(hero);

  return (
    <div
      className="hero relative min-h-[80vh] sm:h-[80vh] md:h-screen bg-cover bg-top"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75">
        <Header />
        <div className="heroContent sm:flex flex-col items-center justify-center pt-12 md:pt-28 px-9">
          <div className="text md:w-[40vw] sm:w-[40vw]">
            <h1 className="text-4xl sm:text-3xl font-bold md:text-[3.5vw] md:font-black text-white text-center tracking-tight leading-none sm:leading-8 md:leading-none">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-[4vw] sm:text-[2.2vw] md:text-[1.5vw] md:font-medium text-white text-center tracking-tight mt-4 md:mt-7">
              Starts at Rs 250. Cancel anytime.
            </p>
          </div>
          <p className="text-[5vw] font-normal sm:text-[2.4vw] sm:font-medium md:text-[1.2vw] leading-none tracking-tight text-white text-center md:mt-7 mt-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-col sm:flex-row sm:gap-4 sm:mt-6 mt-4 md:mt-6"
          >
            <Input
              type={"email"}
              email={email}
              setEmail={setEmail}
              className={
                "rounded-sm w-[80vw] mt-4 sm:w-[44vw] md:w-[28vw] px-5 py-3 sm:py-3 md:px-2.5 md:py-3.5 lg:px-4 lg:mt-0 lg:rounded-[3px] text-xl font-semibold"
              }
            />
            <Button
              className={
                "btn flex items-center justify-center mt-3 sm:mt-0 py-1 px-2.5 sm:py-2.5 sm:px-4 bg-red-600 rounded-md font-semibold text-white"
              }
              type="submit" // This will ensure form submission
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
