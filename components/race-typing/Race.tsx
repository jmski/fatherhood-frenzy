import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  raceTypeSelector,
  setPlayerInput,
  setCurrentWord,
  setQuestion,
  setIsCorrect,
} from "../../redux/RaceTypeSlice";

const Race = () => {
  const currentWord = useSelector(raceTypeSelector).currentWord;
  const playerInput = useSelector(raceTypeSelector).playerInput;
  const question = useSelector(raceTypeSelector).question;
  const isCorrect = useSelector(raceTypeSelector).isCorrect;

  const dispatch = useAppDispatch();

  const currentWordIndex = question.indexOf(currentWord);

  const typeHandler = (e) => {
    const newPlayerInput = e.target.value;
    dispatch(setPlayerInput(newPlayerInput));

    newPlayerInput.split("").map((letter) => {
      console.log(letter);
    });

    // const newPlayerPos = newPlayerInput.length;
    // dispatch(setCurrentPos(newPlayerPos));
  };

  return (
    <div className="py-8 px-16">
      <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
        <h1 className="text-7xl">
          {question.split("").map((letter) => (
            <span className={`${isCorrect ? "bg-green-400" : "bg-red-500"}`}>
              {letter}
            </span>
          ))}
        </h1>
        <input
          value={playerInput}
          className="bg-gray-300 p-4 rounded-2xl border-0 outline-none text-4xl text-center"
          onChange={typeHandler}
        ></input>
      </div>
    </div>
  );
};

export default Race;
