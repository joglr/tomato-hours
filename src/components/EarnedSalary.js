import React from 'react'
import { connect } from 'react-redux'
import calculateEarnedSalary from './../calculate-earned-salary'

let EarnedSalary = ({ earnedSalary }) => {
  return <div style={{
    padding: "1rem",
    textAlign: "center"
  }}>
    Earned salary: <span style={{ fontWeight: "bold" }}>{ earnedSalary }</span>
  </div>
}

const mapStateToProps = ({
  sessions: { currentSession: { ellapsedTime } },
  settings: { hourlyRate }
}) => ({
  earnedSalary: calculateEarnedSalary({ ellapsedTime, hourlyRate })
})

EarnedSalary = connect(mapStateToProps)(EarnedSalary)

export default EarnedSalary