import { COSTS } from "../actionTypes/costsAT";

const initialState = { costs: [] };

export const costsReducer = (state = initialState, action) => {
  console.log('action>>>',action);
  switch (action.type) {
    case COSTS:
      console.log("STATECOSTS>>>>", action.payload);
      return { ...state, costs: action.payload };

    default:
      return state;
  }
};
