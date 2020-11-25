import React from "react"
import { render } from "react-dom"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import reportWebVitals from "./reportWebVitals"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import timerMiddleware from "redux-timer-middleware"
import logger from "./helpers/logger"
import crashReporter from "./helpers/crash-reporter"
import tomatoHours from "./reducers"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"
import { calculateEllapsedTime } from "./helpers/reduce-ellapsed-time"
import { setBreakHasBeenNotified } from "./actions"
import breakNotifier from "./helpers/break-notifier"
import "./helpers/analytics"
import {
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import "./index.css"
import App from "./App"

const store = createStore(
  tomatoHours,
  applyMiddleware(crashReporter, logger, timerMiddleware)
)

store.subscribe(() =>
  breakNotifier({
    store,
    navigator,
    calculateEllapsedTime,
    setBreakHasBeenNotified,
  })
)

render(
  <React.StrictMode>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Provider store={store}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
