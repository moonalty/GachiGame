import { SHOW_QUESTIONS } from "../actionTypes/questAT";

export const questRenderAC = (payload) => {
  return {
    type: SHOW_QUESTIONS,
    payload,
  };
};
