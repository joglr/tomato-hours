import React from 'react'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'

import TimeDisplay from './TimeDisplay'
import StartButton from './StartButton'
import PauseButton from './PauseButton'

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

const timerStoppedCallback = _ => _

const Timer = createClass({
  getDefaultProps: () => ({ timerStoppedCallback }),
  getInitialState: () => initialState,
  componentWillReceiveProps: function ({ autostart }) {
    const { startTimer, state: { hasBeenStarted } } = this

    if (autostart && hasBeenStarted !== true) startTimer()
  },
  toggleTimer: function () {
    const { state: { ellapsedTime }, startTimer, stopTimer } = this
    if (ellapsedTime === null) startTimer()
    else stopTimer()
  },
  startTimer: function () {
    console.log('%cstartTimer', 'font-weight: bold')
    this.initializeTimer()
    this.setTimerInterval()
  },
  stopTimer: function () {
    const {
      resetTimer,
      clearTimerInterval,
      state: { ellapsedTime, startTime },
      props: { timerStoppedCallback }
    } = this

    if (ellapsedTime > 0) timerStoppedCallback({ ellapsedTime, startTime })
    resetTimer()
    clearTimerInterval()
  },
  initializeTimer: function () {
    this.setState({
      hasBeenStarted: true,
      ellapsedTime: 0,
      formattedTime: getFormattedTime(0),
      startTime: window.location.hash.split('#').length === 2
        ? new Date(Number(window.location.hash.split('#')[1]))
        : new Date()
    })
  },
  setTimerInterval: function () {
    const {
      clearTimerInterval,
      tick
    } = this

    clearTimerInterval()
    const timer = window.setInterval(tick, 1000)
    this.setState({ timer })
  },
  clearTimerInterval: function () {
    window.clearInterval(this.state.timer)
    this.setState({ timer: null })
  },
  resetTimer: function () {
    this.setState({ ellapsedTime: null, startTime: null })
  },
  pauseUnPauseTimer: function () {
    const {
      setTimerInterval,
      clearTimerInterval,
      state: {
        ellapsedTime,
        timer
      }
    } = this

    if (ellapsedTime !== null) timer === null
      ? setTimerInterval()
      : clearTimerInterval()
  },
  tick: function () {
    const {
      state: { startTime },
      props: { tickCallback }
    } = this

    const times = [new Date(), startTime]
      .map(x => x.getTime() / 1000)
    const ellapsedTime = (times[0] - times[1])
    const formattedTime = getFormattedTime(ellapsedTime)
    this.setState({ formattedTime, ellapsedTime })
    if (typeof tickCallback === 'function') tickCallback(ellapsedTime)
  },
  render: function () {
    const {
      pauseUnPauseTimer,
      toggleTimer,
      state: {
        ellapsedTime,
        formattedTime,
        timer
      }
    } = this
    const active = ellapsedTime !== null
    const paused = timer === null
    return (
      <div>
        <TimeDisplay time={ formattedTime }/>
        <div className="md-grid md-grid--no-spacing">
          <div className="md-cell--4-phone md-cell--4-tablet md-cell--6-desktop">
            <div className="timer-button-wrap">
              <StartButton
                active={ active }
                time={ formattedTime }
                onButtonClick={ toggleTimer } />
            </div>
          </div>
          <div className="md-cell--4-phone md-cell--4-tablet md-cell--6-desktop">
            <div className="timer-button-wrap">
              <PauseButton
              disabled={ !active }
              onButtonClick={ pauseUnPauseTimer }
              paused={ paused } />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

Timer.propTypes = {
  tickCallback: PropTypes.func,
  timerStoppedCallback: PropTypes.func
}

export default Timer
