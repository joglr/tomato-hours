import React from 'react'
import Grid from 'react-md/lib/Grids/Grid'
import TimeDisplay from './../components/TimeDisplay'
import StartButton from './../components/StartButton'
import PauseButton from './../components/PauseButton'
import TitleField from './../components/TitleField'

const TimerView = () => <div>
  <TimeDisplay />
  <Grid noSpacing>
    { [
			<StartButton />,
			<PauseButton />
		].map((el, key) =>
			<div key={key} className="md-cell--2-phone md-cell--4-tablet md-cell--6-desktop">
        <div className="timer-button-wrap">
          {el}
        </div>
      </div>
    )}
    <TitleField  />
  </Grid>
</div>

export default TimerView
