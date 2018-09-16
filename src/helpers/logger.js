const logger = store => next => action => {
  let result = next(action)
  if (process.env.NODE_ENV === 'development') {
    console.groupCollapsed(action.type) // eslint-disable-line
    console.info('dispatching', action) // eslint-disable-line
    console.log('next state', store.getState()) // eslint-disable-line
    console.groupEnd(action.type) // eslint-disable-line
  }
  return result
}

export default logger
