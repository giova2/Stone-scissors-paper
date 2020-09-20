import { OPTIONS } from "./constants";
import { TypeResults, Option, Result } from "./types";

// first is the user election and the the machine election
const RESULTS: TypeResults = {
  PAPER: { PAPER: Result.DRAW, SCISSORS: Result.LOSE, STONE: Result.WIN },
  SCISSORS: { PAPER: Result.WIN, SCISSORS: Result.DRAW, STONE: Result.LOSE },
  STONE: { PAPER: Result.LOSE, SCISSORS: Result.WIN, STONE: Result.DRAW },
};

export const machinePlay = () => {
  const positions = OPTIONS.length;
  return OPTIONS[Math.floor(Math.random() * positions)];
};

export const checkWinner = (humanMove: Option, machineMove: Option) => {
  return RESULTS[humanMove][machineMove];
};
