import React from 'react'
import { connect } from 'react-redux'
import getEllapsedTime from './../get-ellapsed-time'

let EarnedSalary = ({ earnedSalary }) => {
  return <div style={{ padding: "1rem" }}>
    Earned salary: <span style={{ fontWeight: "bold" }}>{ earnedSalary }</span>
  </div>
}

const mapStateToProps = ({
  timer: { currentSession: { ellapsedTime } },
  settings: { hourlyRate }
}) => ({
  earnedSalary: Math.round(ellapsedTime / 3600 * hourlyRate || 0)
})

EarnedSalary = connect(mapStateToProps)(EarnedSalary)

export default EarnedSalary