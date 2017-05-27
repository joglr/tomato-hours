import React from 'react'
import createClass from 'create-react-class'
import Timer from './Timer'
import Options from './Options'
import './DefaultView.css'

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
