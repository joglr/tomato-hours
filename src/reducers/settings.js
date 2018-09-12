import {
  SET_DISPLAY_EARNED_SALARY,
  SET_HOURLY_RATE,
  SET_ENABLE_BREAKS,
  SET_ENABLE_NOTIFICATIONS,
  SET_SESSION_DURATION,
  SET_REMEMBER_SETTINGS,
  SET_DISPLAY_ABOUT_DIALOG
} from './../actions'

export const defaultSettings = {
  showEarnedSalary: false,
  hourlyRate: 0,
  rememberSettings: false,
  sessionDuration: '',
  enableBreaks: false,
  notifications: false,
  displayAboutDialog: false
}

export default (state = defaultSettings, { type, payload }) => {
  switch (type) {
    case SET_DISPLAY_EARNED_SALARY: {
      return {
        ...state,
        showEarnedSalary: payload.value
      }
    }
    case SET_HOURLY_RATE: {
      return {
        ...state,
        hourlyRate: Number(payload.value)
      }
    }
    case SET_ENABLE_BREAKS: {
      return {
        ...state,
        enableBreaks: payload.value
      }
    }
    case SET_REMEMBER_SETTINGS: {
      return {
        ...state,
        rememberSettings: payload.value
      }
    }
    case SET_ENABLE_NOTIFICATIONS: {
      return {
        ...state,
        notifications: payload.value
      }
    }
    case SET_SESSION_DURATION: {
      return {
        ...state,
        sessionDuration: payload.value
      }
    }
    case SET_DISPLAY_ABOUT_DIALOG: {
      return {
        ...state,
        displayAboutDialog: payload.value
      }
    }
    default:
      return state
  }
}