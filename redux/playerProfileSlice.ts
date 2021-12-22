import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface PlayerProfileState {
  playerName: string;
}

const initialState: PlayerProfileState = {
  playerName: "",
};

export const playerProfileSlice: Slice = createSlice({
  name: "playerProfile",
  initialState,
  reducers: {
    setPlayerName: (
      state: PlayerProfileState,
      action: PayloadAction<string>
    ) => {
      if (action.type == "playerProfile/setPlayerName") {
        const newPlayerName = action.payload as string;
        state.playerName = newPlayerName;
      }
    },
  },
});
export const { setPlayerName } = playerProfileSlice.actions;

export const playerProfileSelector = (state: RootState) => state.playerProfile;
