import { PROFILE } from "../actionTypes/profileAT";

const initialState = { user: [] };

export const profileReducer = (state = initialState, action) => {
  console.log('action>>>',action.payload);
  switch (action.type) {
    case PROFILE:
      console.log("STATE>>>>", action.payload);
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
