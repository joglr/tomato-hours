// Action types
export const SET_DISPLAY_EARNED_SALARY = 'SET_DISPLAY_EARNED_SALARY'
export const SET_HOURLY_RATE = 'SET_HOURLY_RATE'
export const SET_ENABLE_BREAKS = 'SET_ENABLE_BREAKS'
export const SET_ENABLE_NOTIFICATIONS = 'SET_ENABLE_NOTIFICATIONS'
export const SET_SESSION_DURATION = 'SET_SESSION_DURATION'
export const SET_REMEMBER_SETTINGS = 'SET_REMEMBER_SETTINGS'
export const SET_DISPLAY_ABOUT_DIALOG = 'SET_DISPLAY_ABOUT_DIALOG'

// Action creators
export const setDisplayEarnedSalary = value => ({ type: SET_DISPLAY_EARNED_SALARY, payload: { value } })
export const setHourlyRate = value => ({ type: SET_HOURLY_RATE, payload: { value } })
export const setEnableBreaks = value => ({ type: SET_ENABLE_BREAKS, payload: { value }})
export const setRememberSettings = value => ({ type: SET_REMEMBER_SETTINGS, payload: { value } })
export const setEnableNotifications = value => ({ type: SET_ENABLE_NOTIFICATIONS, payload: { value } })
export const setSessionDuration = value => ({ type: SET_SESSION_DURATION, payload: { value } })
export const setDisplayAboutDialog = value => ({ type: SET_DISPLAY_ABOUT_DIALOG, payload: { value } })

export const settingActionCreators = {
	setDisplayEarnedSalary,
	setHourlyRate,
	setEnableBreaks,
	setRememberSettings,
  setEnableNotifications,
	setSessionDuration,
	setDisplayAboutDialog
}
