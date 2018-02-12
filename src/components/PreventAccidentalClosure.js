//@ts-check

import { Component } from 'react'
import { connect } from 'react-redux'
import supportsPassive from './../supports-passive'

const event = "beforeunload"

class PreventAccidentalClosure extends Component {
  handleBeforeUnload(e) {
    const confirmationMessage = "The timer is still running. Are you sure you want to quit?"
    e.returnValue = confirmationMessage
    return confirmationMessage
  }
  componentWillMount() {
    const { addEventListener } = this.props
    addEventListener(event, this.handleBeforeUnload, supportsPassive
      ? { passive: true }
      : false
    )
  }
  componentWillUnmount() {
    const { removeEventListener } = this.props
    removeEventListener(event, this.handleBeforeUnload)
  }
  render() {
    return null
  }
}

export default connect()(PreventAccidentalClosure)
