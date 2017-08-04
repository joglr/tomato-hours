import jest2 from 'jest'
import byStartTime from './by-start-time'

const someDate = { startTime: new Date(1500000000001) }
const someOtherDate = { startTime: new Date(1500000000000) }

it("returns true if the startTime of b is greather than the startTime of a", () => {
  expect(byStartTime()(someDate, someOtherDate)).toBe(true)
})
it("if reverse mode is enabled, returns true if the startTime of a is greather than the startTime of b", () => {
  expect(byStartTime(true)(someDate, someOtherDate)).toBe(true)
})
