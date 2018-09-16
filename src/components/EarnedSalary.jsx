import React from 'react'
import { connect } from 'react-redux'
import calculateEarnedSalary from './../helpers/calculate-earned-salary'

const EarnedSalary = ({ earnedSalary }) => {
  return (
    <div
      style={{
        textAlign: 'center'
      }}>
      <span>Earned salary: </span>
      <span style={{ fontWeight: 'bold' }}>
        {earnedSalary}
      </span>
    </div>
  )
}

const mapStateToProps = ({
  sessions: {
    currentSession: { ellapsedTime }
  },
  settings: { hourlyRate }
}) => ({
  earnedSalary: calculateEarnedSalary({
    ellapsedTime,
    hourlyRate
  })
})

export default connect(mapStateToProps)(EarnedSalary)
