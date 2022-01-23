import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/Button";
import Showdown from "../../../components/games/reaction-game/Showdown";
import GunShot from "../../../components/games/reaction-game/GunShot";
import PreGame from "../../../components/games/reaction-game/PreGame";
import GameOver from "../../../components/games/reaction-game/GameOver";

const Game = () => {
  enum STAGE {
    PreGame,
    Showdown,
    GunShot,
    GameOver,
  }

  const DEBUG_MODE = false;

  const [stage, setStage] = useState(STAGE.PreGame);

  const previousStage = () => {
    if (stage > STAGE.PreGame) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (stage < STAGE.GameOver) {
      setStage(stage + 1);
    }
  };

  const startOver = () => {
    setStage(STAGE.PreGame);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (stage === STAGE.Showdown) {
        // wait for timer
        setStage(STAGE.GunShot);
      }
    }, 2000); // clearing interval TODO: randomize this number
    return () => clearInterval(timer);
  }, [STAGE.GunShot, STAGE.Showdown, stage]);

  return (
    <div className="bg-white h-96">
      <div className="w-full h-full">
        {stage == STAGE.PreGame && <PreGame onStartClick={nextStage} />}
        {stage == STAGE.Showdown && <Showdown />}
        {stage == STAGE.GunShot && <GunShot onShotRequested={nextStage} />}
        {stage == STAGE.GameOver && <GameOver onReplayRequest={startOver} />}
      </div>
      {DEBUG_MODE && (
        <div>
          <Button
            backgroundColor="blue"
            textColor="white"
            label="Reset"
            onClick={startOver}
          />
          <Button
            backgroundColor="red"
            textColor="white"
            label="Prev"
            onClick={previousStage}
          />
          <Button
            backgroundColor="green"
            textColor="white"
            label="Next"
            onClick={nextStage}
          />
        </div>
      )}
    </div>
  );
};

export default Game;
