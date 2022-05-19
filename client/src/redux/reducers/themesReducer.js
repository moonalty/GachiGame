import { THEMES } from "../actionTypes/themesAT";

const initialState = { themes: [] }

export const themesReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {

    case THEMES:
      console.log('STATE>>>>', action.payload);
      return { ...state, themes: [...state.themes, action.payload] }


    default:
      return state
  }
}
