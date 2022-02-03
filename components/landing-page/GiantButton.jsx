import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const GiantButton = () => {
  return (
    <Link href="/">
      <a
        className="h-1/4 min-h-20 bg-yellow-500 mt-auto overflow-hidden active:scale-95
        group flex justify-center items-center ease-in-out duration-500"
      >
        <button
          className="px-12 lg:px-20 py-12 space-x-5 w-full h-full 
          flex justify-between items-center border-t box-border whitespace-nowrap"
        >
          <h2
            className="z-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
            font-bold ease-in-out duration-500 group-hover:text-black"
          >
            Get started
          </h2>
          <div
            className="
            z-0 text-lg lg:text-2xl bg-white text-black ease-in-out duration-1000 rounded-full p-4
            group-hover:text-stone-200 group-hover:bg-white group-hover:-rotate-45
            group-hover:scale-[200]"
          >
            <BsArrowDownRight />
          </div>
        </button>
      </a>
    </Link>
  );
};

export default GiantButton;
