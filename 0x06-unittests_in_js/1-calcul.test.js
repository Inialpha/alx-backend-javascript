const calculateNumber = require('./1-calcul')
const assert = require('assert')

describe('test calculateNumber', () => {
  describe('test SUM', () => {
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4)
    })

    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5)
    });

    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5)
    })

    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6)
    })

    it('should return 8', () => {
      assert.strictEqual(calculateNumber('SUM', 3.5722, 3.7), 8)
    })

    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 0.5722, 3.4), 4)
    })                                                  
    it('should return 12', () => {
      assert.strictEqual(calculateNumber('SUM', 6.4, 6.4), 12)
  })

  it('should return 0', () => {
    assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0)
  })

    it('should return 100', () => {
      assert.strictEqual(calculateNumber('SUM', 30.52, 69.1), 100)
    })
  })

  describe("test SUBTRACT", () => {
    it('should return 2', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3, 1), 2)
    })

    it('should return -3', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3)
    });

    it('should return 3', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3.7, 1.2), 3)
    })

    it('should return 2', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 5.5, 3.7), 2)
    })

    it('should return 0', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3.5722, 3.7), 0)
    })

    it('should return -2', () => {                                           assert.strictEqual(calculateNumber("SUBTRACT", 0.5722, 3.4), -2)
    })
    it('should return 0', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 6.4, 6.4), 0)
  })
  it('should return 0', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 0.0, 0.0), 0)
  })

    it('should return 40', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 69.6, 29.8), 40)
    })
  })

  describe("test DIVIDE", () => {
    it('should return 3', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 3, 1), 3)
    })

    it('should return 0.25', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1, 3.7), 0.25)
    });

    it('should return 4', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 3.7, 1.2), 4)
    })

    it('should return 2', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.5, 3.4), 2)
    })

    it('should return 1', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 3.5722, 3.7), 1)
    })

    it('should return 0', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 0.22, 3.4), 0)
    })

    it('should return 1', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6.4, 6.4), 1)
  })
  it('should return Error', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 9.0, 0.0), 'Error')
  })
                                                                          it('should return Error', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 69.6, 0.4), 'Error')
    })
  })

})
