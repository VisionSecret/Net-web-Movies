import React from "react";

const Input = ({ type, className, email, setEmail }) => {
  return (
    <div>
      <input
        type={type ? type : "email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${className} inputField text-white bg-[#191715ce] placeholder-[#aeaeae] placeholder:text-lg sm:placeholder:text-lg md:placeholder:text-[1.2vw] border-[1px] border-gray-500 outline-none`}
        placeholder="Email address"
        required
      />
    </div>
  );
};

export default Input;
