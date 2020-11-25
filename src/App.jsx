import React, { Component } from "react"
import { connect } from "react-redux"
import TopNav from "./components/TopNav"
import ViewLoader from "./components/ViewLoader"
import BottomNav from "./components/BottomNav"
import PreventAccidentalClosure from "./components/PreventAccidentalClosure"
import formatTime from "./helpers/format-time"
import calculateEarnedSalary from "./helpers/calculate-earned-salary"

const appName = "Tomato Hours"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 0,
    }
  }
  onNavChange(event, view) {
    this.setState({ view })
  }
  render() {
    const {
      active,
      ellapsedTime,
      showEarnedSalary,
      hourlyRate,
    } = this.props
    const formattedTime =
      ellapsedTime > 0
        ? `${formatTime(ellapsedTime)}`
        : appName
    const formattedEarnedSalary =
      showEarnedSalary && hourlyRate
        ? ` | ${calculateEarnedSalary({
            ellapsedTime,
            hourlyRate,
          })}`
        : ""
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}>
        <title>
          {formattedTime}
          {formattedEarnedSalary}
        </title>
        <TopNav appName={appName} />
        <ViewLoader view={this.state.view} />
        <BottomNav
          view={this.state.view}
          onNavChange={this.onNavChange.bind(this)}
        />
        {active && process.env.NODE_ENV === "production" ? (
          <PreventAccidentalClosure
            {...{
              addEventListener: window.addEventListener.bind(
                window
              ),
              removeEventListener: window.removeEventListener.bind(
                window
              ),
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
  sessions: {
    currentSession: { startTime, parts, ellapsedTime },
    sessions,
  },
  settings: { showEarnedSalary, hourlyRate },
}) => ({
  active:
    startTime !== null ||
    parts.length > 0 ||
    sessions.length > 0,
  ellapsedTime,
  showEarnedSalary,
  hourlyRate,
})

export default connect(mapStateToProps)(App)
