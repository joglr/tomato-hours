import reduceEllapsedTime from './../reduce-ellapsed-time'
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
    ellapsedTime: 0,
    parts: []
  },
  sessions: [],
}

export default (state = defaultTimer, action) => {
  switch (action.type) {
    // Should add a new part to the current session with a startTime: new Date()
    case UNPAUSE_SESSION: // AKA START_SESSION
      const startTime = state.currentSession.parts.length === 0 && state.sessions.length === 0
        ? window.location.hash.split('#').length === 2
          ? new Date(getTimeFromHoursAndMinutes(window.location.hash.split('#')[1]))
          : new Date()
        : new Date()
      return {
          ...state,
          currentSession: {
            // Temporary method of inputing startTime
            ...defaultTimer.currentSession,
            parts: state.currentSession.parts,
            startTime,
            ellapsedTime: reduceEllapsedTime(state.currentSession.parts)
          }
        }
    case SESSION_TICK:
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          // Re-calculate ellapsedTime
          ellapsedTime: reduceEllapsedTime([
            ...state.currentSession.parts,
            {
              startTime: state.currentSession.startTime,
              stopTime: new Date()
            }
          ])
        }
      }
    // Should move the currentSession to a new a new session entry
    case END_SESSION:
      return {
        ...state,
        ...defaultTimer,
        sessions: [
          ...state.sessions,
          { ...state.currentSession }
        ]
      }
    // Should reset currentSession and move startTime to a new sessionPart with a stopTime
    case PAUSE_SESSION:
      return {
        ...state,
        // Reset currenSession to default
        currentSession: {
          ...defaultTimer.currentSession,
          // Temporarily display current ellapsedTime until a new one is calculated
          ellapsedTime: state.currentSession.ellapsedTime,
          parts: [
            // Move the currentSession to sessions array
            ...state.currentSession.parts,
            ...state.currentSession.startTime !== null
              ? [
                {
                  startTime: state.currentSession.startTime,
                  stopTime: new Date()
                }
              ]
              : [],
          ]
        },
      }
    default:
      return state
  }
}
