import React from 'react'
import { connect } from 'react-redux'
import EllapsedTime from './EllapsedTime'
import EarnedSalary from './EarnedSalary'

let TimeDisplay = ({ showEarnedSalary, hourlyRate }) => (
  <div>
    <EllapsedTime />
    {showEarnedSalary && hourlyRate && hourlyRate > 0 ? (
      <EarnedSalary />
    ) : (
      []
    )}
  </div>
)

const mapStateToProps = ({
  settings: { showEarnedSalary, hourlyRate }
}) => {
  return {
    showEarnedSalary,
    hourlyRate
  }
}

TimeDisplay = connect(mapStateToProps)(TimeDisplay)

export default TimeDisplay
