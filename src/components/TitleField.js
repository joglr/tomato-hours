//@ts-check
import React from 'react'
import { connect } from 'react-redux'
import TextField from 'react-md/lib/TextFields/TextField'
import { setSessionTitle } from './../actions'

let TitleField = ({ title, onChangeField }) => (
  <TextField
    id="title-field"
    label="Title"
    defaultValue={title}
    lineDirection="left"
    placeholder="Untitled"
    className="md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-desktop-offset"
    onChange={onChangeField}
  />
)

const mapStateToProps = ({
  timer: { currentSession: { title } }
}) => ({ title })

const mapDispatchToProps = dispatch => ({
  onChangeField: value => dispatch(setSessionTitle(value))
})

TitleField = connect(mapStateToProps, mapDispatchToProps)(TitleField)

export default TitleField
