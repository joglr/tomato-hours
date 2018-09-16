const logger = store => next => action => {
  let result = next(action)
  if (process.env.NODE_ENV === 'development') {
    console.groupCollapsed(action.type)
    console.info('dispatching', action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
  }
  return result
}

export default logger
