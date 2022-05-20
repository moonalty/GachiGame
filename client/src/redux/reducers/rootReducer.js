
import {combineReducers} from 'redux'
import { profileReducer } from './profileReducer'
import {questReducer} from './questReducer'
import { scoreReducer } from './scoreReducer'
import { themesReducer } from './themesReducer'

export const rootReducer = combineReducers({
  themes: themesReducer,
  user: profileReducer,
  questions: questReducer,
  score: scoreReducer,
  

})
