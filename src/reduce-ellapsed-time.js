const calculateEllapsedTime = (a, b) => {
  if (!a || !b) throw Error("calculate ellapsed time expects two arguments, received", JSON.stringify({ a, b }))
  if (a.constructor !== Date || b.constructor !== Date) throw Error("calculate ellapsed time expects two Date objects")
  const [c, d] = [a, b].map(x => x.getTime() / 1000)
  return Math.abs(d - c)
}

const reduceEllapsedTime = parts => {
  if (!parts) throw Error("no parts received")
  if (parts.constructor !== Array) throw Error("array expected")
  console.log(parts)
  parts.forEach(part => {
    if (!part) throw Error("invalid part received")
    else {
      Object.keys(part).forEach(key => {
        if (!part[key] || part[key].constructor !== Date) throw Error(`part has invalid ${key}:`, part[key])
      })
    }
  })
  return parts.reduce((ellapsedTime, nextPart) =>
  ellapsedTime + calculateEllapsedTime(nextPart.startTime, nextPart.stopTime),
0)}

export default reduceEllapsedTime
