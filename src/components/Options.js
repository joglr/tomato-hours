import React from 'react'
import createClass from 'create-react-class'
import Button from 'react-md/lib/Buttons/Button'
import Dialog from 'react-md/lib/Dialogs'
import Subheader from 'react-md/lib/Subheaders'
import Divider from 'react-md/lib/Dividers'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import ListItemControl from 'react-md/lib/Lists/ListItemControl'
import Checkbox from 'react-md/lib/SelectionControls/Checkbox'
import Switch from 'react-md/lib/SelectionControls/Switch'
import FontIcon from 'react-md/lib/FontIcons'
import MenuButton from 'react-md/lib/Menus/MenuButton'
import TextField from 'react-md/lib/TextFields'

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
}

const Options = createClass({
  getInitialState: () => ({ visible: false }),
  open: function () {
    this.setState({ visible: true })
  },
  close: function () {
    this.setState({ visible: false })
  },
  render: function() {
    return <div>
      <div style={styles}>
        <Dialog
          id="test-dialog"
          title="Test Dialog"
          actions={<Button flat label="Close" onClick={this.close} />}
          visible={this.state.visible}
          onHide={this.close}
        >
          <h2>Hello</h2>
        </Dialog>
        <MenuButton
          id="button-menu"
          label="Settings"
          flat
          buttonChildren="settings"
          position="tl"
          className="menu-example"
        >
          <Subheader primary primaryText="Settings" />
          <Divider />
          <ListItemControl
            leftIcon={<FontIcon key="wifi">attach_money</FontIcon>}
            secondaryAction={
              <Switch
                id="Show earned salary"
                name="services"
                label="Show earned salary"
                labelBefore
                defaultChecked
              />
            }
          />
          <ListItem onClick={this.open} primaryText="Item One" />
          <ListItem onClick={this.open} primaryText="Item Two" />
          <ListItem onClick={this.open} primaryText="Item Three" />
          <ListItem onClick={this.open} primaryText="Item Four" />
        </MenuButton>
      </div>
      <div>
        <TextField
          id="floatingCenterTitle"
          label="Title"
          lineDirection="center"
          placeholder="Hello World"
          className="md-cell md-cell--bottom"
        />
      </div>
    </div>
  }
})

export default Options