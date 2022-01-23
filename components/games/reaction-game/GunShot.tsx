import React from "react";

const GunShot = ({ onShotRequested }) => {
  return (
    <div
      onClick={onShotRequested}
      className="w-full bg-green-300 h-full text-5xl font-bold"
    >
      SHOOT!
    </div>
  );
};

export default GunShot;
