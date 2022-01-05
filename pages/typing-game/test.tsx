import React, { useState, useEffect } from "react";
import { words } from "../helpers/words.json";

interface RaceTypingProps {
  words?: string[];
}

export const sortWords = words.sort(() => Math.random() - 0.5);

const RaceTypingTest = () => {
  const [playerInput, setPlayerInput] = useState("");
  const [typedHistory, setTypedHistory] = useState([]);
  const [counter, setCounter] = useState(60);
  const [currentWord, setCurrentWord] = useState(sortWords[0]);
  const [playerWord, setPlayerWord] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //const wordIndex = sortWords[1];

  const handleKeyDown = (event: KeyboardEvent) => {
    setPlayerInput(event.key);
    setTypedHistory((typedHistory) => [...typedHistory, event.key]);
    setPlayerWord((playerWord) => playerWord + event.key);
    const wordIndex = sortWords.indexOf(currentWord);

    if (event.key === "Backspace") {
      setTypedHistory((typedHistory) => typedHistory.slice(0, -2));
      setPlayerInput((playerInput) => playerInput);
    } else if (event.key === "Tab") {
      setTypedHistory([]);
      event.preventDefault();
    } else if (event.key === " ") {
      setCurrentWord(sortWords[wordIndex]);
    }
  };

  return (
    <div className="m-12 text-white h-full flex flex-col gap-12 justify-center items-center overflow-hidden">
      <div className="text-7xl">Timer: {counter}</div>
      <div className="text-xl">
        {sortWords.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
      <div className="text-3xl">Player Input: {playerInput}</div>
      <div className="text-3xl">Current Word: {currentWord}</div>
      <div className="text-3xl">Player Word: {playerWord}</div>
      <div className="text-xl w-full flex flex-col">
        <h3>Typed History:</h3>
        <div className="max-w-xl">{typedHistory}</div>
      </div>
    </div>
  );
};

export default RaceTypingTest;
