const modAndRound = (value, factor) => Math.floor(value % factor)

export const convertToValues = function(seconds = 0) {
  const values = [ seconds ]
  const factors = [ 60, 60, 24, 24 ]

  for (let i = 0; i < factors.length; i++) {
		const factor = factors[i]
    if (i === factors.length - 1) break
		const division = values[i] / factor
		if (modAndRound(division, factor) === 0 && values[i] === values[i] % factor) break
		values.push(division)
    // else values.push(values[i])
	}

  return values
    .map((value, i) => modAndRound(value, factors[i]))
}

const formatValues = function(values, filterZeros) {
  const units = [ 's', 'm', 'h', 'd' ]

  return filterZeros
    ? values
        .splice(0)
        .map((x, unitIndex) => ({ x, unitIndex }))
        .filter(
          ({ x }, i) => (x > 0 || (i === 0 && values[1] <= 1))
        )
        .map(
          ({ x, unitIndex }) => `${x}${units[unitIndex]}`
        )
        .reverse()
        .join(' ')
    : values
				.splice(0)
				.map((x, unitIndex) => ({ x, unitIndex }))

        // .filter(({ x }, i) => x > 0 || i === 0)
				.map(
          ({ x, unitIndex }) => `${x}${units[unitIndex]}`
        )
        .reverse()
        .join(' ')
}

export default (seconds, filterZeros = false) => seconds === 0 ? '0s' :
  formatValues(convertToValues(seconds), filterZeros)
