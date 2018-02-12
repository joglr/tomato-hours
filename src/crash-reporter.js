import Raven from 'raven-js'

if (process.env.NODE_ENV === 'production') Raven
  .config('https://37814d2ed7654802807f3f1eb88446bc@sentry.io/178156')
  .install()

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    if (process.env.NODE_ENV === 'production') {
      Raven.captureException(err, {
        extra: { action, state: store.getState() }
      })
    } else if (process.env.NODE_ENV === 'development') {
      console.info('Exception caught')
      console.error(err)
    }
    throw err
  }
}

export default crashReporter