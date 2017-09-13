import getEllapsedTime from './../get-ellapsed-time'
import { TICK, TIMER_END } from './../actions'

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
    case TICK: 
      return state.currentSession.startTime !== null
        ? {
          ...state,
          currentSession: {
            ...state.currentSession,
            startTime: state.currentSession.startTime || new Date(),
            ellapsedTime: getEllapsedTime(state.currentSession.startTime, new Date())
          }
        }
        : {
        ...state,
        currentSession: {
          startTime: new Date(),
          stopTime: null,
          title: defaultTimer.currentSession.title
        }
      }
    case TIMER_END:
      return {
        ...state,
        currentSession: defaultTimer.currentSession,
        sessions: [
          ...state.sessions,
          {
            ...state.currentSession,
            ellapsedTime: getEllapsedTime(state.currentSession.startTime, new Date()),
            title: state.currentSession.title,
            stopTime: new Date()
          }
        ]
      }
    default:
      return state
  }
}