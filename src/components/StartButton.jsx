import React from 'react'
import { connect } from 'react-redux'
import {
  startTimerMiddleware,
  stopTimerMiddleware,
  pauseSession,
  unpauseSession,
  endSession
} from './../actions'
import ToggleButton from './ToggleButton'
import TimerOffIcon from '@material-ui/icons/TimerOff'
import TimerIcon from '@material-ui/icons/Timer'

const StartButton = ({ active, onButtonClick }) => {
  return (
    <ToggleButton
      PrimaryIcon={<TimerOffIcon />}
      SecondaryIcon={<TimerIcon />}
      primaryLabel={'End session'}
      secondaryLabel={'Begin session'}
      condition={active}
      onButtonClick={onButtonClick}
    />
  )
}

const mapStateToProps = ({
  sessions: {
    currentSession: { startTime, parts }
  }
}) => ({
  active: startTime !== null || parts.length > 0
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: ({ condition }) => () => {
    condition
      ? dispatch(pauseSession()) &&
        dispatch(endSession()) &&
        dispatch(stopTimerMiddleware())
      : dispatch(unpauseSession()) &&
        dispatch(startTimerMiddleware())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartButton)
