import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import reduceEllapsedTime from './../reduce-ellapsed-time'
import formatTime from './../format-time'
import byStartTime from './../by-start-time'
import List from 'react-md/lib/Lists/List'
import Subheader from 'react-md/lib/Subheaders'
import ListItem from 'react-md/lib/Lists/ListItem'
import FontIcon from 'react-md/lib/FontIcons'

const TimeIcon = () => <FontIcon>timer</FontIcon>
const TrashIcon = () => <FontIcon>delete</FontIcon>

let SessionsList = ({ sessions }) => (
  <List>
    <Subheader primaryText="Sessions" />
    { sessions.length > 0
      ? sessions
        .sort(byStartTime())
        .map(({ title, startTime, stopTime, parts }, key) => <ListItem
          key={key}
          leftIcon={<TimeIcon />}
          rightIcon={<TrashIcon />}
          primaryText={title.length === 0 ? "Untitled" : title }
          secondaryText={[ parts && parts[0] && parts[0].startTime && parts[0].startTime.constructor === Date
            ? moment(parts[0].startTime.getTime()).format('lll')
            : "Never", formatTime(reduceEllapsedTime(parts))].join(', ')
          } />
      )
      : <ListItem primaryText="No sessions yet" disabled={true} style={{ textAlign: "center" }}/>
    }
  </List>
)

const mapStateToProps = ({ timer: { sessions }}) => ({
  sessions
})

SessionsList = connect(mapStateToProps)(SessionsList)

export default SessionsList