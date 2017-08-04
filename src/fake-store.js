import defaultTimer from './reducers/timer'
import defaultSettings from './reducers/settings'
import { createStore, combineReducers } from 'redux'

export default createStore(combineReducers({
  timer: defaultTimer,
  settings: defaultSettings
}))