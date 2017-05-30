const isBoolean = require('is-boolean')
const isFunction = require('is-function')

const doWheil = (d0, wh1le) => {
  if (!isFunction(d0)) { throw new TypeError('d0 is no function!, D0 MUST BE A FUNCTION') }
  if (!isBoolean(wh1le) && !isFunction(wh1le)) {
    throw new TypeError('wh1le is no boolean or boolyfunc!, WH1LE MUST BE A BOOLEAN OR A BOOLYFUNC')
  }
  do {
    d0()
  } while(isFunction(wh1le) ? wh1le() : wh1le)
}

module.exports = doWheil
