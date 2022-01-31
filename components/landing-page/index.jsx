import React from "react";
import GiantButton from "./GiantButton";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row overflow-y-hidden">
        {/* left side */}
        <div className="bg-yellow-500 text-white sm:h-screen w-full sm:w-1/2 flex flex-col min-h-full">
          <div className="flex flex-col justify-center item-center w-4/5 mt-40 mb-12 sm:mb-0 min-h-1/2 pl-20 space-y-8">
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl leading-16">
              Finding your Ikigai
            </h1>
            <p className="text-2xl">
              look for your purpose in life. strive to balance the spiritual
              with the practical.
            </p>
          </div>
          <GiantButton />
        </div>

        {/* right side */}
        <div className="sm:w-1/2 h-w-screen sm:h-screen ease-in duration-300">
          <video
            className="sm:h-full object-cover object-center"
            loop
            autoPlay
            muted
          >
            <source src={"/videos/tag.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
