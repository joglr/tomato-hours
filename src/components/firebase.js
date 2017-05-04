/**
 * intializes the Firebase API with the provided config
 * @param {Object} firebase Firebase API
 * @returns {function} initialize
 */
export const initialize = firebase => config => firebase.initializeApp(config)

/**
 * redirects the user to a sign in page
 * @param {Object} firebase Firebase API
 * @returns {function} signInWithRedirect
 */
export const signInWithRedirect = firebase => () => {
	const provider = new firebase.auth.GoogleAuthProvider()
	return firebase.auth().signInWithRedirect(provider)
}