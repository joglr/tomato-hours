import React from 'react'
import { connect } from 'react-redux'
import { startTimerMiddleware, stopTimerMiddleware, pauseSession, unpauseSession, endSession } from './../actions'
import ToggleButton from './ToggleButton'

const StartButton = ({ active, onButtonClick }) => {
	return (
		<ToggleButton
			primaryIcon={'timer_off'}
			secondaryIcon={'timer'}
			primaryLabel={'End session'}
			secondaryLabel={'Begin session'}
			condition={active}
			onButtonClick={onButtonClick}
		/>
	)
}

const mapStateToProps = ({ sessions: { currentSession: { startTime, parts } } }) => ({
	active: startTime !== null || parts.length > 0
})

const mapDispatchToProps = dispatch => ({
	onButtonClick: ({ condition }) => () => {
		condition
			? dispatch(pauseSession()) && dispatch(endSession()) && dispatch(stopTimerMiddleware())
			: dispatch(unpauseSession()) && dispatch(startTimerMiddleware())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(StartButton)
