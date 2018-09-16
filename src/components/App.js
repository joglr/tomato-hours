//@ts-check
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopNav from './TopNav'
import { withStyles } from '@material-ui/core/styles'
import ViewLoader from './ViewLoader'
import BottomNav from './BottomNav'
import PreventAccidentalClosure from './PreventAccidentalClosure'
import formatTime from './../format-time'
import calculateEarnedSalary from './../calculate-earned-salary'
import Grid from '@material-ui/core/Grid'

const appName = 'Tomato Hours'

const styles = theme => ({
	root: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	}
})

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			view: 0
		}
	}
	onNavChange(event, view) {
		this.setState({ view })
	}
	render() {
		const { active, ellapsedTime, showEarnedSalary, hourlyRate } = this.props
		const formattedTime = ellapsedTime > 0 ? `${formatTime(ellapsedTime)}` : appName
		const formattedEarnedSalary =
			showEarnedSalary && hourlyRate ? ` | ${calculateEarnedSalary({ ellapsedTime, hourlyRate })}` : ''
		return (
			<div className={this.props.classes.root}>
				<title>
					{formattedTime}
					{formattedEarnedSalary}
				</title>
				<TopNav appName={appName} />
				<ViewLoader view={this.state.view} />
				<BottomNav view={this.state.view} onNavChange={this.onNavChange.bind(this)} />
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

export default connect(mapStateToProps)(withStyles(styles)(App))
