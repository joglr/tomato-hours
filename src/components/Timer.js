import React from 'react'
import createClass from 'create-react-class'
import TimeDisplay from './TimeDisplay'
import StartButton from './StartButton'
import PauseButton from './PauseButton'
import Options from './Options'
import './DefaultView.css'

const initialState = {
  ellapsedTime: null,
  timer: null,
  formattedTime: '0s',
}

const convertToValues = function(ellapsedTime) {
  const values = [ ellapsedTime ]
  const factors = [60, 60, 24, 365.2422]

  factors.forEach((factor, i) => values.push(values[i] / factor))

  return values
    .map((value, i) => value % factors[i])
    .map(Math.floor)
}

const getFormattedTime = function (ellapsedTime) {
  const units = ['s', 'm', 'h', 'd', 'y']

  return convertToValues(ellapsedTime)
    .splice(0)
    .filter((x, i) => x > 0 || i === 0)
    .map((x, i) => `${x}${units[i]}`)
    .reverse()
    .join(' ')
}

const Timer = createClass({
  getDefaultProps: () => ({
    timerStoppedCallback: () => false
  }),
  getInitialState: () => initialState,
  toggleTimer: function () {
    if (this.state.ellapsedTime !== null) {
      if (this.state.ellapsedTime > 0) {
        const { ellapsedTime, startTime } = this.state
        this.props.timerStoppedCallback({ ellapsedTime, startTime })
      }
      this.resetTimer()
      this.clearTimerInterval()
    }
    else {
      this.initializeTimer()
      this.setTimerInterval()
    }
  },
  initializeTimer: function () {
    this.setState({
      ellapsedTime: 0,
      formattedTime: getFormattedTime(0),
      startTime: new Date().getTime()
    })
  },
  setTimerInterval: function () {
    this.clearTimerInterval()
    this.setState({
      timer: window.setInterval(this.tick, 1000)
    })
  },
  clearTimerInterval: function () {
    window.clearInterval(this.state.timer)
    this.setState({ timer: null })
  },
  resetTimer: function () {
    this.setState({ 
      ellapsedTime: null,
      startTime: null
    })
  },
  pauseUnPauseTimer: function () {
    this.state.timer === null
      ? this.setTimerInterval()
      : this.clearTimerInterval()
  },
  tick: function () {
    const ellapsedTime = this.state.ellapsedTime + 1
    const formattedTime = getFormattedTime(ellapsedTime)
    this.setState({ formattedTime, ellapsedTime })
  },
  render: function () {
    const active = this.state.ellapsedTime !== null
    const paused = this.state.timer === null
    let children = [
    ].reverse()
    if (active) children.push(
      <div className="md-cell--2-phone md-cell--4-tablet md-cell--6-desktop">
        <div className="timer-button-wrap">
          <PauseButton
          key={ 0 }
          onButtonClick={ this.pauseUnPauseTimer }
          paused={ paused } />
        </div>
      </div>
      )
    return (
      <div>
        <div>
          <TimeDisplay
            key={ 0 }
            time={ this.state.formattedTime }/>
        </div>
        <div className="md-grid">
          <div className="md-cell--2-phone md-cell--4-tablet md-cell--6-desktop">
            <div className="timer-button-wrap">
              <StartButton
                key={ 0 }
                active={ active }
                time={ this.state.formattedTime }
                onButtonClick={ this.toggleTimer } />
            </div>
          </div>
          { children }
        </div>
      </div>
    )
  }
})

export default Timer
