import React from 'react'
import { connect } from 'react-redux'

let StoreDebug = ({ store }) => {
  return <code><pre style={{
    fontFamily: 'Consolas'
  }}>
    { JSON.stringify(store, null, ".")}
  </pre></code>
}

const mapStateToProps = store => ({ store })

StoreDebug = connect(mapStateToProps)(StoreDebug)

export default StoreDebug
