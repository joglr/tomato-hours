//@ts-check
import React from "react"
import { connect } from "react-redux"
import { setSessionTitle } from "./../actions"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const styles = {
  root: {},
}
let TitleField = ({ title, onChangeField }) => (
  <TextField
    label="Title"
    id="title-field"
    value={title}
    onChange={onChangeField}
  />
)

const mapStateToProps = ({
  sessions: {
    currentSession: { title },
  },
}) => ({ title })

const mapDispatchToProps = (dispatch) => ({
  onChangeField: ({ target: { value } }) =>
    dispatch(setSessionTitle(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TitleField))
