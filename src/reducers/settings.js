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
    case TOGGLE_EARNED_SALARY_VISIBILITY:
      return Object.assign({}, state, { showEarnedSalary: action.value })
    case SET_HOURLY_RATE:
      return Object.assign({}, state, { hourlyRate: Number(action.value) })
    case TOGGLE_REMEMBER_SETTINGS:
      return Object.assign({}, state, { rememberSettings: action.value })
    default:
      return state
  }
}