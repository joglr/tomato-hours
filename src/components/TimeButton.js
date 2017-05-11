import React from 'react'
import createClass from 'create-react-class'
import Button from 'react-md/lib/Buttons/Button'

const TimeButton = createClass({
  getDefaultProps: () => ({
    onButtonClick: () => {}
  }),
  render: function () {
    const label = this.props.active
      ? 'Stop'
      : 'Start'
    const color = this.props.active
      ? { 'secondary': true }
      : { 'primary': true }
    return <Button raised { ...color } label={ label } onClick={ this.props.onButtonClick } />
  }
})

export default TimeButton