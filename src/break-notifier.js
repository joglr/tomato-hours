import formatTime from './format-time'
import { calculateEllapsedTime } from './reduce-ellapsed-time'
import { setBreakHasBeenNotified } from './actions'

const breakNotifier = store => {
	const {
		sessions: { currentSession: { startTime, breakHasBeenNotified } },
		settings: { sessionDuration, notifications }
	} = store.getState()

	if (startTime) {
		const ellapsedTime = calculateEllapsedTime(startTime, new Date())

		if (ellapsedTime > sessionDuration * 60 && notifications && !breakHasBeenNotified) {
			new Notification('Time for a break!', {
				body: `It is ${formatTime(ellapsedTime)} since you last took one.`
			})
			store.dispatch(setBreakHasBeenNotified())
		}
	}
}

export default breakNotifier
