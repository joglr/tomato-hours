import React from "react"
import Grid from "@material-ui/core/Grid"
import TimeDisplay from "./../components/TimeDisplay"
import StartButton from "./../components/StartButton"
import PauseButton from "./../components/PauseButton"
import TitleField from "./../components/TitleField"
import { useTheme } from "@material-ui/core/styles"

const TimerView = ({ classes, ...props }) => {
  const theme = useTheme()
  return (
    <Grid
      container
      alignContent="center"
      justifyContent="center"
      style={{
        padding: theme.spacing(4),
      }}
      {...props}>
      <TimeDisplay />
      <Grid
        container
        item
        alignItems="center"
        justifyContent="space-evenly"
        spacing={3}>
        {[StartButton, PauseButton].map((Button, key) => (
          <Grid
            key={key}
            item
            container
            xs={3}
            alignItems="center"
            justifyContent="center">
            <Button />
          </Grid>
        ))}
        <Grid item container justifyContent="center">
          <TitleField />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TimerView
