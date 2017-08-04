import React from 'react'
import { connect } from 'react-redux'
import TimeDisplay from './TimeDisplay'
import StartButton from './StartButton'
import PauseButton from './PauseButton'

let Timer = () => (
  <div>
    <TimeDisplay />
    <div className="md-grid md-grid--no-spacing">
      <div className="md-cell--4-phone md-cell--4-tablet md-cell--6-desktop">
        <div className="timer-button-wrap">
          <StartButton />
        </div>
      </div>
      <div className="md-cell--4-phone md-cell--4-tablet md-cell--6-desktop">
        <div className="timer-button-wrap">
          <PauseButton
          disabled={ true }
          paused={ false } />
        </div>
      </div>
    </div>
  </div>
)

Timer = connect()(Timer)

export default Timer
