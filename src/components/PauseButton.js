import React from 'react'
import createClass from 'create-react-class'
import Button from 'react-md/lib/Buttons/Button'

const PauseButton = createClass({
  render: function () {
    const propsToAdd = {
      label: !this.props.paused || this.props.disabled
        ? 'Pause'
        : 'Unpause',
      disabled: this.props.disabled
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
      tooltipLabel={ `${propsToAdd.label} timer`  }
      tooltipDelay={ 200 }
      primary
      onClick={ this.props.onButtonClick }>{ icon }</Button>
  }
})

export default PauseButton
