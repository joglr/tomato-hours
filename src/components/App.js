//@ts-check
import React from 'react'
import { connect } from 'react-redux'
import Timer from './../components/Timer'
import SessionsList from './../components/SessionsList'
import SettingsList from './SettingsList'
import PreventAccidentalClosure from './PreventAccidentalClosure'
import StoreDebug from './StoreDebug'
import './App.css'
// const appTitle = "Tomato Hours"

let App = ({ active }) => (
  <div className="md-grid app">
    <title>Tomato Hours</title>
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

const mapStateToProps = ({ timer: { currentSession: { startTime }}}) => ({ active: startTime !== null, })

App = connect(mapStateToProps)(App)

export default App
