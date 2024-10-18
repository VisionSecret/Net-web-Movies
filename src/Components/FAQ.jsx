import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How do I sign up?",
      answer:
        "Click on the Sign Up button on the homepage and fill in your details to create an account.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription anytime in your account settings.",
    },
    {
      question: "Is there a free trial?",
      answer: "Currently, there is no free trial available for this service.",
    },
    {
      question: "How much does netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[85vw] mx-auto py-6 bg-black rounded-lg shadow-md">
      <h1 className="text-lg sm:text-2xl text-white font-medium mb-4 sm:mb-4">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 rounded-md">
          <div
            className="flex justify-between items-center p-5 md:p-6 outline-none cursor-pointer bg-[#333333] hover:bg-[#414141]"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-[4.4vw] sm:text-2xl text-[#F5F5F5]">{faq.question}</h2>
            <span className="font-thin text-white">
              {activeIndex === index ? (
                <i class="font-extralight text-lg sm:text-4xl ri-close-large-line"></i>
              ) : (
                <i class="font-extralight text-lg sm:text-4xl ri-add-large-line"></i>
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === index ? "min-h-max sm:max-h-60" : "max-h-0"
            }`}
          >
            <div className="p-3 sm:p-6 text-[4.4vw] sm:text-2xl transition-all duration-300 bg-[#333333] text-white border-t-2 border-black rounded-b-md">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
