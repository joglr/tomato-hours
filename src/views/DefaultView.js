import React from 'react'
import createClass from 'create-react-class'
import Timer from './../components/Timer'
import EarnedSalary from './../components/EarnedSalary'
import SettingsView from './SettingsView'
import './DefaultView.css'

const DefaultView = createClass({
  getInitialState: () => ({
    showEarnedSalary: false,
    rememberSettings: true
  }),
  setSetting: function (setting, value) {
    const settingToSet = {}
    settingToSet[setting] = value
    this.setState(settingToSet)
  },
  onTimerUpdate: function (ellapsedTime) { this.setState({ ellapsedTime }) },
  render: function () {
    const { ellapsedTime, showEarnedSalary, hourlyRate } = this.state
    return <div className="md-grid default-view">
      <div className="md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-desktop-offset">
        <Timer tickCallback={ this.onTimerUpdate } />
        { showEarnedSalary && ellapsedTime !== null
          ? <EarnedSalary
            ellapsedTime={ ellapsedTime }
            hourlyRate={ hourlyRate } />
          : [] }
        <SettingsView
          passSetting={ this.setSetting }
          settings={ this.state }
        />
      </div>
    </div>
  }
})

export default DefaultView
