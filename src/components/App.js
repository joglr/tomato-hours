import React from 'react'
import { connect } from 'react-redux'
import Timer from './../components/Timer'
import SessionsList from './../components/SessionsList'
import SettingsList from './SettingsList'
import './App.css'
// const appTitle = "Tomato Hours"

let App = () => (
  <div className="md-grid app">
    <div className="md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-desktop-offset">
      <Timer />
      <SessionsList />
      <SettingsList />
    </div>
  </div>
)

App = connect()(App)

export default App
