import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = ({ cardData, clickedCard, setClickedCard, handleClick }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5, // Adjust how many cards are shown
    slidesToScroll: 1, // Move only 1 card per scroll
    arrows: true, // Show the arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-[77vw] sm:w-[80vw] m-auto">
        <div className="mt-3">
          <Slider {...settings}>
            {cardData.map((card) => (
              <div
                key={card.title}
                onClick={() => handleClick(card)}
                className="relative sm:w-[200px] sm:h-[300px] h-[15vh] w-[500px] cursor-pointer hover:scale-[1.1] my-10 transition-transform duration-300"
              >
                <h1
                  className="absolute bottom-0 left-2 text-[20px] font-bold tracking-tight text-white"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  {card.title}
                </h1>
                <img
                  className="w-full h-full object-fill rounded-md"
                  src={card.image}
                  alt={`Card ${card.title}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Cards;
