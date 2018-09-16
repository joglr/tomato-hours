import React from 'react'
import { connect } from 'react-redux'
import formatTime from './../format-time'

let EllapsedTime = ({
  ellapsedTime,
  notifications,
  sessionDuration,
  timeUntilBreak
}) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      {formatTime(ellapsedTime) || '0s'}
    </h1>
    {notifications && sessionDuration > 0 && ellapsedTime > 0 ? (
      <div
        style={{
          textAlign: 'center'
        }}>
        Time until break:{' '}
        <span style={{ fontWeight: 'bold' }}>
          {formatTime(timeUntilBreak, true) || '0s'}
        </span>
      </div>
    ) : (
      []
    )}
  </div>
)

const mapStateToProps = ({
  sessions: { currentSession: { ellapsedTime } },
  settings: { notifications, sessionDuration }
}) => ({
  ellapsedTime,
  notifications,
  sessionDuration,
  timeUntilBreak: Math.max(
    sessionDuration * 60 - ellapsedTime,
    0
  )
})

EllapsedTime = connect(mapStateToProps)(EllapsedTime)

export default EllapsedTime
