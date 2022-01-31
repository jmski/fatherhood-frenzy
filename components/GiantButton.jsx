import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const GiantButton = () => {
  return (
    <Link href="/start">
      <button className="group flex justify-center items-center h-1/4 min-h-20 mt-auto bg-yellow-500 hover:bg-white ease-in-out duration-500">
        <div className="px-12 lg:px-20 py-12 flex justify-between items-center w-full h-full border-t box-border whitespace-nowrap space-x-5">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl group-hover:text-black ease-in-out duration-300">
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
