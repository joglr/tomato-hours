//@ts-check
import React from 'react'

import SessionsView from './../views/SessionsView'
import SettingsView from './../views/SettingsView'
import TimerView from './../views/TimerView'
import DebugView from './../views/DebugView'

const viewMap = [
  "TimerView",
  "SessionsView",
  "SettingsView",
]

if (process.env.NODE_ENV === 'development') viewMap.push("DebugView")

const ViewLoader = ({ view }) => {
  switch (viewMap[view]) {
    case "SessionsView":
      return <SessionsView />
    case "SettingsView":
      return <SettingsView />
    case "DebugView":
        return <DebugView />
    case "TimerView":
    default:
      return <TimerView />
  }
}

export default ViewLoader
