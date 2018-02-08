import getEllapsedTime from './../get-ellapsed-time'
import getTimeFromHoursAndMinutes from './../get-time-from-hours-and-minutes'
import { TICK, START_TOMATO_TIMER, TIMER_END } from './../actions'

export const defaultTimer = {
  currentSession: {
    startTime: null,
    stopTime: null,
    ellapsedTime: 0,
    title: "",
    index: 0
  },
  sessions: [],
}

export default (state = defaultTimer, action) => {
  switch (action.type) {
    case START_TOMATO_TIMER:
      return {
          ...state,
          currentSession: {
            // Temporary method of inputing startTime
            startTime: window.location.hash.split('#').length === 2
              ? new Date(getTimeFromHoursAndMinutes(window.location.hash.split('#')[1]))
              : new Date(),
            stopTime: null,
            title: defaultTimer.currentSession.title,
            ellapsedTime: getEllapsedTime(state.currentSession.startTime, new Date())
          }
        }
    case TICK:
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          // Re-calculate ellapsedTime
          ellapsedTime: getEllapsedTime(state.currentSession.startTime, new Date())
        }
      }
    case TIMER_END:
      return {
        ...state,
        // Reset currenSession to default
        currentSession: defaultTimer.currentSession,
        sessions: [
          // Move the currentSession to sessions array
          {
            ...state.currentSession,
            ellapsedTime: getEllapsedTime(state.currentSession.startTime, new Date()),
            stopTime: new Date()
          },
          ...state.sessions
        ]
      }
    default:
      return state
  }
}
