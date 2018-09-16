import React from 'react'
import { connect } from 'react-redux'

let DebugView = ({ store }) => (
  <code>
    <pre
      style={{
        fontFamily: 'Consolas'
      }}>
      {JSON.stringify(store, null, 2)}
    </pre>
  </code>
)

const mapStateToProps = store => ({ store })

export default connect(mapStateToProps)(DebugView)
