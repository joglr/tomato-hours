import {
  TOGGLE_EARNED_SALARY_VISIBILITY,
  SET_HOURLY_RATE,
  TOGGLE_REMEMBER_SETTINGS
} from './../actions'

export const defaultSettings = {
  showEarnedSalary: false,
  hourlyRate: 0,
  rememberSettings: false
}

export default (state = defaultSettings, action) => {
  switch (action.type) {
    case TOGGLE_EARNED_SALARY_VISIBILITY: {
      return {
        ...state,
        showEarnedSalary: action.payload.value
      }
    }
    case SET_HOURLY_RATE: {
      return {
        ...state,
        hourlyRate: Number(action.payload.value)
      }
    }
    case TOGGLE_REMEMBER_SETTINGS: {
      return {
        ...state,
        rememberSettings: action.payload.value
      }
    }
    default:
      return state
  }
}