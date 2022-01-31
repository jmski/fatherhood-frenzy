import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const GiantButton = () => {
  return (
    <Link href="/start">
      <button
        className="
        h-1/4 min-h-20 bg-yellow-500 hover:bg-white mt-auto
        group flex justify-center items-center ease-in-out duration-500"
      >
        <div
          className="px-12 lg:px-20 py-12 space-x-5 w-full h-full 
          flex justify-between items-center border-t box-border whitespace-nowrap"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
            font-bold ease-in-out duration-700 group-hover:text-black"
          >
            Get started
          </h2>
          <div className="bg-white text-black group-hover:text-white group-hover:bg-yellow-500 ease-in-out duration-500 rounded-full p-4 group-hover:scale-150 group-hover:-rotate-45">
            <BsArrowDownRight />
          </div>
        </div>
      </button>
    </Link>
  );
};

export default GiantButton;
