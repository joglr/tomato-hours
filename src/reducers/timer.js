import getEllapsedTime from './../get-ellapsed-time'
import getTimeFromHoursAndMinutes from './../get-time-from-hours-and-minutes'
import {
  SESSION_TICK,
  PAUSE_SESSION,
  UNPAUSE_SESSION,
  END_SESSION
} from './../actions'

export const defaultTimer = {
  currentSession: {
    title: "",
    startTime: null,
    stopTime: null,
    ellapsedTime: 0,
    index: 0,
  },
  sessionParts: [],
  sessions: [],
}

export default (state = defaultTimer, action) => {
  switch (action.type) {
    // Should add a new part to the current session with a startTime: new Date()
    case UNPAUSE_SESSION: // AKA START_SESSION
      return {
          ...state,
          currentSession: {
            // Temporary method of inputing startTime
            startTime: state.sessionParts.length === 0
              ? window.location.hash.split('#').length === 2
                ? new Date(getTimeFromHoursAndMinutes(window.location.hash.split('#')[1]))
                : new Date()
              : new Date(),
            stopTime: null,
            title: defaultTimer.currentSession.title,
            ellapsedTime: getEllapsedTime(state.currentSession.startTime, new Date())
          }
        }
    case SESSION_TICK:
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          // Re-calculate ellapsedTime
          ellapsedTime: getEllapsedTime(state.currentSession.startTime, new Date())
        }
      }
    // Should move all the parts to a new session entry
    case END_SESSION:
      return {
        ...state,
        currentSession: defaultTimer.currentSession,
        sessionParts: [],
        sessions: [
          ...state.sessions,
          {
            ...state.currentSession,
            parts: state.sessionParts
          }
        ]
      }
    // Should reset currentSession and move startTime to a new sessionPart with a stopTime
    case PAUSE_SESSION:
      return {
        ...state,
        // Reset currenSession to default
        currentSession: {
          ...defaultTimer.currentSession,
          ellapsedTime: state.currentSession.ellapsedTime
        },
        sessionsParts: [
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
