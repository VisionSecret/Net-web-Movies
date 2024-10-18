import React from "react";
import Button from "./Button";
import CategoryBtn from "./CategoryBtns";
import "remixicon/fonts/remixicon.css";
import { FaLock, FaHeart, FaHeartbeat, FaCalendarAlt } from "react-icons/fa";

const CardHover = ({ value, setValue }) => {
  // console.log(value);
  return (
    <div className="fixed top-0 left-0 bg-opacity-85 bg-black h-full w-full flex justify-center items-center z-50 transition-all duration-700 ">
      <div className="relative bg-zinc-800 rounded-sm w-[99vw] h-[50vh] md:w-[47vw] md:h-[90vh] overflow-y-scroll">
        <img
          className="h-[50%] lg:h-[60%] w-full object-cover rounded-t-sm"
          src={value.secondImage}
          alt={value.title}
        />
        <div className="absolute top-40 sm:top-60 left-2 sm:left-4">
          <img
            className={`
              ${
                value.title == 1 &&
                value.title < 2 &&
                "h-14 sm:h-24 w-full object-cover"
              } 
             ${
               value.title >= 2 &&
               value.title < 4 &&
               "h-10 sm:h-12 w-full object-cover"
             } 
             ${value.title > 3 && "h-5 sm:h-8 w-full object-cover"}
             `}
            src={value.titleImage}
            alt={value.title}
          />
        </div>
        <div className="flex space-x-3 sm:space-x-3 px-4 sm:px-6 pt-5 sm:pt-2">
          <CategoryBtn
            label="18+"
            color="bg-gray-500 bg-opacity-20 text-sm"
            icon={<FaLock />}
          />
          <CategoryBtn
            label="Romance"
            color="bg-gray-500 bg-opacity-20 text-sm"
            icon={<FaHeart />}
          />
          <CategoryBtn
            label="Thriller"
            color="bg-gray-500 bg-opacity-20 text-sm"
            icon={<FaHeartbeat />}
          />
          <CategoryBtn
            label="2024"
            color="bg-gray-500 bg-opacity-20 text-sm"
            icon={<FaCalendarAlt />}
          />
        </div>
        <div className="content px-5 lg:px-7 flex justify-between pt-3 sm:pt-0 sm:justify-evenly flex-col gap-4 sm:gap-1 pb-5 h-[40%] lg:h-[32.4%]">
          <p className="text-[3.7vw] leading-5 sm:leading-none sm:text-[1.3vw] text-white mt-3 sm:mt-0 lg:font-normal">
            {value.details}
          </p>
          <Button
            className={
              "btn flex items-center justify-center sm:py-1.5 sm:px-4 w-full sm:w-fit bg-red-600 rounded-md font-semibold text-white"
            }
            link={"/registration"}
          />
        </div>
        {/* Close Button */}
        <button
          onClick={() => setValue(null)}
          className="absolute top-4 right-2 text-gray-100 px-2 py-1 rounded-full hover:bg-zinc-300 hover:bg-opacity-45"
        >
          <i class="font-extralight text-3xl sm:text-3xl ri-close-large-line"></i>
        </button>
      </div>
    </div>
  );
};

export default CardHover;
