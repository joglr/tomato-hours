import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import timerMiddleware from 'redux-timer-middleware'
import logger from './logger'
import crashReporter from './crash-reporter'
import tomatoHours from './reducers'
import App from './components/App'
import './theme'
import registerServiceWorker from './registerServiceWorker'
import breakNotifier from './break-notifier'
import './analytics'

const store = createStore(
  tomatoHours,
  applyMiddleware(crashReporter, logger, timerMiddleware)
)

store.subscribe(() => breakNotifier(store))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
