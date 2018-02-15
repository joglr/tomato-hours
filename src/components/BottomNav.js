import React from 'react'
import { connect } from 'react-redux'
import BottomNavigation from 'react-md/lib/BottomNavigations/BottomNavigation'
import FontIcon from 'react-md/lib/FontIcons/FontIcon'

const links = [
	{
		label: 'Timer',
		icon: <FontIcon>access_time</FontIcon>
	},
	{
		label: 'Sessions',
		icon: <FontIcon>list</FontIcon>
	},
	{
		label: 'Settings',
		icon: <FontIcon>settings</FontIcon>
	}
]

if (process.env.NODE_ENV === 'development') {
	links.push({
		label: 'Debug',
		icon: <FontIcon>code</FontIcon>
	})
}

let BottomNav = ({ onNavChange }) => <BottomNavigation links={links} dynamic={false} onNavChange={onNavChange} />

BottomNav = connect()(BottomNav)

export default BottomNav
