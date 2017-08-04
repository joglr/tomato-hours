import React from 'react'
import { connect } from 'react-redux'
import { toggleTimer } from './../actions'
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
    onClick={ onButtonClick }>{ icon }</Button>
}

const mapStateToProps = ({ timer: { currentSession: { startTime }}}) => ({
  active: startTime !== null,
})

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: () => dispatch(toggleTimer())
})

StartButton = connect(mapStateToProps, mapDispatchToProps)(StartButton)

export default StartButton