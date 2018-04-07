import formatTime, { convertToValues } from './format-time'

describe('convertToValues', () => {
  it('converts 0 correctly', () =>
    expect(convertToValues(0))
      .toEqual([0]))
  it('converts seconds correctly', () =>
    expect(convertToValues(30))
      .toEqual([30]))
  it('converts minutes correctly', () =>
    expect(convertToValues(60))
      .toEqual([0, 1]))
  it('converts minutes and seconds correctly', () =>
    expect(convertToValues(60 + 30))
      .toEqual([30, 1]))
  it('converts hours correctly', () =>
    expect(convertToValues(60 * 60))
      .toEqual([0, 0, 1]))
  it('converts days correctly', () =>
    expect(convertToValues(24 * 60 * 60))
      .toEqual([0, 0, 0, 1]))
  it('converts multiple days correctly', () =>
    expect(convertToValues((5 * 24 * 60 * 60)))
      .toEqual([0, 0, 0, 5]))
})

describe('formatTime', () => {
  it('formats 0 correctly', () => expect(formatTime(0)).toBe('0s'))
  it('formats seconds correctly', () => expect(formatTime(30)).toBe('30s'))
  it('formats minutes correctly', () => expect(formatTime(60)).toBe('1m 0s'))
  it('formats minutes and seconds correctly', () => expect(formatTime(60 + 30)).toBe('1m 30s'))
  it('formats hours correctly', () => expect(formatTime(60 * 60)).toBe('1h 0m 0s'))
  it('formats days correctly', () => expect(formatTime(24 * 60 * 60)).toBe('1d 0h 0m 0s'))
  it('formats multiple days correctly', () => expect(formatTime(5 * 24 * 60 * 60)).toBe('5d 0h 0m 0s'))

  it('filters zeros', () => {
    expect(formatTime(0, true)).toBe('0s')
    expect(formatTime(30, true)).toBe('30s')
    expect(formatTime(60, true)).toBe('1m')
    expect(formatTime(60 * 60, true)).toBe('1h')
    expect(formatTime(24 * 60 * 60, true)).toBe('1d')
    expect(formatTime(5 * 24 * 60 * 60, true)).toBe('5d')
  })
  it('does not filter first zero, if t < 60', () => {
    expect(formatTime(0, true)).toBe('0s')
  })
  it('filters first zero, if t >= 60', () => {
    expect(formatTime(60, true)).toBe('1m')
  })
})
