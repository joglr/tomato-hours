import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'
import { Provider } from 'react-redux'
import fakeStore from './../helpers/fake-store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={fakeStore}>
      <Timer autostart />
    </Provider>,
    div
  )
})
