
const convertToValues = function(ellapsedTime = 0) {
  const values = [ ellapsedTime ]
  const factors = [60, 60, 24, 365.2422]

  factors.forEach((factor, i) => values.push(values[i] / factor))

  return values
    .map((value, i) => value % factors[i])
    .map(Math.floor)
}

const formatValues = function (values) {
  const units = ['s', 'm', 'h', 'd', 'y']

  return values
    .splice(0)
    .filter((x, i) => x > 0 || i === 0)
    .map((x, i) => `${x}${units[i]}`)
    .reverse()
    .join(' ')
}

export default ellapsedTime => formatValues(convertToValues(ellapsedTime))