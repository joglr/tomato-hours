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
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const PauseButton = ({
  paused,
  disabled,
  onButtonClick
}) => (
  <ToggleButton
    PrimaryIcon={<PauseIcon />}
    SecondaryIcon={<PlayArrowIcon />}
    primaryLabel={'Pause session'}
    secondaryLabel={'Continue session'}
    condition={!paused}
    disabled={disabled}
    onButtonClick={onButtonClick}
  />
)

const mapStateToProps = ({
  sessions: {
    currentSession: { startTime, parts }
  }
}) => ({
  paused: startTime === null && parts.length > 0,
  disabled: startTime === null && parts.length === 0
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: ({ condition }) => () => {
    condition
      ? dispatch(pauseSession()) &&
        dispatch(stopTimerMiddleware())
      : dispatch(unpauseSession()) &&
        dispatch(startTimerMiddleware())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PauseButton)
