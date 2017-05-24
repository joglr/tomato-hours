import React from 'react'
import createClass from 'create-react-class'

const Timer = createClass({
  getDefaultProps: () => ({
    time: '0s'
  }),
  render: function() {
    return <h1 className="timer">{this.props.time}</h1>
  }
})

export default Timer