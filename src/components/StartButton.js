import React from 'react'
import { connect } from 'react-redux'
import {
  startTimerMiddleware,
  stopTimerMiddleware,
  pauseSession,
  unpauseSession,
  endSession,
} from './../actions'
import ToggleButton from './ToggleButton'

let StartButton = ({ active, onButtonClick }) => {
  return <ToggleButton
  primaryIcon={'timer_off'}
  secondaryIcon={'timer'}
  primaryLabel={'End session'}
  secondaryLabel={'Begin session'}
  condition={active}
  onButtonClick={onButtonClick}
  ></ToggleButton>
}

const mapStateToProps = ({
  timer: { currentSession: { startTime, parts } }
}) => ({
  active: startTime !== null || parts.length > 0
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: ({ condition }) => () => {
    condition
      ? dispatch(pauseSession()) && dispatch(endSession()) && dispatch(stopTimerMiddleware())
      : dispatch(unpauseSession()) && dispatch(startTimerMiddleware())
  }
})

StartButton = connect(mapStateToProps, mapDispatchToProps)(StartButton)

export default StartButton
