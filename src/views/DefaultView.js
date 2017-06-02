import React from 'react'
import createClass from 'create-react-class'
import Timer from './../components/Timer'
import SettingsView from './SettingsView'
import './DefaultView.css'

const DefaultView = createClass({
  getInitialState: () => ({
    showEarnedSalary: false,
    rememberSalary: false
  }),
  setSetting: function (setting, value) {
    const settingToSet = {}
    settingToSet[setting] = value
    this.setState(settingToSet)
  },
  render: function () {
    console.log(this.state)
    return <div className="md-grid default-view">
      <div className="md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-desktop-offset">
        <div>
          <Timer />
        </div>
        <div>
          <SettingsView
            passSetting={ this.setSetting }
            settings={ this.state }
          />
        </div>
      </div>
    </div>
  }
})

export default DefaultView
