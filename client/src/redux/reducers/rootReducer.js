
import {combineReducers} from 'redux'
import { profileReducer } from './profileReducer'
import {questReducer} from './questReducer'
import { themesReducer } from './themesReducer'

export const rootReducer = combineReducers({
  themes: themesReducer,
  user: profileReducer,
  questions: questReducer,

})
