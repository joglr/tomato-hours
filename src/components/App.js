//@ts-check
import React from 'react'
import { connect } from 'react-redux'
import Timer from './../components/Timer'
import SessionsList from './../components/SessionsList'
import SettingsList from './SettingsList'
import PreventAccidentalClosure from './PreventAccidentalClosure'
import Debug from './Debug'
import formatTime from './../format-time'
import calculateEarnedSalary from './../calculate-earned-salary'
import './App.css'
const appName = "Tomato Hours"

let App = ({ active, ellapsedTime, showEarnedSalary, hourlyRate }) => {
  const formattedTime = ellapsedTime > 0
    ? `${formatTime(ellapsedTime)}`
    : appName
  const formattedEarnedSalary = showEarnedSalary && hourlyRate
    ? ` | ${calculateEarnedSalary({ ellapsedTime, hourlyRate })}`:
    ''
    return (
      <div className="md-grid app">
      <title>{formattedTime}{formattedEarnedSalary}</title>
      <div className="md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-desktop-offset">
        <Timer />
        <SessionsList />
        <SettingsList />
        { active
          ? <PreventAccidentalClosure {...{
            addEventListener: window.addEventListener.bind(window),
            removeEventListener: window.removeEventListener.bind(window),
          }} />
          : []
        }
        { process.env.NODE_ENV === 'development'
          ? <StoreDebug />
          : []
        }
      </div>
    </div>
  )
}
const mapStateToProps = ({
  timer: { currentSession: { startTime, parts, ellapsedTime }, sessions },
  settings: { showEarnedSalary, hourlyRate }
}) => ({
  active: startTime !== null || parts.length > 0 || sessions.length > 0,
  ellapsedTime,
  showEarnedSalary,
  hourlyRate
})

App = connect(mapStateToProps)(App)

export default App
