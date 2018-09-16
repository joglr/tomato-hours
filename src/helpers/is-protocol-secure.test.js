import isProtocolSecure from './is-protocol-secure'

it('returns true if the current protocol is https', () => {
	expect(isProtocolSecure({ location: { protocol: 'https:' } })).toBe(true)
})

it('returns false otherwise', () => {
	expect(isProtocolSecure()).toBe(false)
})
