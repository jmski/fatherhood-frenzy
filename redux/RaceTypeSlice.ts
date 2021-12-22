import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface RaceTypeState {
  playerPos: number;
  currentString: string;
}

const initialState: RaceTypeState = {
  playerPos: 0,
  currentString: "earth, air, fire, water",
};

export const raceTypeSlice: Slice = createSlice({
  name: "raceType",
  initialState,
  reducers: {
    setPlayerInput: (state: RaceTypeState, action: PayloadAction<string>) => {
      const newPlayerInput = action.payload as string;
      state.playerPos = newPlayerInput.length;
    },
  },
});
export const { setPlayerInput } = raceTypeSlice.actions;

export const raceTypeSelector = (state: RootState) => state.raceType;
