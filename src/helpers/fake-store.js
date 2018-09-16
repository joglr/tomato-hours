import defaultSession from './../reducers/sessions'
import defaultSettings from './../reducers/settings'
import { createStore, combineReducers } from 'redux'

export default createStore(combineReducers({
  sessions: defaultSession,
  settings: defaultSettings
}))
