import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import calculateEllapsedTime from './../calculate-ellapsed-time'
import formatTime from './../format-time'
import byStartTime from './../by-start-time'
import List from 'react-md/lib/Lists/List'
import Subheader from 'react-md/lib/Subheaders'
import ListItem from 'react-md/lib/Lists/ListItem'
import Divider from 'react-md/lib/Dividers'
import FontIcon from 'react-md/lib/FontIcons'

const TimeIcon = () => <FontIcon>timer</FontIcon>
const TrashIcon = () => <FontIcon>delete</FontIcon>

let SessionList = ({ sessions }) => (
  <List>
    <Subheader primaryText="Sessions" />
    { sessions.length > 0
      ? sessions.sort(byStartTime()).map(({ title, startTime, stopTime }, key) => [
        <Divider />,
        <ListItem
          key={key}
          leftIcon={<TimeIcon />}
          rightIcon={<TrashIcon />}
          primaryText={title && title.length === 0 ? "Untitled" : title }
          secondaryText={[ startTime && startTime.constructor === Date
            ? moment(startTime.getTime()).format('lll')
            : "Never", formatTime(calculateEllapsedTime(startTime, stopTime))].join(', ')} />
      ])
      : <ListItem primaryText="No sessions yet" disabled={true} style={{ textAlign: "center" }}/>
    }
  </List>
)

const mapStateToProps = ({ timer: { sessions }}) => ({
  sessions
})

SessionList = connect(mapStateToProps)(SessionList)

export default SessionList