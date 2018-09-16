//@ts-check
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Button from 'react-md/lib/Buttons/Button'

const styles = {}

let TopNav = ({ appName, classes }) => (
  <AppBar
    className={classes.root}
    position="static"
    color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        {appName}
      </Typography>
    </Toolbar>
  </AppBar>
  // nav={<Button
  //   key="nav"
  //   icon
  //   onClick={() => ({})} >
  //   {'menu'}
  // </Button>}
  // actions={<KebabMenu id="toolbar-prominent-kebab-menu" />}
)

export default withStyles(styles)(TopNav)
