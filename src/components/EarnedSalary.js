import React from 'react'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'

const EarnedSalary = createClass({
  render: function() {
    if (this.props.ellapsedTime) {
      const { ellapsedTime, hourlyRate } = this.props
      return <div>Earned salary: { (this.props.ellapsedTime / (3600 * 1000)) * hourlyRate }</div>
    } else {
      return <div></div>
    }
  }
})

EarnedSalary.propTypes = {
  hourlyRate: PropTypes.number,
  ellapsedTime: PropTypes.number
}

export default EarnedSalary