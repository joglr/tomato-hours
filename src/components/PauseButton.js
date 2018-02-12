//@ts-check
import React from 'react'
import Button from 'react-md/lib/Buttons/Button'
import { connect } from 'react-redux'
import {
  startTimerMiddleware,
  stopTimerMiddleware,
  pauseSession,
  unpauseSession
} from './../actions'

let PauseButton = ({ active, paused, disabled, onButtonClick }) => {
  const propsToAdd = {
    label: !paused
      ? 'Pause session'
      : 'Continue session',
    disabled
  }
  propsToAdd[paused
    ? 'raised'
    : 'flat'
  ] = true
  const icon = paused
    ? 'play_arrow'
    : 'pause'

  return <Button
    { ...propsToAdd }
    tooltipLabel={ `${propsToAdd.label} timer`  }
    tooltipDelay={ 200 }
    primary
    onClick={ onButtonClick({ paused }) }>{ icon }</Button>
}

const mapStateToProps = ({ timer: { currentSession: { startTime, parts } }}) => ({
  active: startTime !== null,
  paused: startTime === null && parts.length > 0,
  disabled: startTime === null && parts.length === 0
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: ({ paused }) => () => {
    paused
      ? dispatch(unpauseSession()) && dispatch(startTimerMiddleware())
      : dispatch(pauseSession()) && dispatch(stopTimerMiddleware())
  }
})

PauseButton = connect(mapStateToProps, mapDispatchToProps)(PauseButton)

export default PauseButton
