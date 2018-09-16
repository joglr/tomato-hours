import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import fakeStore from './../helpers/fake-store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={fakeStore}>
      <App store={fakeStore} />
    </Provider>,
    div
  )
})
