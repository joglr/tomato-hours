import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SessionsView from './../views/SessionsView'
import SettingsView from './../views/SettingsView'
import TimerView from './../views/TimerView'
import DebugView from './../views/DebugView'

const viewMap = [
  'TimerView',
  'SessionsView',
  'SettingsView'
]

if (process.env.NODE_ENV === 'development')
  viewMap.push('DebugView')

const getView = view => {
  switch (viewMap[view]) {
    case 'SessionsView': {
      return <SessionsView />
    }
    case 'SettingsView': {
      return <SettingsView />
    }
    case 'DebugView': {
      return <DebugView />
    }
    case 'TimerView':
    default: {
      return <TimerView />
    }
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'block'
  },
  gridItem: {
    margin: 'auto',
    maxHeight: '',
    marginBottom: '56px',
    backgroundColor: 'white',
    boxShadow: theme.shadows[1]
  }
})

const ViewLoader = ({ view, classes }) => (
  <Grid
    container
    direction="row"
    justify="center"
    spacing={0}
    className={classes.root}>
    <Grid
      item
      className={classes.gridItem}
      xl={4}
      lg={4}
      md={12}
      sm={12}
      xs={12}>
      {getView(view)}
    </Grid>
  </Grid>
)

ViewLoader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ViewLoader)
