import React from 'react'
import ReactDOM from 'react-dom'
import jest2 from 'jest'
import Timer from './Timer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Timer />, div)
})
