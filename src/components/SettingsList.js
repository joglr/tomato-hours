import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import EarnedSalaryIcon from '@material-ui/icons/AttachMoney'
import BreaksIcon from '@material-ui/icons/WatchLater'
import NotificationsIcon from '@material-ui/icons/Feedback'
import Setting from './Setting'
import AboutDialog from './AboutDialog'
import {
  settingActionCreators,
  setDisplayAboutDialog
} from './../actions'
import './SettingsList.css'

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit,
    backgroundColor: theme.palette.background.paper
  },
  textFieldIcon: {
    color: '#757575'
  },
  showAboutDialogButton: {
    display: 'block',
    margin: 'auto'
  }
})
const SettingsList = ({
  onSettingChange,
  onAboutDialogOpen,
  settings,
  classes
}) => (
  <div className={classes.root}>
    <List
      className="settings"
      subheader={<ListSubheader>Settings</ListSubheader>}>
      <Setting
        label="Display earned salary"
        value={settings.showEarnedSalary}
        onChange={value =>
          onSettingChange('setDisplayEarnedSalary', value)}
        Icon={<EarnedSalaryIcon />}
      />
      {settings.showEarnedSalary ? (
        <ListItem>
          <TextField
            label="Hourly rate"
            type="number"
            value={settings.hourlyRate}
            placeholder="123"
            min={1}
            onChange={({ target: { value } }) =>
              onSettingChange('setHourlyRate', value)}
          />
        </ListItem>
      ) : (
        []
      )}
      <Setting
        label="Enable breaks"
        value={settings.enableBreaks}
        onChange={value =>
          onSettingChange('setEnableBreaks', value)}
        Icon={<BreaksIcon />}
      />
      {settings.enableBreaks ? (
        <ListItem>
          <TextField
            label="Session duration"
            type="number"
            min="1"
            value={settings.sessionDuration}
            placeholder="in minutes"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  minutes
                </InputAdornment>
              )
            }}
            onChange={({ target: { value } }) =>
              onSettingChange('setSessionDuration', value)}
          />
        </ListItem>
      ) : (
        []
      )}
      {settings.enableBreaks ? (
        <Setting
          label="Break notifications"
          value={settings.notifications}
          onChange={checked =>
            checked
              ? Notification.requestPermission().then(
                  result =>
                    navigator.serviceWorker.ready.then(() =>
                      onSettingChange(
                        'setEnableNotifications',
                        result === 'granted'
                      )
                    )
                )
              : onSettingChange(
                  'setEnableNotifications',
                  checked
                )}
          Icon={<NotificationsIcon />}
        />
      ) : (
        []
      )}
      {/* Redisplay when remember settings is working */
      /*
			<Setting
				label="Remember settings"
				value={settings.rememberSettings}
			onChange={ value => onSettingChange("setRememberSettings", value )} />
		*/}
    </List>
    <Button
      variant="raised"
      color="primary"
      className={classes.showAboutDialogButton}
      onClick={onAboutDialogOpen}>
      About Tomato Hours
    </Button>
    <AboutDialog />
  </div>
)

SettingsList.propTypes = {
  onSettingChange: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
}

const mapStateToProps = ({ settings }) => ({
  settings
})

const mapDispatchToProps = dispatch => ({
  onSettingChange: (setting, value) =>
    dispatch(settingActionCreators[setting](value)),
  onAboutDialogOpen: () =>
    dispatch(setDisplayAboutDialog(true))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SettingsList)
)
