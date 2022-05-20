import { COSTS } from "../actionTypes/costsAT";

export const costsRenderAC = (payload) => {
  return {
    type: COSTS,
    payload,
  };
};
