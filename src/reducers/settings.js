import {
  TOGGLE_EARNED_SALARY_VISIBILITY,
  SET_HOURLY_RATE,
  TOGGLE_REMEMBER_SETTINGS,
  TOGGLE_NOTIFICATIONS
} from './../actions'

export const defaultSettings = {
  showEarnedSalary: false,
  hourlyRate: 0,
  rememberSettings: false,
  notifications: false
}

export default (state = defaultSettings, { type, payload }) => {
  switch (type) {
    case TOGGLE_EARNED_SALARY_VISIBILITY: {
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
    case TOGGLE_REMEMBER_SETTINGS: {
      return {
        ...state,
        rememberSettings: payload.value
      }
    }
    case TOGGLE_NOTIFICATIONS: {
      return {
        ...state,
        notifications: payload.value
      }
    }
    default:
      return state
  }
}