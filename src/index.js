import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import tomatoHours from './reducers'
import App from './components/App'
import './theme'
// import './raven'
import registerServiceWorker from './registerServiceWorker'

import {
  initialize,
} from './firebase'

initialize(firebase)({
  apiKey: "AIzaSyAVovUeo7qr98wOonwLLMfsp2je2TLrjdQ",
  authDomain: "tomato-hours.firebaseapp.com",
  databaseURL: "https://tomato-hours.firebaseio.com",
  projectId: "tomato-hours",
  storageBucket: "tomato-hours.appspot.com",
  messagingSenderId: "80139089413"
})

const store = createStore(tomatoHours, applyMiddleware(thunk))
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

// const unsubscribe =
store.subscribe(() => console.log(store.getState().timer))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
