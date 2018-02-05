import { combineReducers } from 'redux'
import settings from './settings'
import timer from './timer'

export default combineReducers({ timer, settings })
