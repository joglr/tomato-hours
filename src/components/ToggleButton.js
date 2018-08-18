import React from 'react'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const ToggleButton = ({
  primaryLabel,
  secondaryLabel,
  PrimaryIcon,
  SecondaryIcon,
  condition,
  disabled,
  onButtonClick
}) => (
  <Tooltip
    id="tooltip-icon"
    title={condition ? primaryLabel : secondaryLabel}>
    <div>
      <Button
        variant="fab"
        color={condition ? 'primary' : 'secondary'}
        aria-label={
          condition ? primaryLabel : secondaryLabel
        }
        disabled={disabled}
        onClick={onButtonClick({ condition })}>
        {condition ? PrimaryIcon : SecondaryIcon}
      </Button>
    </div>
  </Tooltip>
)

export default ToggleButton
