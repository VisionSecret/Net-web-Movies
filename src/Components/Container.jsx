import React from "react";
import CardContainer from "./CardContainer";
import Info from "./Info";
import FAQ from "./FAQ";
import SignupComponent from "./SignupComponent";

const mainContainer = () => {
  return (
    <div className="w-full bg-black md:px-20 min-h-screen">
      <CardContainer />
      <Info />
      <FAQ />
      <SignupComponent />
    </div>
  );
};

export default mainContainer;
