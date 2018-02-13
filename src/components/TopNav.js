//@ts-check
import React from 'react'
import { connect } from 'react-redux'
import Toolbar from 'react-md/lib/Toolbars/Toolbar'
// import Button from 'react-md/lib/Buttons/Button'
let TopNav = ({ appName }) => (
  <Toolbar
  colored
  // nav={<Button
  //   key="nav"
  //   icon
  //   onClick={() => ({})} >
  //   {'menu'}
  // </Button>}
  title={appName}
  // actions={<KebabMenu id="toolbar-prominent-kebab-menu" />}

/>
)

TopNav = connect()(TopNav)

export default TopNav

