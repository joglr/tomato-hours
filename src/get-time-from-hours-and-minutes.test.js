import getTimeFromHnMs from './get-time-from-hours-and-minutes'

it("returns a date object", () => {
  expect(getTimeFromHnMs("12:30").constructor).toBe(Date)
})

it("gets the hours", () => {
  expect(getTimeFromHnMs("12:30").getHours())
    .toBe(12)
})
it("gets the minutes", () => { 
  expect(getTimeFromHnMs("12:30").getMinutes())
    .toBe(30)
})