const validateParts = parts => parts.forEach(part => {
  if (!part) throw Error("invalid part received")
  else {
    Object.keys(part).forEach(key => {
      if (!part[key] || part[key].constructor !== Date) {
        throw Error(`invalid ${key}`, part[key])
      }
    })
  }
})

export const calculateEllapsedTime = (a, b) => {
  validateParts([{ a, b }])
  const [c, d] = [a, b].map(x => x.getTime() / 1000)
  return Math.abs(d - c)
}

export const reduceEllapsedTime = parts => {
  if (!parts) throw Error("no parts received")
  if (parts.constructor !== Array) throw Error("array expected")
  validateParts(parts)
  return parts.reduce((ellapsedTime, nextPart) =>
    ellapsedTime + calculateEllapsedTime(nextPart.startTime, nextPart.stopTime),
    0)
}

export default reduceEllapsedTime
