import React from 'react'
import createClass from 'create-react-class'
import Toolbar from 'react-md/lib/Toolbars'
import Button from 'react-md/lib/Buttons'

const Shell = createClass({
  getDefaultProps: () => ({ appTitle: "Untitled App" }),
  render: function() {
    return <div>
      <title>{ this.props.appTitle }</title>
      <Toolbar
        colored
        title={ this.props.appTitle}
        nav={ <Button key="nav" icon>menu</Button> }
        actions={ [] }/>
      <div>
        { this.props.children }
      </div>
    </div>
  }
})

export default Shell