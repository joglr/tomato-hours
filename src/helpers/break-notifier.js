import formatTime from './format-time'

const breakNotifier = ({ store, navigator, calculateEllapsedTime, Date, setBreakHasBeenNotified }) => {
	const {
		sessions: { currentSession: { startTime, breakHasBeenNotified } },
		settings: { sessionDuration, notifications }
	} = store.getState()

	if (startTime) {
		const ellapsedTime = calculateEllapsedTime(startTime, new Date())

		if (ellapsedTime > sessionDuration * 60 && notifications && !breakHasBeenNotified) {
			navigator.serviceWorker.ready.then(registration =>
				registration.showNotification('Time for a break!', {
					body: `It is ${formatTime(ellapsedTime, true)} since you last took one.`,
					icon: 'time-tracker.svg',
					image: 'time-tracker.svg',
					badge: 'time-tracker-badge.png',
					vibrate: [ 250, 250, 250, 250 ],
					tag: 'break-notification'
				})
			)
			store.dispatch(setBreakHasBeenNotified())
		}
	}
}

export default breakNotifier
