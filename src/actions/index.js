import { START_TIMER, STOP_TIMER } from 'redux-timer-middleware'

/*
 * Sessions
 */
// Action types

// Timer middleware
export const START_TIMER_MIDDLEWARE = START_TIMER
export const STOP_TIMER_MIDDLEWARE = STOP_TIMER

// Session
export const PAUSE_SESSION = 'PAUSE_SESSION'
export const UNPAUSE_SESSION = 'UNPAUSE_SESSION'
export const END_SESSION = 'END_SESSION'
export const SET_SESSION_TITLE = 'SET_SESSION_TITLE'
export const DELETE_SESSION = 'DELETE_SESSION'
export const SET_BREAK_HAS_BEEN_NOTIFIED = 'SET_BREAK_HAS_BEEN_NOTIFIED'

// Other constants
export const TIMER_NAME = 'TOMATO_TIMER'
export const SESSION_TICK = 'SESSION_TICK'
export const START_TOMATO_TIMER = 'START_TOMATO_TIMER'

// Action creators
export const startTimerMiddleware = () => ({
	type: START_TIMER_MIDDLEWARE,
	payload: { actionName: SESSION_TICK, timerName: TIMER_NAME }
})
export const stopTimerMiddleware = () => ({ type: STOP_TIMER_MIDDLEWARE, payload: { timerName: TIMER_NAME } })
export const pauseSession = () => ({ type: PAUSE_SESSION })
export const unpauseSession = () => ({ type: UNPAUSE_SESSION })
export const endSession = () => ({ type: END_SESSION })
export const setSessionTitle = value => ({ type: SET_SESSION_TITLE, payload: { value } })
export const deleteSession = value => ({ type: DELETE_SESSION, payload: { value } })
export const setBreakHasBeenNotified = () => ({ type: SET_BREAK_HAS_BEEN_NOTIFIED })

/*
 * Settings
 */

// Action types
export const TOGGLE_EARNED_SALARY_VISIBILITY = 'TOGGLE_EARNED_SALARY_VISIBILITY'
export const SET_HOURLY_RATE = 'SET_HOURLY_RATE'
export const TOGGLE_REMEMBER_SETTINGS = 'REMEMBER_SETTINGS'
export const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS'

// Action creators
export const setShowEarnedSalary = value => ({ type: TOGGLE_EARNED_SALARY_VISIBILITY, payload: { value } })
export const setHourlyRate = value => ({ type: SET_HOURLY_RATE, payload: { value } })
export const setRememberSettings = value => ({ type: TOGGLE_REMEMBER_SETTINGS, payload: { value } })
export const setEnableNotifications = value => ({ type: TOGGLE_NOTIFICATIONS, payload: { value } })

export const settingToggleActionCreators = {
	setShowEarnedSalary,
	setHourlyRate,
	setRememberSettings,
	setEnableNotifications
}
