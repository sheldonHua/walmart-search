import { combineReducers } from 'redux'
import { loader } from './loaderReducer'
import { items } from './itemReducer'

export default combineReducers({
  items,
  loader
})