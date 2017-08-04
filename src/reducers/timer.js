import calculateEllapsedTime from './../calculate-ellapsed-time'
import {
  TOGGLE_TIMER
} from './../actions'

export const defaultTimer = {
  currentSession: {
    startTime: null,
    stopTime: null,
    title: "",
    index: 0
  },
  sessions: [],
}

export default (state = defaultTimer, action) => {
  switch (action.type) {
    case TOGGLE_TIMER:
      return state.currentSession.startTime === null
        ? {
          ...state,
          currentSession: {
            startTime: new Date(),
            stopTime: null,
            title: defaultTimer.currentSession.title
          }
        }
        : {
          ...state,
          currentSession: defaultTimer.currentSession,
          sessions: [
            ...state.sessions,
            {
              ...state.currentSession,
              ellapsedTime: calculateEllapsedTime(state.currentSession.startTime, new Date()),
              title: state.currentSession.title,
              stopTime: new Date()
            }
          ]
        }
    default:
      return state
  }
}