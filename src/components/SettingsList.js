import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Subheader from 'react-md/lib/Subheaders'
import List from 'react-md/lib/Lists/List'
import FontIcon from 'react-md/lib/FontIcons'
import TextField from 'react-md/lib/TextFields'
import Setting from './../components/Setting'
import { settingToggleActionCreators } from './../actions'
import './SettingsList.css'

let SettingsList = ({ onSettingChange, settings  }) => (
  <List className="settings">
    <Subheader primaryText="Settings" />
    <Setting
      label="Show earned salary"
      value={settings.showEarnedSalary}
      onChange={value => onSettingChange("setShowEarnedSalary", value)} />
    { settings.showEarnedSalary
      ? <div className="settings__text-field-wrapper">
          <TextField
            label="Hourly rate"
            id="floatingCenterTitle"
            leftIcon={<FontIcon>attach_money</FontIcon>}
            type="number"
            defaultValue={settings.hourlyRate}
            floating={true}
            placeholder="123"
            onChange={value => onSettingChange("setHourlyRate", value)}
          />
        </div>
      : []
    }
    { /* Redisplay when remember settings is working */ }
    {/*<Setting
      label="Remember settings"
      value={settings.rememberSettings}
    onChange={ value => onSettingChange("setRememberSettings", value )} /> */ }
  </List>
)

SettingsList.propTypes = {
  onSettingChange: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  onSettingChange: (setting, value) => dispatch(settingToggleActionCreators[setting](value))
})

SettingsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsList)

export default SettingsList