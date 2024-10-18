import React, { useState } from "react";
import Cards from "./Cards";
import CardHover from "./CardHover";

const CardContainer = () => {
  const cardData = [
    {
      title: 1,
      titleImage: "/images/titleImage1.webp",
      details:
        "When several children disappear at the hands of a serial killer in Sector 36, a corrupt cop is forced to pursue the chilling case at all costs.",
      image: "/images/Card1.webp",
      secondImage: "/images/secondImage1.webp",
    },
    {
      title: 2,
      titleImage: "/images/titleImage2.webp",
      details:
        "A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.",
      image: "/images/Card2.webp",
      secondImage: "/images/secondImage2.webp",
    },
    {
      title: 3,
      titleImage: "/images/titleImage3.webp",
      details:
        "When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.",
      image: "/images/Card3.webp",
      secondImage: "/images/secondImage3.webp",
    },
    {
      title: 4,
      titleImage: "/images/titleImage4.webp",
      details:
        "Sent to England to stop a deadly bio-threat, US agent Luke Hobbs is forced to team up with his nemesis, mercenary Deckard Shaw.",
      image: "/images/Card4.webp",
      secondImage: "/images/secondImage4.webp",
    },
    {
      title: 5,
      titleImage: "/images/titleImage5.webp",
      details:
        "In a futuristic dystopia with enforced beauty standards, a teen awaiting mandatory cosmetic surgery embarks on a journey to find her missing friend.",
      image: "/images/Card5.webp",
      secondImage: "/images/secondImage5.webp",
    },
    {
      title: 6,
      titleImage: "/images/titleImage6.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/Card6.webp",
      secondImage: "/images/secondImage6.webp",
    },
    {
      title: 7,
      titleImage: "/images/titleImage7.webp",
      details:
        "Summoned to Italy for the funeral of her estranged grandfather, a sunny but insecure suburbanite learns she's the new head of a powerful crime family.",
      image: "/images/Card7.webp",
      secondImage: "/images/secondImage7.webp",
    },
    {
      title: 8,
      titleImage: "/images/titleImage8.webp",
      details:
        "An Indian man seeking work follows a job lead to Saudi Arabia, only to find himself forced to labor without pay as a goat herder in the remote desert.",
      image: "/images/Card8.webp",
      secondImage: "/images/secondImage8.webp",
    },
    {
      title: 9,
      titleImage: "/images/titleImage9.webp",
      details:
        "A recently retired sniper faces off with a younger, stronger cloned version of himself engineered by a covert government agency to kill him.",
      image: "/images/Card9.webp",
      secondImage: "/images/secondImage9.webp",
    },
    {
      title: 10,
      titleImage: "/images/titleImage10.webp",
      details:
        "While evading the cops in Agra, Rani and Rishu scheme to run away together. But when their plans go awry, Rani asks a mild-mannered admirer for help.",
      image: "/images/Card10.webp",
      secondImage: "/images/secondImage10.webp",
    },
  ];

  const cardData2 = [
    {
      title: 6,
      titleImage: "/images/titleImage6.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/Card6.webp",
      secondImage: "/images/secondImage6.webp",
    },
    {
      title: 7,
      titleImage: "/images/titleImage7.webp",
      details:
        "Summoned to Italy for the funeral of her estranged grandfather, a sunny but insecure suburbanite learns she's the new head of a powerful crime family.",
      image: "/images/Card7.webp",
      secondImage: "/images/secondImage7.webp",
    },
    {
      title: 5,
      titleImage: "/images/titleImage5.webp",
      details:
        "In a futuristic dystopia with enforced beauty standards, a teen awaiting mandatory cosmetic surgery embarks on a journey to find her missing friend.",
      image: "/images/Card5.webp",
      secondImage: "/images/secondImage5.webp",
    },
    {
      title: 9,
      titleImage: "/images/titleImage9.webp",
      details:
        "A recently retired sniper faces off with a younger, stronger cloned version of himself engineered by a covert government agency to kill him.",
      image: "/images/Card9.webp",
      secondImage: "/images/secondImage9.webp",
    },
    {
      title: 2,
      titleImage: "/images/titleImage2.webp",
      details:
        "A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.",
      image: "/images/Card2.webp",
      secondImage: "/images/secondImage2.webp",
    },
    {
      title: 1,
      titleImage: "/images/titleImage1.webp",
      details:
        "When several children disappear at the hands of a serial killer in Sector 36, a corrupt cop is forced to pursue the chilling case at all costs.",
      image: "/images/Card1.webp",
      secondImage: "/images/secondImage1.webp",
    },
    {
      title: 8,
      titleImage: "/images/titleImage8.webp",
      details:
        "An Indian man seeking work follows a job lead to Saudi Arabia, only to find himself forced to labor without pay as a goat herder in the remote desert.",
      image: "/images/Card8.webp",
      secondImage: "/images/secondImage8.webp",
    },
    {
      title: 3,
      titleImage: "/images/titleImage3.webp",
      details:
        "When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.",
      image: "/images/Card3.webp",
      secondImage: "/images/secondImage3.webp",
    },
    {
      title: 4,
      titleImage: "/images/titleImage4.webp",
      details:
        "Sent to England to stop a deadly bio-threat, US agent Luke Hobbs is forced to team up with his nemesis, mercenary Deckard Shaw.",
      image: "/images/Card4.webp",
      secondImage: "/images/secondImage4.webp",
    },
  ];

  const tvShows = [
    {
      title: 1,
      titleImage: "/images/tvShows/tvTitleImage1.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage1.webp",
      secondImage: "/images/tvShows/tvSecondImage1.webp",
    },
    {
      title: 2,
      titleImage: "/images/tvShows/tvTitleImage2.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage2.webp",
      secondImage: "/images/tvShows/tvSecondImage2.webp",
    },
    {
      title: 3,
      titleImage: "/images/tvShows/tvTitleImage3.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage3.webp",
      secondImage: "/images/tvShows/tvSecondImage3.webp",
    },
    {
      title: 4,
      titleImage: "/images/tvShows/tvTitleImage4.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage4.webp",
      secondImage: "/images/tvShows/tvSecondImage4.webp",
    },
    {
      title: 5,
      titleImage: "/images/tvShows/tvTitleImage5.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage5.webp",
      secondImage: "/images/tvShows/tvSecondImage5.webp",
    },
    {
      title: 6,
      titleImage: "/images/tvShows/tvTitleImage6.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage6.webp",
      secondImage: "/images/tvShows/tvSecondImage6.webp",
    },
    {
      title: 7,
      titleImage: "/images/tvShows/tvTitleImage7.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage7.webp",
      secondImage: "/images/tvShows/tvSecondImage7.webp",
    },
    {
      title: 8,
      titleImage: "/images/tvShows/tvTitleImage8.webp",
      details:
        "When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.",
      image: "/images/tvShows/tvCardImage8.webp",
      secondImage: "/images/tvShows/tvSecondImage8.webp",
    },
  ];

  const [showCardData, setShowCardData] = useState(cardData);
  const [clickedCard, setClickedCard] = useState(null);

  const handleClick = (card) => {
    // Toggle between showing the card's details or closing it
    setClickedCard(clickedCard?.title === card.title ? null : card);
  };

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;

    // Switch card data based on the selected option
    if (selectedOption === "World") {
      setShowCardData(cardData2); // Load cardData2 when "World" is selected
    } else if (selectedOption === "TVShows") {
      setShowCardData(tvShows); // Load cardData2 when "World" is selected
    } else {
      setShowCardData(cardData); // Revert to cardData for "Pakistan"
    }
  };

  return (
    <div className="relative sm:min-h-[75vh] lg:min-h-[80vh] h-[52vh] pl-3 pr-5 sm:pl-0 sm:pr-0 sm:px-1">
      <div className="filterCards pt-12 px-2 sm:px-0">
        <h1 className="text-white font-medium text-2xl sm:text-3xl">
          Trending Now
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-2 mt-4 mb-7 sm:mb-12 lg:mb-4 px-2 sm:px-0">
          <select
            onChange={handleOptionChange}
            name=""
            id=""
            className="cursor-pointer px-3 py-3 lg:px-2 w-full md:w-32 text-lg font-semibold bg-[#0F0F0F] text-white outline-none rounded-md border-[3px] border-[#5E5E5E]"
          >
            <option value="Pakistan">Pakistan</option>
            <option value="World">World</option>
          </select>
          <select
            onChange={handleOptionChange}
            name=""
            id=""
            className="cursor-pointer px-3 py-3 lg:px-2 w-full md:w-32 text-lg font-semibold bg-[#0F0F0F] text-white outline-none rounded-md border-[3px] border-[#5E5E5E]"
          >
            <option value="Movies">Movies</option>
            <option value="TVShows">TV Shows</option>
          </select>
        </div>
      </div>
      {/* Pass the selected data to Cards component */}
      <Cards
        cardData={showCardData}
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
        handleClick={handleClick}
      />

      {/* Expanded Card Details */}
      {clickedCard ? (
        <CardHover value={clickedCard} setValue={setClickedCard} />
      ) : null}
    </div>
  );
};

export default CardContainer;
