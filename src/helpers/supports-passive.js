let supportsPassive = false
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      return (supportsPassive = true)
    }
  })
  window.addEventListener('testPassive', null, opts)
  window.removeEventListener('testPassive', null, opts)
} catch (e) {}

export default supportsPassive
