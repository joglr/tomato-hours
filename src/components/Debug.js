import React from 'react'
import { connect } from 'react-redux'

let StoreDebug = ({ store }) => {
  return <code><pre style={{
    fontFamily: 'Consolas',
    fontSize: "10px"
  }}>
    { JSON.stringify(store, null, 1)}
  </pre></code>
}

const mapStateToProps = store => ({ store })

StoreDebug = connect(mapStateToProps)(StoreDebug)

export default StoreDebug
