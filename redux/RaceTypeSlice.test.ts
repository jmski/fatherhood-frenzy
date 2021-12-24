import reducer, { setPlayerInput } from "./RaceTypeSlice";

const initialState = {
  playerPos: 0,
  currentString: "Earth, Air, Fire, Water",
};

test("get player input", () => {
  expect(
    reducer(initialState.playerPos, setPlayerInput(initialState.currentString))
  );
});
