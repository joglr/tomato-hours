import React from 'react'
import createClass from 'create-react-class'
import Toolbar from 'react-md/lib/Toolbars'
import Button from 'react-md/lib/Buttons'

const Shell = createClass({
  render: function() {
    return <div>
      <Toolbar
        colored
        title="Work Hour Tracker"
        nav={ <Button key="nav" icon>menu</Button> }
        actions={ [] }/>
      <div>
        { this.props.children }
      </div>
    </div>
  }
})

export default Shell