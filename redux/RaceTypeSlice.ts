import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface RaceTypeState {
  question: string;
  currentWord: string;
  playerInput: string;
  isCorrect: boolean;
  InputHistory: Array<String>;
}

const initialState: RaceTypeState = {
  question: "earth, air, fire, water",
  currentWord: "",
  playerInput: "",
  isCorrect: false,
  InputHistory: [],
};

export const raceTypeSlice: Slice = createSlice({
  name: "raceType",
  initialState,
  reducers: {
    setCurrentWord: (state: RaceTypeState, action: PayloadAction<string>) => {
      const newCurrentWord = action.payload as string;
      state.currentWord = newCurrentWord;
    },
    setPlayerInput: (state: RaceTypeState, action: PayloadAction<string>) => {
      const newPlayerInput = action.payload as string;
      state.playerInput = newPlayerInput;
    },

    setQuestion: (state: RaceTypeState, action: PayloadAction<string>) => {
      const newQuestion = action.payload as string;
      state.question = newQuestion;
    },

    setIsCorrect: (state: RaceTypeState, action: PayloadAction<boolean>) => {
      const newIsCorrect = action.payload as boolean;
      state.isCorrect = newIsCorrect;
    },
  },
});
export const { setCurrentWord, setQuestion, setPlayerInput, setIsCorrect } =
  raceTypeSlice.actions;

export const raceTypeSelector = (state: RootState) => state.raceType;

export default raceTypeSlice.reducer;
