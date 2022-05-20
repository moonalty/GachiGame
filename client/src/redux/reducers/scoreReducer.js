import { SCORE, SCORE_MINUS } from "../actionTypes/scoreAT";
const initialState = { score: 0 };

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE:
      console.log(">>>>>>>>>>>>>>>state", state.score);
      return { ...state, score: state.score + action.payload };
    case SCORE_MINUS:
      if (state.score > 0)
        return { ...state, score: state.score - action.payload };

    default:
      return state;
  }
};
