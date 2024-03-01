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

  it('test /available_payments', () => {
    request.get('http://localhost:7865/available_payments',  (err, res, body) => {
      expect(JSON.parse(body)).to.be.deep.equal({
	payment_methods: {
	  credit_cards: true,
	  paypal: false
	}
      });
      expect(res.statusCode).to.be.equal(200);
    })
  });


  it('test /login', () => {
    request.post('http://localhost:7865/login', {json: {userName: 'Ini'}},  (err, res, body) => {
      expect(body).to.be.equal('Welcome Ini');
      expect(res.statusCode).to.be.equal(200);        })
  });
})
