import { PROFILE } from "../actionTypes/profileAT";

export const profileAC = (payload) => {
  return {
    type: PROFILE,
    payload,
  };
};
