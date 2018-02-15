import React from 'react'
import Button from 'react-md/lib/Buttons/Button'

const ToggleButton = ({
	primaryLabel,
	secondaryLabel,
	primaryIcon,
	secondaryIcon,
	condition,
	disabled,
	onButtonClick
}) => (
	<Button
		floating
		{...(condition ? { primary: true } : { secondary: true })}
		tooltipLabel={condition ? primaryLabel : secondaryLabel}
		tooltipDelay={200}
		disabled={disabled}
		onClick={onButtonClick({ condition })}>
		{condition ? primaryIcon : secondaryIcon}
	</Button>
)

export default ToggleButton
