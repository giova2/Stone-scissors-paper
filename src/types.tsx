export enum Option {
  PAPER = "PAPER",
  SCISSORS = "SCISSORS",
  STONE = "STONE",
}

export enum Result {
  WIN = "WIN",
  LOSE = "LOSE",
  DRAW = "DRAW",
}

export type TypeResults = {
  PAPER: { PAPER: string; SCISSORS: string; STONE: string };
  SCISSORS: { PAPER: string; SCISSORS: string; STONE: string };
  STONE: { PAPER: string; SCISSORS: string; STONE: string };
};
