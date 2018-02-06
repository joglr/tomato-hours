export default reversed => (a, b) => {
  const [aT, bT] = [a, b].map(x => x.startTime.getTime())
  return reversed ? aT > bT : bT > aT
}