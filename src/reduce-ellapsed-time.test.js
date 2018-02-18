import reduceEllapsedTime from './reduce-ellapsed-time'

it('throws if no parts array were passed', () => {
  expect(() => reduceEllapsedTime())
    .toThrow('no parts received')
})

it('throws if invalid startTime were passed', () => {
  expect(() => reduceEllapsedTime([
    {
      startTime: "notADateObject",
      stopTime: new Date()
    }
  ]))
    .toThrow('invalid startTime')
})

it('throws if invalid stopTime were passed', () => {
  expect(() => reduceEllapsedTime([
    {
      startTime: new Date(),
      stopTime: "notADateObject"
    }
  ]))
    .toThrow('invalid stopTime')
})

it('returns 0 if no parts were passed', () => {
  expect(reduceEllapsedTime([]))
    .toBe(0)
})

it('calculates the total ellapsed time', () => {
  expect(reduceEllapsedTime([{
    startTime: new Date(1500000000000),
    stopTime: new Date(1500000001000)
  }])).toBe(1)
})

it('calculates the absolute total ellapsed time', () => {
  expect(reduceEllapsedTime([{
    startTime: new Date(1500000001000),
    stopTime: new Date(1500000000000)
  }])).toBe(1)
})
