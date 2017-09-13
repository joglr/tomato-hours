import { START_TIMER, STOP_TIMER } from 'redux-timer-middleware'

/*
 * Sessions
 */

// Action types
export const TICK = 'TOMATO_TICK'
export const TIMER_END = 'TOMATO_TICK_END'

// Other constants
export const TIMER_NAME = 'TOMATO_TIMER'

// Action creators
export const startTimer = () => ({ type: START_TIMER, payload: { actionName: TICK, timerName: TIMER_NAME }})
export const stopTimer = () => ({ type: STOP_TIMER, payload: { timerName: TIMER_NAME }})

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

