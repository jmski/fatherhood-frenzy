import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { playerProfileSlice, PlayerProfileState } from "./playerProfileSlice";
type State = {
  playerProfile: PlayerProfileState;
};
const playerProfileReducer = playerProfileSlice.reducer;

const rootReducer = combineReducers({
  playerProfile: playerProfileReducer,
});

export type RootState = State;

export default rootReducer;
