import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="duration-200 ease-in-out hover:bg-teal-600 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
