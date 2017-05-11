import React from 'react'
import createClass from 'create-react-class'
import TimeButton from './TimeButton'
import PauseButton from './PauseButton'
import Timer from './Timer'

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

const DefaultView = createClass({
  getInitialState: () => initialState,
  toggleTimer: function () {
    if (this.state.ellapsedTime > 0) {
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
      formattedTime: getFormattedTime(0)
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
    this.setState({ ellapsedTime: null })
  },
  pauseUnPauseTimer: function () {
    this.state.timer === null
      ? this.setTimerInterval()
      : this.clearTimerInterval()
  },
  tick: function () {
    const ellapsedTime = this.state.ellapsedTime + 1
    const formattedTime = getFormattedTime(ellapsedTime)
    const stateToSet = { formattedTime, ellapsedTime }
    this.setState(stateToSet)
    console.log(stateToSet)
  },
  render: function () {
    const active = this.state.ellapsedTime !== null
    const paused = this.state.timer === null
    let children = [
      <Timer  time={ this.state.formattedTime }/>,
      <TimeButton
        key={ 1 }
        active={ active }
        time={ this.state.formattedTime }
        onButtonClick={ this.toggleTimer } />
    ].reverse()
    if (active) children.unshift(<PauseButton
      key={ 2 }
      onButtonClick={ this.pauseUnPauseTimer }
      paused={ paused } />)
    return <div> { children.reverse().map((el, i) => <div key={ i }>{ el }</div>) } </div>
  }
})

export default DefaultView
