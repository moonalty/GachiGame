
import {combineReducers} from 'redux'
import {questReducer} from './questReducer'
import { themesReducer } from './themesReducer'

export const rootReducer = combineReducers({
  questCard: questReducer,
  themes: themesReducer
})
