import React from 'react'
import { connect } from 'react-redux'
import {
  startTimerMiddleware,
  stopTimerMiddleware,
  pauseSession,
  unpauseSession,
  endSession,
} from './../actions'
import Button from 'react-md/lib/Buttons/Button'

let StartButton = ({ active, onButtonClick }) => {
  const propsToAdd = {
    label: active
      ? 'End'
      : 'Begin'
  }
  propsToAdd[active
    ? 'secondary'
    : 'primary'
  ] = true
  const icon = active
    ? 'timer_off'
    : 'timer'
  return <Button
    raised
    { ...propsToAdd }
    tooltipLabel={ `${propsToAdd.label} timer`  }
    tooltipDelay={ 200 }
    onClick={ onButtonClick({ active }) }>{ icon }</Button>
}

const mapStateToProps = ({ timer: { currentSession: { startTime }, sessionParts }}) => ({ active: startTime !== null || sessionParts.length > 0 })

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: ({ active }) => () => {
    active
      ? dispatch(pauseSession()) && dispatch(stopTimerMiddleware())
      : (
        dispatch(unpauseSession()) &&
        dispatch(startTimerMiddleware())
      )
  }
})

StartButton = connect(mapStateToProps, mapDispatchToProps)(StartButton)

export default StartButton