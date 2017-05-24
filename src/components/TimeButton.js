import React from 'react'
import createClass from 'create-react-class'
import Button from 'react-md/lib/Buttons/Button'

const TimeButton = createClass({
  getDefaultProps: () => ({
    onButtonClick: () => {}
  }),
  render: function () {
    const propsToAdd = {
      label: this.props.active
        ? 'Stop'
        : 'Start'
    }
    propsToAdd[this.props.active
      ? 'secondary'
      : 'primary'
    ] = true
    const icon = this.props.active
      ? 'timer_off'
      : 'timer'
    return <Button
      raised
      { ...propsToAdd }
      tooltipLabel={ `${propsToAdd.label} timer`  }
      tooltipDelay={ 200 }
      onClick={ this.props.onButtonClick }>{ icon }</Button>
  }
})

export default TimeButton