import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { playerProfileSlice, PlayerProfileState } from "./playerProfileSlice";
import { raceTypeSlice, RaceTypeState } from "./RaceTypeSlice";

type State = {
  playerProfile: PlayerProfileState;
  raceType: RaceTypeState;
};
const playerProfileReducer = playerProfileSlice.reducer;
const raceTypeReducer = raceTypeSlice.reducer;

const rootReducer = combineReducers({
  playerProfile: playerProfileReducer,
  raceType: raceTypeReducer,
});

export type RootState = State;

export default rootReducer;
