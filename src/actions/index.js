/*
 * Sessions
 */

// Action types

export const TOGGLE_TIMER = 'TOGGLE_TIMER_PAUSE'

// Action creators
export const toggleTimer = () => ({ type: TOGGLE_TIMER })

/*
 * Settings
 */

// Action types

export const TOGGLE_EARNED_SALARY_VISIBILITY = 'TOGGLE_EARNED_SALARY_VISIBILITY'
export const SET_HOURLY_RATE = 'SET_SALARY'
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

