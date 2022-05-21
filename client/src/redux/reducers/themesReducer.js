import { SHOW_THEMES } from "../actionTypes/themesAT";

const initialState = { themes: [] };

export const themesReducer = (state = initialState, action) => {
  console.log('state>>>',state);
  switch (action.type) {
    case SHOW_THEMES:
      console.log("STATE>>>>", action.payload);
      return { ...state, themes: action.payload };

    default:
      return state;
  }
};
