import {combineReducers} from 'redux'
import {questReducer} from './questReducer'

export const rootReducer = combineReducers({
  questCard: questReducer,
})
