import React from "react";
import { Button } from "../../ui/Button";

const PreGame = ({ onStartClick }) => {
  return (
    <div className="w-full bg-center bg-cover bg-showdown min-h-lg h-full flex flex-col">
      <div className="bg-gradient-to-r from-black to-gray-800 w-full flex justify-between items-center">
        <img className="ml-12 my-4" src={"/images/solo.png"} />
        <img className="max-h-20" src={"/images/svg/blast.svg"} />
        <div className="bg-white w-full text-xs text-white">x</div>
      </div>
      <div className="flex flex-col my-auto justify-center items-center">
        <span className="text-blue-600 font-extrabold text-3xl">
          Click the start button!
        </span>
        <Button
          backgroundColor="blue"
          label="start"
          textColor="white"
          onClick={onStartClick}
        />
      </div>
      <div className="bg-gradient-to-l from-black to-gray-800 w-full flex mt-auto justify-between items-center">
        <div className="bg-white w-full text-xs text-white">x</div>
        <img className="max-h-20" src={"/images/svg/blast.svg"} />
        <img
          className="right-0 -scale-x-1 my-4 mr-12"
          src={"/images/lando.png"}
        />
      </div>
    </div>
  );
};

export default PreGame;
