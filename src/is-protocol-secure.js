export default window => {
  return typeof window !== 'undefined' &&
    window &&
    window.location &&
    window.location.protocol &&
    window.location.protocol === 'https:'
}
