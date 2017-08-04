export default (a, b) => {
  if (!a || !b) return null
  const [c, d] = [a, b].map(x => x.getTime() / 1000)
  return Math.abs(d - c)
}