import byStartTime from './by-start-time'

const someDate = { parts: [ { startTime: new Date(1500000000000) } ] }
const someOtherDate = { parts: [ { startTime: new Date(1500000000001) } ] }

it("returns true if the startTime of b is greater than the startTime of a", () => {
  expect(byStartTime()(someDate, someOtherDate)).toBe(true)
})
it("if reverse mode is enabled, returns true if the startTime of a is greater than the startTime of b", () => {
  expect(byStartTime(true)(someDate, someOtherDate)).toBe(false)
})
