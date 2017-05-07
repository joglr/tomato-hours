import React from 'react'
import createClass from 'create-react-class'
import Button from 'react-md/lib/Buttons/Button'

const TimeButton = createClass({
  getDefaultProps: () => ({
    onButtonClick: () => {}
  }),
  render: function () {
    return <Button raised primary label="Toggle" onClick={this.props.onButtonClick} />
  }
})

export default TimeButton