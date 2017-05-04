import * as jest2 from 'jest'
import { 
  initialize,
	signInWithRedirect, 
	onAuthStateChanged 
} from './firebase'

const fakeSignInWithRedirect = jest.fn()
const fakeOnAuthStateChanged = jest.fn()

const fakeFirebase = {
  initializeApp: jest.fn(),
	auth: () => ({
		signInWithRedirect: fakeSignInWithRedirect,
    onAuthStateChanged: fakeOnAuthStateChanged
	})
}

describe('intialize', () => {
  it('takes a firebase API and returns a function', () => {
    expect(typeof initialize(fakeFirebase)).toBe('function')
  })
  it('calls initializeApp with the provided config', () => {
    const fakeConfig = { "hello": "world" }
    initialize(fakeFirebase)(fakeConfig)
    expect(fakeFirebase.initializeApp).toBeCalledWith(fakeConfig)
  })
})

describe('signInWithRedirect', () => {
  fakeFirebase.auth.GoogleAuthProvider = function() {}
	it('takes a firebase API and returns a function', () => {
    expect(typeof signInWithRedirect(fakeFirebase)).toBe('function')
	})
  it('the returned function returns a promise', () => {
    fakeFirebase.auth().signInWithRedirect
      .mockReturnValueOnce(Promise.resolve())

    expect(typeof signInWithRedirect(fakeFirebase)().then).toBe('function')
  })
  it('the returned function calls firebase.signInWithRedirect', () => {
    fakeFirebase.auth().signInWithRedirect
      .mockReturnValueOnce(Promise.resolve())
    signInWithRedirect(fakeFirebase)()
		expect(fakeFirebase.auth().signInWithRedirect).toBeCalled()
  })
})
