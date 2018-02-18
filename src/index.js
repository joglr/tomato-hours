import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import timerMiddleware from 'redux-timer-middleware'
// import firebase from 'firebase'
import logger from './logger'
import crashReporter from './crash-reporter'
import tomatoHours from './reducers'
import App from './components/App'
import './theme'
import registerServiceWorker from './registerServiceWorker'
import ReactGA from 'react-ga'
import breakNotifier from './break-notifier'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize("UA-114113941-1")
  ReactGA.pageview(window.location.pathname + window.location.search)
}
// import {
//   initialize,
// } from './firebase'

// initialize(firebase)({
//   apiKey: "AIzaSyAVovUeo7qr98wOonwLLMfsp2je2TLrjdQ",
//   authDomain: "tomato-hours.firebaseapp.com",
//   databaseURL: "https://tomato-hours.firebaseio.com",
//   projectId: "tomato-hours",
//   storageBucket: "tomato-hours.appspot.com",
//   messagingSenderId: "80139089413"
// })

const store = createStore(
  tomatoHours,
  applyMiddleware(crashReporter, logger, timerMiddleware)
)

store.subscribe(() => breakNotifier(store))
// onAuthStateChanged(user) {
  //   if (!user) signInWithRedirect(firebase)()
  //   else {
    //     setUserInfo(firebase)(user)
    //     getUserSettings(firebase)(user)
    //       .then((settings) => this.setState({ settings: settings || {} }))
    //     this.setState({ user })
    //   }
    // },
    // onAuthStateChanged(firebase)(this.onAuthStateChanged)
    // onTimerStopped({ ellapsedTime, startTime }) {
      //   console.log({
        //     ellapsedTime,
        //     startTime: new Date(startTime).toTimeString()
        //   })
        // },

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
