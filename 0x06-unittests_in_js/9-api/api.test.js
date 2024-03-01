const { expect } = require('chai');
const request = require('request');


describe('index', () => {
  it('test index', () => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
    })
  })

  it('test /cart/:id/(//d+)', () => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
    })
  })

  it('test /cart/:id/(//d+)', () => {
    request.get('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
    })
  });

  it('test /cart/:id/(//d+)', () => {
    request.get('http://localhost:7865/cart/abc123!', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
    })
  });
})


