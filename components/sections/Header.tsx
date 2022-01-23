import React from "react";
import { Button } from "../ui/Button";

const Header = () => {
  const onSubmitHandler = () => {};

  return (
    <div className="bg-gradient-to-br from-yellow-600 to-orange-700">
      <div className="px-12 py-8 md:px-20">
        <div className="flex flex-col md:grid md:grid-cols-12 items-center text-white font-sans">
          <div className="z-10 col-span-1-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold capitalize">
              Teaching parents how to be kids (again)
            </h1>
            <p className="py-8 text-md xl:text-2xl">
              3 ways to connect with your inner child
            </p>
            <Button
              backgroundColor="yellow"
              textColor="black"
              label="Check it out"
            />
          </div>
          <div className="py-8 z-10 col-span-7--1">
            <video className="h-1/3 rounded-3xl" loop autoPlay muted>
              <source src={"/videos/tag.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
