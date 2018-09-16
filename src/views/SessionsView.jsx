import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from 'react-md/lib/Avatars/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteSession } from './../actions'
import reduceEllapsedTime from './../helpers/reduce-ellapsed-time'
import formatTime from './../helpers/format-time'
import byStartTime from './../helpers/by-start-time'

let SessionsList = ({ sessions, onDelete, ...props }) => (
  <List subheader={<ListSubheader>Sessions</ListSubheader>} {...props}>
    {sessions.length > 0 ? (
      sessions
        .sort(byStartTime())
        .map(
          ({ title, parts }, key) => (
            <ListItem key={key}
              threeLines
              {...{ key }}>
              <ListItemAvatar>
                <Avatar>
                  {title.length > 0 ? (
                    title.slice(0, 1).toUpperCase()
                  ) : (
                    'U'
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  title.length === 0 ? 'Untitled' : title
                }
                secondary={[
                  parts &&
                  parts[0] &&
                  parts[0].startTime &&
                  parts[0].startTime.constructor === Date
                    ? moment(
                        parts[0].startTime.getTime()
                      ).format('lll')
                    : 'Never',
                  formatTime(reduceEllapsedTime(parts))
                ].join('\n')}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="delete" onClick={onDelete(key)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        )
    ) : (
      <ListItem
        disabled={true}
        style={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
        <ListItemText primary="No sessions yet. Why not start one?" />
      </ListItem>
    )}
  </List>
)

const mapStateToProps = ({ sessions: { sessions } }) => ({
  sessions
})

const mapDispatchToProps = dispatch => ({
  onDelete: key => () => dispatch(deleteSession(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  SessionsList
)
