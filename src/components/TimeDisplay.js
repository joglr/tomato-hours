import React from 'react'
import createClass from 'create-react-class'

const TimeDisplay = createClass({
  getDefaultProps: () => ({
    time: '0s'
  }),
  render: function() {
    return <h1 className="time-display">{this.props.time}</h1>
  }
})

export default TimeDisplay