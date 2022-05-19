import { THEMES } from "../actionTypes/themesAT"

export const themesRenderAC = (payload) => {
  return {
    type: THEMES,
    payload
  }
}
