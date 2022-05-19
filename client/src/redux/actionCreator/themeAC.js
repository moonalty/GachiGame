import { SHOW_THEMES } from "../actionTypes/themesAT";

export const themesRenderAC = (payload) => {
  return {
    type: SHOW_THEMES,
    payload,
  };
};
