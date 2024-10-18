import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const SignupComponent = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loginForm");
  };
  return (
    <div className="lg:min-h-[25vh] pb-10 px-6 sm:px-12 lg:pb-10">
      <p className="text-[4.4vw] sm:text-lg sm:px-3 md:text-[1.2vw] font-medium lg:text-lg lg:font-semibold leading-5 text-white text-start sm:text-center md:mt-7 mt-3">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex items-start flex-col sm:flex-row lg:justify-center sm:gap-3 mt-4 md:mt-6 sm:px-6"
      >
        <Input
          type={"email"}
          value={email}
          setEmail={setEmail}
          className={
            "rounded-sm w-[80vw] sm:w-[56vw] md:w-[28vw] lg:w-[40vw] px-5 py-3 sm:py-3 md:py-3.5 text-xl font-semibold"
          }
        />
        <Button type={"submit"} />
      </form>
    </div>
  );
};

export default SignupComponent;
