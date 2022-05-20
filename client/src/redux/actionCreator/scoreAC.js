import { SCORE, SCORE_MINUS } from "../actionTypes/scoreAT";

export const scoreRenderAC = (payload) => {
  return {
    type: SCORE,
    payload,
  };
};

export const scoreMinusAC = (payload) => {
  return {
    type: SCORE_MINUS,
    payload,
  };
};
