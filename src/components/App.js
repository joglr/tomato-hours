//@ts-check
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopNav from './TopNav'
import Grid from 'react-md/lib/Grids/Grid'
import Cell from 'react-md/lib/Grids/Cell'
import ViewLoader from './ViewLoader'
import BottomNav from './BottomNav'
import PreventAccidentalClosure from './PreventAccidentalClosure'
import formatTime from './../format-time'
import calculateEarnedSalary from './../calculate-earned-salary'
import './App.css'

const appName = 'Tomato Hours'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			view: 0
		}
	}
	onNavChange(view) {
		this.setState({ view })
	}
	render() {
		const { active, ellapsedTime, showEarnedSalary, hourlyRate } = this.props
		const formattedTime = ellapsedTime > 0 ? `${formatTime(ellapsedTime)}` : appName
		const formattedEarnedSalary =
			showEarnedSalary && hourlyRate ? ` | ${calculateEarnedSalary({ ellapsedTime, hourlyRate })}` : ''
		return (
			<div className="app">
				<TopNav appName={appName} />
				<title>
					{formattedTime}
					{formattedEarnedSalary}
				</title>
				<Grid>
					<Cell
						desktopSize={8} // 12
						desktopOffset={2}
						tabletSize={6} // 8
						tabletOffset={1}
						phoneSize={4} // 4
						phoneOffset={0}>
						<ViewLoader view={this.state.view} />
					</Cell>
				</Grid>
				<div className="app-container md-cell--4-phone md-cell--6-tablet md-cell--1-tablet-offset md-cell--4-desktop md-cell--4-desktop-offset" />
				{active && process.env.NODE_ENV === 'production' ? (
					<PreventAccidentalClosure
						{...{
							addEventListener: window.addEventListener.bind(window),
							removeEventListener: window.removeEventListener.bind(window)
						}}
					/>
				) : (
					[]
				)}
				<BottomNav onNavChange={this.onNavChange.bind(this)} />
			</div>
		)
	}
}

const mapStateToProps = ({
	sessions: { currentSession: { startTime, parts, ellapsedTime }, sessions },
	settings: { showEarnedSalary, hourlyRate }
}) => ({
	active: startTime !== null || parts.length > 0 || sessions.length > 0,
	ellapsedTime,
	showEarnedSalary,
	hourlyRate
})

export default connect(mapStateToProps)(App)
