const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('test calculateNumber', () => {
  it('should return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4)
  })

  it('should return 5', () => {
	assert.strictEqual(calculateNumber(1, 3.7), 5)
  });

  it('should return 5', () => {
	assert.strictEqual(calculateNumber(1.2, 3.7), 5)
  })

  it('should return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    })

  it('should return 8', () => {
    assert.strictEqual(calculateNumber(3.5722, 3.7), 8)
  })

  it('should return 4', () => {
    assert.strictEqual(calculateNumber(0.5722, 3.4), 4)
  })

  it('should return 12', () => {
    assert.strictEqual(calculateNumber(6.4, 6.4), 12)
  })

  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.0, 0.0), 0)
  })

  it('should return 100', () => {
    assert.strictEqual(calculateNumber(30.52, 69.1), 100)
  })

})

