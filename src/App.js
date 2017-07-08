import React from 'react'
import createClass from 'create-react-class'
import {
  initialize,
  onAuthStateChanged,
  signInWithRedirect
} from './firebase'
import firebase from 'firebase'
import Shell from './components/Shell'
import DefaultView from './views/DefaultView'
import './theme'

initialize(firebase)({
  apiKey: "AIzaSyAVovUeo7qr98wOonwLLMfsp2je2TLrjdQ",
  authDomain: "tomato-hours.firebaseapp.com",
  databaseURL: "https://tomato-hours.firebaseio.com",
  projectId: "tomato-hours",
  storageBucket: "tomato-hours.appspot.com",
  messagingSenderId: "80139089413"
})

const appTitle = "Tomato Hours"

const App = createClass({
  getInitialState: () => ({ user: null }),
  onAuthStateChanged: function (user) {
    if (!user) signInWithRedirect(firebase)()
    else this.setState({ user })
  },
  componentDidMount: function () {
    onAuthStateChanged(firebase)(this.onAuthStateChanged)
  },
  onTimerStopped: function ({ ellapsedTime, startTime }) {
    console.log({
      ellapsedTime,
      startTime: new Date(startTime).toTimeString()
    })
  },
  render: function () {
    return <div>
      <Shell appTitle={ appTitle }>
        <DefaultView timerStoppedCallback={ this.onTimerStopped }/>
      </Shell>
    </div>
  }
})

export default App
