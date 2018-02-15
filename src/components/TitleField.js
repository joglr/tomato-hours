//@ts-check
import React from 'react'
import { connect } from 'react-redux'
import TextField from 'react-md/lib/TextFields/TextField'
import { setSessionTitle } from './../actions'
import FontIcon from 'react-md/lib/FontIcons'

let TitleField = ({ title, onChangeField }) => <TextField
    id="title-field"
    label="Title"
    value={title}
    lineDirection="left"
    placeholder="Untitled"
    leftIcon={<FontIcon>title</FontIcon>}
    className="md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-desktop-offset"
    onChange={onChangeField} />

const mapStateToProps = ({
  sessions: { currentSession: { title } }
}) => ({ title })

const mapDispatchToProps = dispatch => ({
  onChangeField: value => dispatch(setSessionTitle(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(TitleField)
