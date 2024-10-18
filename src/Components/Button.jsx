import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ className, link, type }) => {
  return (
    <>
      {type ? (
        <button
          type={"submit"} // Ensure it's a submit button
          className={
            className
              ? className
              : "btn flex items-center md:justify-center md:w-[13vw] bg-[#E50914] hover:bg-[#e80918d7] py-0.5 px-4 sm:py-2.5 sm:px-1.5 md:py-1.5 lg:py-3 md:px-3.5 text-[5vw] sm:text-xl md:text-[1.3vw] lg:text-[1.6vw] text-zinc-100 font-semibold rounded-md md:ml-3 mt-4 sm:mt-0 md:mt-1 lg:mt-0"
          }
        >
          Get Started
          <i className="text-[8vw] sm:text-3xl md:text-[2.3vw] font-thin ri-arrow-right-s-line"></i>
        </button>
      ) : (
        <NavLink to={`${link ? link : "/"}`}>
          <button
            type={"button"} // Ensure it's a button
            className={
              className
                ? className
                : "btn flex items-center md:justify-center md:w-[13vw] bg-[#E50914] hover:bg-[#e80918d7] py-0.5 px-4 sm:py-2.5 sm:px-1.5 md:py-1.5 lg:py-3 md:px-3.5 text-[5vw] sm:text-xl md:text-[1.3vw] lg:text-[1.6vw] text-zinc-100 font-semibold rounded-md md:ml-3 mt-4 sm:mt-0 md:mt-1 lg:mt-0"
            }
          >
            Get Started
            <i className="text-[8vw] sm:text-3xl md:text-[2.3vw] font-thin ri-arrow-right-s-line"></i>
          </button>
        </NavLink>
      )}
    </>
  );
};

export default Button;
