// Action types
export const TOGGLE_EARNED_SALARY_VISIBILITY = 'TOGGLE_EARNED_SALARY_VISIBILITY'
export const SET_HOURLY_RATE = 'SET_HOURLY_RATE'
export const TOGGLE_REMEMBER_SETTINGS = 'REMEMBER_SETTINGS'
export const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS'
export const SET_SESSION_DURATION = 'SET_SESSION_DURATION'

// Action creators
export const setShowEarnedSalary = value => ({ type: TOGGLE_EARNED_SALARY_VISIBILITY, payload: { value } })
export const setHourlyRate = value => ({ type: SET_HOURLY_RATE, payload: { value } })
export const setRememberSettings = value => ({ type: TOGGLE_REMEMBER_SETTINGS, payload: { value } })
export const setEnableNotifications = value => ({ type: TOGGLE_NOTIFICATIONS, payload: { value } })
export const setSessionDuration = value => ({ type: SET_SESSION_DURATION, payload: { value } })

export const settingToggleActionCreators = {
	setShowEarnedSalary,
	setHourlyRate,
	setRememberSettings,
  setEnableNotifications,
  setSessionDuration
}
