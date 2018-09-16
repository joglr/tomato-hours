import React from 'react'
import { connect } from 'react-redux'
import { setDisplayAboutDialog } from './../actions'
import { version, author } from './../../package.json'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'

let AboutDialog = ({
  onAboutDialogClose,
  displayAboutDialog
}) => (
  <Dialog
    open={displayAboutDialog}
    onClose={onAboutDialogClose}
    aria-labelledby="about-dialog-title">
    <DialogTitle id="aboutdialog-title">
      About Tomato Hours
    </DialogTitle>
    <List dense={true}>
      <ListItem>
        <ListItemText
          primary="Version"
          secondary={version}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Author"
          secondary={
            <span>
              {author.name}{' '}
              <a
                href={
                  author.url +
                  '/?utm_source=th-app&utm_medium=about-dialog'
                }
                target="_blank"
                rel="noopener noreferrer">
                {/* {'<'} */}
                {author.url}
                {/* {'>'} */}
              </a>
            </span>
          }
        />
      </ListItem>
    </List>
    <div style={{ padding: '1rem' }}>
      <Grid container alignContent="flex-end" spacing={16}>
        <Grid item>
          <Button
            element={'a'}
            href={`mailto:${
              author.email
            }?subject=Tomato Hours`}
            variant="raised"
            color="primary">
            Contact author
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={onAboutDialogClose}>
            Close
          </Button>
        </Grid>
      </Grid>
    </div>
  </Dialog>
)

const mapStateToProps = ({
  settings: { displayAboutDialog }
}) => ({ displayAboutDialog })

const mapDispatchToProps = dispatch => ({
  onAboutDialogClose: () =>
    dispatch(setDisplayAboutDialog(false))
})

AboutDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutDialog)

export default AboutDialog
