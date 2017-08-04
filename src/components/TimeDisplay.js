import React from 'react'
import { connect } from 'react-redux'
import formatTime from './../format-time'
import calculateEllapsedTime from './../calculate-ellapsed-time'
import EarnedSalary from './../components/EarnedSalary'

let TimeDisplay = ({ showEarnedSalary, hourlyRate, startTime }) => (
  <div>
    <h1 className="time-display">{ startTime ? formatTime(calculateEllapsedTime(startTime, new Date())) : "0s"}</h1>
    { showEarnedSalary && hourlyRate && startTime
      ? <EarnedSalary />
      : [] }
  </div>
)

const mapStateToProps = ({
  settings: { showEarnedSalary, hourlyRate },
  timer: { currentSession: { startTime } }
}) => {
  return { showEarnedSalary, hourlyRate, startTime }
}

TimeDisplay = connect(mapStateToProps)(TimeDisplay)

export default TimeDisplay