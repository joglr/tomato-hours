import React from 'react'
import { connect } from 'react-redux'
import formatTime from './../format-time'
import EarnedSalary from './../components/EarnedSalary'

let TimeDisplay = ({ showEarnedSalary, hourlyRate, ellapsedTime }) => (
  <div>
    <h1 className="time-display">{ formatTime(ellapsedTime) || "0s" }</h1>
    { showEarnedSalary && hourlyRate
      ? <EarnedSalary />
      : [] }
  </div>
)

const mapStateToProps = ({
  sessions: { currentSession: { ellapsedTime } },
  settings: { showEarnedSalary, hourlyRate }
}) => {
  return { showEarnedSalary, hourlyRate, ellapsedTime }
}

TimeDisplay = connect(mapStateToProps)(TimeDisplay)

export default TimeDisplay