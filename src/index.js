import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import timerMiddleware from 'redux-timer-middleware'
import logger from './logger'
import crashReporter from './crash-reporter'
import tomatoHours from './reducers'
import App from './components/App'
import theme from './theme'
import registerServiceWorker from './registerServiceWorker'
import { calculateEllapsedTime } from './reduce-ellapsed-time'
import { setBreakHasBeenNotified } from './actions'
import breakNotifier from './break-notifier'
import './analytics'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

const store = createStore(
  tomatoHours,
  applyMiddleware(crashReporter, logger, timerMiddleware)
)

store.subscribe(() =>
  breakNotifier({
    store,
    navigator,
    Date,
    calculateEllapsedTime,
    setBreakHasBeenNotified
  })
)

render(
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()
