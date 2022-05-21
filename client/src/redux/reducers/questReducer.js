import { SHOW_QUESTIONS } from "../actionTypes/questAT";
const initialState = { questions: [] };

export const questReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUESTIONS:
      return { ...state, questions: action.payload };

    default:
      return state;
  }
};
