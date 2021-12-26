import React, { useState, useEffect } from "react";
import { words } from "../helpers/words.json";

const sortWords = words.sort(() => Math.random() - 0.5);

const RaceTypingTest = () => {
  const [playerInput, setPlayerInput] = useState("");
  const [typedHistory, setTypedHistory] = useState([]);
  const [counter, setCounter] = useState(60);
  const [currentWord, setCurrentWord] = useState(sortWords[0]);

  const handleKeyDown = (event) => {
    setPlayerInput(event.key);
    setTypedHistory((typedHistory) => [...typedHistory, event.key]);

    if (event.key === "Backspace") {
      setTypedHistory((typedHistory) => typedHistory.slice(0, -2));
    }
    if (event.key === "Tab") {
      setTypedHistory([]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="m-12 text-white h-full flex flex-col gap-12 justify-center items-center overflow-hidden">
      <div className="text-7xl">Timer: {counter}</div>
      <div className="text-xl">
        {sortWords.map((word) => (
          <span>{word} </span>
        ))}
      </div>
      <div className="text-3xl">Player Input: {playerInput}</div>
      <div className="text-3xl">Current Word: {currentWord}</div>
      <div className="text-xl w-full flex flex-col">
        <h3>Typed History:</h3>
        <div className="max-w-xl">{typedHistory}</div>
      </div>
    </div>
  );
};

export default RaceTypingTest;
