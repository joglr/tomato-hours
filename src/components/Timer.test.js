import React from 'react'
import ReactDOM from 'react-dom'
import jest2 from 'jest'
import Timer from './Timer'
import { Provider } from 'react-redux'
import fakeStore from './../fake-store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={fakeStore}>
      <Timer autostart />
    </Provider>,
    div
  )
})
