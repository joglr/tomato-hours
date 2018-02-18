import reduceEllapsedTime from './../reduce-ellapsed-time'
import getTimeFromHoursAndMinutes from './../get-time-from-hours-and-minutes'
import {
	SESSION_TICK,
	PAUSE_SESSION,
	UNPAUSE_SESSION,
	END_SESSION,
	SET_SESSION_TITLE,
	DELETE_SESSION,
	SET_BREAK_HAS_BEEN_NOTIFIED
} from './../actions'

export const defaultSession = {
	currentSession: {
		title: '',
		startTime: null,
		breakHasBeenNotified: false,
		ellapsedTime: 0,
		parts: []
	},
	sessions: []
}

export default (state = defaultSession, { type, payload }) => {
	switch (type) {
		// adds a new part to the current session with a startTime: new Date()
		case SET_SESSION_TITLE: {
			return {
				...state,
				currentSession: {
					...state.currentSession,
					title: payload.value
				}
			}
		}
		// resets currentSession and move startTime to a new sessionPart with a stopTime
		case PAUSE_SESSION: {
			return {
				...state,
				// Reset currenSession to default
				currentSession: {
					...defaultSession.currentSession,
					title: state.currentSession.title,
					// Temporarily display current ellapsedTime until a new one is calculated
					ellapsedTime: state.currentSession.ellapsedTime,
					parts: [
						// Move the currentSession to sessions array
						...state.currentSession.parts,
						...(state.currentSession.startTime !== null
							? [
									{
										startTime: state.currentSession.startTime,
										stopTime: new Date()
									}
								]
							: [])
					]
				}
			}
		}
		// unpauses currentSession or starts a new one
		case UNPAUSE_SESSION: {
			const startTime =
				state.currentSession.parts.length === 0 && state.sessions.length === 0
					? window.location.hash.split('#').length === 2
						? new Date(getTimeFromHoursAndMinutes(window.location.hash.split('#')[1]))
						: new Date()
					: new Date()
			return {
				...state,
				currentSession: {
					// Temporary method of inputing startTime
					...state.currentSession,
					parts: state.currentSession.parts,
          breakHasBeenNotified: false,
					startTime,
					ellapsedTime: reduceEllapsedTime(state.currentSession.parts)
				}
			}
		}
		// updates the ellapsedTime
		case SESSION_TICK: {
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
		}
		// moves the currentSession to a new a new session entry
		case END_SESSION: {
			return {
				...state,
				...defaultSession,
				currentSession: defaultSession.currentSession,
				sessions: [
					...state.sessions,
					{
						...state.currentSession,
						title: state.currentSession.title.trim()
					}
				]
			}
		}
		// deletes the requested session
		case DELETE_SESSION: {
			return {
				...state,
				sessions: state.sessions.filter((session, key) => key !== payload.value)
			}
		}
		default: {
			return state
		}

    case SET_BREAK_HAS_BEEN_NOTIFIED: {
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          breakHasBeenNotified: true
        }
      }
    }
	}
}
