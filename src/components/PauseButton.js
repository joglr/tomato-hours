//@ts-check
import React from 'react'
import ToggleButton from './ToggleButton'
import { connect } from 'react-redux'
import {
  startTimerMiddleware,
  stopTimerMiddleware,
  pauseSession,
  unpauseSession
} from './../actions'

let PauseButton = ({
  paused,
  disabled,
  onButtonClick
}) => <ToggleButton
    primaryIcon={'play_arrow'}
    secondaryIcon={'pause'}
    primaryLabel={'Continue session'}
    secondaryLabel={'Pause session'}
    condition={paused}
    disabled={disabled}
    onButtonClick={onButtonClick}
    ></ToggleButton>

const mapStateToProps = ({ timer: { currentSession: { startTime, parts } }}) => ({
  paused: startTime === null && parts.length > 0,
  disabled: startTime === null && parts.length === 0
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: ({ condition }) => () => {
    condition
      ? dispatch(unpauseSession()) && dispatch(startTimerMiddleware())
      : dispatch(pauseSession()) && dispatch(stopTimerMiddleware())
  }
})

PauseButton = connect(mapStateToProps, mapDispatchToProps)(PauseButton)

export default PauseButton
