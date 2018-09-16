import breakNotifier from './break-notifier'

const fakeDispatch = jest.fn()
const fakeStore = {
	dispatch: fakeDispatch,
	getState: () => ({
		sessions: { currentSession: { startTime: true, breakHasBeenNotified: false } },
		settings: { sessionDuration: 0, notifications: true }
	})
}

const fakeDate = jest.fn()
const setBreakHasBeenNotified = () => 'bob'

it('calls then on serviceWorker.ready', () => {
	const then = jest.fn()
	const fakeNavigator = {
		serviceWorker: {
			ready: {
				then
			}
		}
	}
	breakNotifier({
		store: fakeStore,
		navigator: fakeNavigator,
		calculateEllapsedTime: () => 1,
		Date: fakeDate,
		setBreakHasBeenNotified
	})
	expect(then).toBeCalled()
})

it('calls showNotification with title matching break', () => {
	const fakeNavigator = {
		serviceWorker: {
			ready: {
        then: fn => fn(({ showNotification: (title) => {
          expect(title).toMatch('break')
        } }))
      }
		}
	}
	breakNotifier({
		store: fakeStore,
		navigator: fakeNavigator,
		calculateEllapsedTime: jest.fn(() => 1),
		Date: fakeDate,
		setBreakHasBeenNotified
  })
})

it('calls dispatch with setBreakHasBeenNotified()', () => {
	const fakeNavigator = {
		serviceWorker: {
			ready: {
        then: fn => fn(({ showNotification: jest.fn() }))
      }
		}
	}
	breakNotifier({
		store: fakeStore,
		navigator: fakeNavigator,
		calculateEllapsedTime: () => 1,
		Date: fakeDate,
		setBreakHasBeenNotified
  })
	expect(fakeDispatch).toBeCalledWith(setBreakHasBeenNotified())
})
