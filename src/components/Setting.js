import React from 'react'
import PropTypes from 'prop-types'
import ListItemControl from 'react-md/lib/Lists/ListItemControl'
import Switch from 'react-md/lib/SelectionControls/Switch'

const Setting = ({ value, label, onChange }) => {
	const id = Math.random()
	return (
		<ListItemControl
			secondaryAction={<Switch id={id} name={id} label={label} onChange={onChange} defaultChecked={value} />}
		/>
	)
}

Setting.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired
}

export default Setting
