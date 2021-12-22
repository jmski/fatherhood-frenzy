import React from "react";
import { Button } from "../ui/Button";

const GameOver = ({ onReplayRequest }) => {
  return (
    <div className="w-full bg-pink-300 h-full">
      Congrats! You shot in 2.34433 seconds
      <Button
        label="Replay?"
        backgroundColor="blue"
        onClick={onReplayRequest}
      />
    </div>
  );
};

export default GameOver;
