import React from 'react'
import createClass from 'create-react-class'
import { initialize, onAuthStateChanged, signInWithRedirect } from './components/firebase'
import firebase from 'firebase'
import Shell from './components/Shell'
import DefaultView from './views/DefaultView'
import './theme'

initialize(firebase)({
  apiKey: "AIzaSyBxAilPu1Y20NfJToW--lr5EHMzw-SflGM",
  authDomain: "time-tracker-925f3.firebaseapp.com",
  databaseURL: "https://time-tracker-925f3.firebaseio.com",
  projectId: "time-tracker-925f3",
  storageBucket: "time-tracker-925f3.appspot.com",
  messagingSenderId: "595777818732"
})

const appTitle = "Work Hour Tracker"

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
