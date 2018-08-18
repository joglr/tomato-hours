import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import Switch from '@material-ui/core/Switch'

const Setting = ({ value, label, onChange, Icon }) => (
  <ListItem>
    {Icon ? <ListItemIcon>{Icon}</ListItemIcon> : []}
    <ListItemText primary={label} />
    <ListItemSecondaryAction>
      <Switch
        onChange={({ target: { checked }}) => onChange(checked)}
        checked={value}
      />
    </ListItemSecondaryAction>
  </ListItem>
)

Setting.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
}

export default Setting
