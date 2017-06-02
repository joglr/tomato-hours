import React from 'react'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'

import ListItemControl from 'react-md/lib/Lists/ListItemControl'
import Switch from 'react-md/lib/SelectionControls/Switch'

const Setting = createClass({
  render: function() {
    const {
      setting,
      settings,
      label,
      callback
    } = this.props
    return <ListItemControl
      secondaryAction={
        <Switch
          id={ setting }
          name={ setting }
          label={ label }
          labelBefore
          onChange={ value => callback(setting, value) }
          { ... settings[setting]
            ? { defaultChecked: true }
            : {}
          }
        />
      }
    />
  }
})

Setting.propTypes = {
  setting: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

export default Setting