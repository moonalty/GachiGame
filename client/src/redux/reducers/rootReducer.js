
import {combineReducers} from 'redux'
import {questReducer} from './questReducer'
import { themesReducer } from './themesReducer'

export const rootReducer = combineReducers({
  questions: questReducer,
  themes: themesReducer
})
