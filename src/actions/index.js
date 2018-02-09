import { START_TIMER, STOP_TIMER } from 'redux-timer-middleware'

/*
* Sessions
*/

// Action types
export const START_TIMER_MIDDLEWARE = START_TIMER
export const STOP_TIMER_MIDDLEWARE = STOP_TIMER
export const SESSION_TICK = 'SESSION_TICK'

export const PAUSE_SESSION = 'SESSION_TICK_END'
export const UNPAUSE_SESSION = 'UNPAUSE_SESSION'
export const END_SESSION = 'END_SESSION'

// Other constants
export const TIMER_NAME = 'TOMATO_TIMER'
export const START_TOMATO_TIMER = 'START_TOMATO_TIMER'

// Action creators
export const startTimerMiddleware = () => ({ type: START_TIMER_MIDDLEWARE, payload: { actionName: SESSION_TICK, timerName: TIMER_NAME }})
export const stopTimerMiddleware = () => ({ type: STOP_TIMER_MIDDLEWARE, payload: { timerName: TIMER_NAME }})
export const pauseSession = () => ({ type: PAUSE_SESSION })
export const unpauseSession = () => ({ type: UNPAUSE_SESSION })
export const endSession = () => ({ type: END_SESSION })
/*
 * Settings
 */

// Action types
export const TOGGLE_EARNED_SALARY_VISIBILITY = 'TOGGLE_EARNED_SALARY_VISIBILITY'
export const SET_HOURLY_RATE = 'SET_HOURLY_RATE'
export const TOGGLE_REMEMBER_SETTINGS = 'REMEMBER_SETTINGS'

// Action creators
export const setShowEarnedSalary = value => ({ type: TOGGLE_EARNED_SALARY_VISIBILITY, value })
export const setHourlyRate = value => ({ type: SET_HOURLY_RATE, value })
export const setRememberSettings = value => ({ type: TOGGLE_REMEMBER_SETTINGS, value })

export const settingToggleActionCreators = {
  setShowEarnedSalary,
  setHourlyRate,
  setRememberSettings
}

