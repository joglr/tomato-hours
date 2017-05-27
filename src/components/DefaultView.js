import React from 'react'
import createClass from 'create-react-class'
import Timer from './Timer'
import Options from './Options'
import './DefaultView.css'

const initialState = {
  ellapsedTime: null,
  timer: null,
  formattedTime: '0s',
}

const convertToValues = function(ellapsedTime) {
  const values = [ ellapsedTime ]
  const factors = [60, 60, 24, 365.2422]

  factors.forEach((factor, i) => values.push(values[i] / factor))

  return values
    .map((value, i) => value % factors[i])
    .map(Math.floor)
}

const getFormattedTime = function (ellapsedTime) {
  const units = ['s', 'm', 'h', 'd', 'y']

  return convertToValues(ellapsedTime)
    .splice(0)
    .filter((x, i) => x > 0 || i === 0)
    .map((x, i) => `${x}${units[i]}`)
    .reverse()
    .join(' ')
}

const DefaultView = createClass({
  render: function () {
    return <div className="md-grid default-view">
      <div className="md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-desktop-offset">
        <div>
          <Timer />
        </div>
        <div> 
          <Options /> 
        </div>
      </div>
    </div>
  }
})

export default DefaultView
