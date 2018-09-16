//@ts-check
import React from 'react'
import { connect } from 'react-redux'
// import TextField from 'react-md/lib/TextFields/TextField'
import { setSessionTitle } from './../actions'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = {
  root: {}
}
let TitleField = ({ title, onChangeField, classes }) => (
  <TextField
    label="Title"
    id="title-field"
    value={title}
    onChange={onChangeField}
  />
)

const mapStateToProps = ({
  sessions: {
    currentSession: { title }
  }
}) => ({ title })

const mapDispatchToProps = dispatch => ({
  onChangeField: ({ target: { value } }) =>
    dispatch(setSessionTitle(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TitleField))
