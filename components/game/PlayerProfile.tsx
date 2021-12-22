import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/Button";
import {
  playerProfileSelector,
  setPlayerName,
} from "../../redux/playerProfileSlice";
import { useAppDispatch } from "../../redux/store";

const PlayerProfile = () => {
  const playerName = useSelector(playerProfileSelector).playerName;

  const dispatch = useAppDispatch();

  const onChangeHandler = () => {};
  return (
    <div className="py-8 px-16">
      <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
        <h1 className="text-7xl">What is your name?</h1>
        <input
          value={playerName}
          className="bg-gray-300 p-4 rounded-2xl border-0 outline-none text-4xl text-center"
          onChange={(e) => {
            const newPlayerName = e.target.value;
            dispatch(setPlayerName(newPlayerName));
          }}
        ></input>
        <Button
          backgroundColor="purple"
          textColor="white"
          label="Submit"
          onClick={() => onChangeHandler}
        ></Button>
      </div>
    </div>
  );
};

export default PlayerProfile;
