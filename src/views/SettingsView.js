import React from 'react'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'

import Subheader from 'react-md/lib/Subheaders'
import List from 'react-md/lib/Lists/List'
import FontIcon from 'react-md/lib/FontIcons'
import TextField from 'react-md/lib/TextFields'
import Setting from './../components/Setting'
import './SettingsView.css'

const Settings = createClass({
  getDefaultProps: () => ({ passSetting: () => null }),
  render: function() {
    const { settings, passSetting } = this.props
    return <div className="settings">
      <List>
        <Subheader primaryText="Settings" />
        <Setting
          setting="showEarnedSalary"
          label="Show earned salary"
          settings={ settings }
          callback={ passSetting }
           />
        { settings.showEarnedSalary
          ? <div key="hourly-rate" className="settings__text-field-wrapper">
              <TextField
                id="floatingCenterTitle"
                leftIcon={<FontIcon>attach_money</FontIcon>}
                label="Hourly rate"
                type="number"
                value={ settings.hourlyRate || undefined }
                lineDirection="center"
                placeholder="123"
                onChange={ value => passSetting("hourlyRate", value) }
              />
            </div>
          : []
        }
        <Setting
          setting="rememberSettings"
          label="Remember settings"
          settings={ settings }
          callback={ passSetting }
        />
      </List>
    </div>
  }
})

Settings.propTypes = {
  passSetting: PropTypes.func.isRequired
}

export default Settings