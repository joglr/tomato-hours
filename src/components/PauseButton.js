//@ts-check
import React from 'react'
import Button from 'react-md/lib/Buttons/Button'
import { connect } from 'react-redux'
import {
  pauseSession,
  unpauseSession,
  stopTimerMiddleware
} from './../actions'

let PauseButton = ({ active, paused, disabled, onButtonClick }) => {
  const propsToAdd = {
    label: !paused
      ? 'Pause'
      : 'Continue',
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

const mapStateToProps = ({ timer: { currentSession: { startTime }, sessionParts }}) => ({
  active: startTime !== null,
  paused: startTime === null && sessionParts.length > 0,
  disabled: startTime === null && sessionParts.length === 0
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: ({ paused }) => () => {
    paused
      ? dispatch(unpauseSession())
      : (dispatch(pauseSession()) && dispatch(stopTimerMiddleware()))
  }
})

PauseButton = connect(mapStateToProps, mapDispatchToProps)(PauseButton)

export default PauseButton
