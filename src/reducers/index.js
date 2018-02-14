import { combineReducers } from 'redux'
import settings from './settings'
import sessions from './sessions'

export default combineReducers({ sessions, settings })
