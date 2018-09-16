import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ListIcon from '@material-ui/icons/List'
import SettingsIcon from '@material-ui/icons/Settings'
import CodeIcon from '@material-ui/icons/Code'
import { withStyles } from '@material-ui/core'

const actions = [
  <BottomNavigationAction
    key="timer"
    label="Timer"
    icon={<AccessTimeIcon />}
  />,
  <BottomNavigationAction
    key="sessions"
    label="Sessions"
    icon={<ListIcon />}
  />,
  <BottomNavigationAction
    key="settings"
    label="Settings"
    icon={<SettingsIcon />}
  />
]

if (process.env.NODE_ENV === 'development') {
  actions.push(
    <BottomNavigationAction
      key="debug"
      label="Debug"
      icon={<CodeIcon />}
    />
  )
}

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0
  }
}

const BottomNav = ({ view, onNavChange, classes }) => (
  <BottomNavigation
    className={classes.root}
    value={view}
    onChange={onNavChange}>
    {actions}
  </BottomNavigation>
)
export default withStyles(styles)(BottomNav)
