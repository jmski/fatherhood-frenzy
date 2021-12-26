import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import PlayerProfile from "../components/game/PlayerProfile";
import Summary from "../components/game/Summary";

const Game = () => {
  enum STAGE {
    PlayerProfile,
    Summary,
  }

  const [stage, setStage] = useState(STAGE.PlayerProfile);

  const previousStage = () => {
    if (stage > STAGE.PlayerProfile) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (stage < STAGE.Summary) {
      setStage(stage + 1);
    }
  };

  const startOver = () => window.location.reload();

  const getComponent = (stage: STAGE) => {
    if (stage == STAGE.PlayerProfile) {
      return <PlayerProfile />;
    } else if (stage == STAGE.Summary) {
      return <Summary />;
    }
  };

  return (
    <div className="bg-white">
      <div>{getComponent(stage)}</div>

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
  );
};

export default Game;
