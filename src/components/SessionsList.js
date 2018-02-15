import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import List from 'react-md/lib/Lists/List'
import Subheader from 'react-md/lib/Subheaders'
import ListItem from 'react-md/lib/Lists/ListItem'
import FontIcon from 'react-md/lib/FontIcons'
import Avatar from 'react-md/lib/Avatars/Avatar'
import { deleteSession } from './../actions'
import reduceEllapsedTime from './../reduce-ellapsed-time'
import formatTime from './../format-time'
import byStartTime from './../by-start-time'

let SessionsList = ({ sessions, onDelete }) => (
	<List>
		<Subheader primaryText="Sessions" />
		{sessions.length > 0 ? (
			sessions
				.sort(byStartTime())
				.map(({ title, startTime, stopTime, parts }, key) => (
					<ListItem
						threeLines
						{...{ key }}
						rightIcon={<FontIcon onClick={onDelete(key)}>delete</FontIcon>}
						leftAvatar={
							<Avatar suffix="teal">{title.length > 0 ? title.slice(0, 1).toUpperCase() : 'U'}</Avatar>
						}
						primaryText={title.length === 0 ? 'Untitled' : title}
						secondaryText={[
							parts && parts[0] && parts[0].startTime && parts[0].startTime.constructor === Date
								? moment(parts[0].startTime.getTime()).format('lll')
								: 'Never',
							formatTime(reduceEllapsedTime(parts))
						].join('\n')}
					/>
				))
		) : (
			<ListItem
				primaryText="No sessions yet. Why not start one?"
				disabled={true}
				style={{
					textAlign: 'center',
					fontWeight: 'bold'
				}}
			/>
		)}
	</List>
)

const mapStateToProps = ({ sessions: { sessions } }) => ({
	sessions
})

const mapDispatchToProps = dispatch => ({
	onDelete: key => () => dispatch(deleteSession(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionsList)
