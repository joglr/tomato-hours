import React from 'react'
import Grid from '@material-ui/core/Grid'
import TimeDisplay from './../components/TimeDisplay'
import StartButton from './../components/StartButton'
import PauseButton from './../components/PauseButton'
import TitleField from './../components/TitleField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    padding: 4 * theme.spacing.unit
  }
})

const TimerView = ({ classes }) => (
  <div className={classes.root}>
    <TimeDisplay />
    <Grid container justify="space-evenly" spacing={24}>
      {[
        StartButton,
        PauseButton
      ].map((Button, key) => (
        <Grid key={key} item xs={3}>
					<Button />
        </Grid>
      ))}
      <Grid container justify="center">
        <Grid item>
          <TitleField />
        </Grid>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(TimerView)
