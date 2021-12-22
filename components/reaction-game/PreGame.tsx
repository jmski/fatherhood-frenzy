import React from "react";
import { Button } from "../ui/Button";

const PreGame = ({ onStartClick }) => {
  return (
    <div className="w-full bg-purple-300 h-full">
      Click the start button!
      <Button backgroundColor="blue" label="start" onClick={onStartClick} />
    </div>
  );
};

export default PreGame;
