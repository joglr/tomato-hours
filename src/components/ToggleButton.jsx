import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import { Fab } from "@material-ui/core"

const ToggleButton = ({
  primaryLabel,
  secondaryLabel,
  PrimaryIcon,
  SecondaryIcon,
  condition,
  disabled = false,
  onButtonClick,
}) => (
  <Tooltip
    id="tooltip-icon"
    title={condition ? primaryLabel : secondaryLabel}>
    <div
      style={
        {
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }
      }>
      <Fab
        color={condition ? "primary" : "secondary"}
        aria-label={
          condition ? primaryLabel : secondaryLabel
        }
        disabled={disabled}
        onClick={onButtonClick({ condition })}>
        {condition ? PrimaryIcon : SecondaryIcon}
      </Fab>
    </div>
  </Tooltip>
)

export default ToggleButton
