import React from 'react'
import createClass from 'create-react-class'
import TimeButton from './TimeButton'
import PauseButton from './PauseButton'
import Timer from './Timer'

const initialState = {
  startTime: null,
  timer: null,
  formattedTime: '0s'
}

const convertToValues = function(startTime) {
  const diff = new Date().getTime() - startTime

  const values = []
  const factors = [60, 60, 24, 365.2422]

  values.push(diff / 1000)
  factors.forEach((factor, i) => values.push(values[i] / factor))

  return values
    .map((value, i) => value % factors[i])
    .map(Math.floor)
}

const getFormattedTime = function (startTime) {
  const units = ['s', 'm', 'h', 'd', 'y']

  return convertToValues(startTime)
    .splice(0)
    .filter((x, i) => x > 0 || i === 0)
    .map((x, i) => `${x}${units[i]}`)
    .reverse()
    .join(' ')
}

const DefaultView = createClass({
  getInitialState: () => initialState,
  toggleTimer: function () {
    if (this.state.startTime) this.stopTimer()
    else this.startTimer()
  },
  startTimer: function () {
    const startTime = new Date().getTime()
    this.setState({
      startTime,
      timer: window.setInterval(this.tick, 1000),
      formattedTime: getFormattedTime(startTime)
    })
  },
  stopTimer: function() {
    window.clearInterval(this.state.timer)
    this.setState(initialState)
  },
  tick: function () {
    const formattedTime = getFormattedTime(this.state.startTime)
    this.setState({ formattedTime })
  },
  render: function () {
    let children = [
      <Timer  time={ this.state.formattedTime }/>,
      <TimeButton
        key={ 1 }
        active={ !!this.state.timer }
        time={ this.state.formattedTime }
        onButtonClick={ this.toggleTimer } />
    ].reverse()
    if (this.state.timer) children.unshift(<PauseButton key={ 2 }/>)
    return <div> { children.reverse().map((el, i) => <div key={ i }>{ el }</div>) } </div>
  }
})

export default DefaultView
