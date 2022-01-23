import React from "react";
import NavBar from "../components/sections/Nav";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div>
      <NavBar />
      <div className="text-slate-500 gap-6 w-full h-screen flex flex-col justify-center items-center ">
        <h1 className="text-8xl text-teal-500">404</h1>
        <h2 className="text-5xl font-mono">
          Sorry, can't seem to find the page!
        </h2>
        <Link href={"/"}>
          <a className="text-4xl hover:text-pink-500 uppercase ease-in-out duration-200 hover-underline-animation">
            Go Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
