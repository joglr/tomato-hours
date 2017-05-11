import React from 'react'
import createClass from 'create-react-class'
import Button from 'react-md/lib/Buttons/Button'

const PauseButton = createClass({
  render: function() {
    return <Button raised primary label="Pause" />
  }
})

export default PauseButton