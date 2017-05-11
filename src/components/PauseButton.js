import React from 'react'
import createClass from 'create-react-class'
import Button from 'react-md/lib/Buttons/Button'

const PauseButton = createClass({
  render: function() {
    console.log(this.props.paused)
    const propsToAdd = {
      label: this.props.paused
        ? 'Unpause'
        : 'Pause'
    }
    propsToAdd[this.props.paused
      ? 'raised'
      : 'flat'
    ] = true
    const icon = this.props.paused
      ? 'play_arrow'
      : 'pause'

    return <Button
      { ...propsToAdd }
      primary
      onClick={ this.props.onButtonClick }>{ icon }</Button>
  }
})

export default PauseButton
