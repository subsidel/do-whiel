const doWhiel = require('./')
const chai = require('chai')
const expect = chai.expect

describe('when we do not give the right arguments', function() {
  it('complains about them', function () {
    expect(() => doWhiel('not a function', true)).to.throw(TypeError, 'd0 is no function!, D0 MUST BE A FUNCTION')
    expect(() => doWhiel(()=>{}, 'not a boolean')).to.throw(TypeError, 'wh1le is no boolean or boolyfunc!, WH1LE MUST BE A BOOLEAN OR A BOOLYFUNC')
  })
})

describe('when them arguments are ok though', function () {
  it('loopy-loops them for a bit', function () {
    let count = 0
    doWhiel(() => {
      count += 1
    }, () => count < 10)
    expect(count).to.equal(10)
  })
})
