import React from 'react'
import createClass from 'create-react-class'
import TimeButton from './TimeButton'
import Timer from './Timer'

const initialState = {
  startTime: null,
  timer: null,
  formattedTime: '-'
}

const DefaultView = createClass({
  getInitialState: () => (initialState),
  getEllapsedTime: function () {
    return (new Date().getTime() - this.state.startTime)
  },
  convertToDiffs: function() {
    const diff = this.getEllapsedTime()
    const units = []

    units.push(diff / 1000)
    units.push(units[0] / 60)
    units.push(units[1] / 60)
    units.push(units[2] / 24)
    units[0] %= 60
    units[1] %= 60
    units[2] %= 24

    const roundedUnits = units.map(Math.floor)

    return roundedUnits
  },
  getFormattedTime: function () {
    const units = ['s', 'm', 'h', 'd']

    return this.convertToDiffs()
      .splice(0)
      .filter(x => x > 0)
      .map((x, i) => `${x}${units[i]}`)
      .reverse()
      .join(' ')
  },
  toggleTimer: function () {
    if (this.state.startTime) this.stopTimer()
    else this.startTimer()
  },
  startTimer: function () {
    this.setState({
      startTime: new Date().getTime(),
      timer: window.setInterval(this.tick, 1)
    })
  },
  stopTimer: function() {
    window.clearInterval(this.state.timer)
    this.setState(initialState)
  },
  tick: function () {
    this.setState({ formattedTime: this.getFormattedTime() })
  },
  render: function () {
    return <div>
      <Timer time={this.state.formattedTime}/>
      <TimeButton time={this.state.formattedTime} onButtonClick={this.toggleTimer} />
      <PauseButton />
    </div>
  }
})

export default DefaultView
