const { expect } = require('chai');
const request = require('request');


describe('index', () => {
  it('test index', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done()
    })
  })

  it('test /cart/:id/(//d+)', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done()
    })
  })

  it('test /cart/:id/(//d+)', (done) => {
    request.get('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done()
    })
  })

   it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });;

  it('test /cart/:id/(//d+)', (done) => {
    request.get('http://localhost:7865/cart/abc123!', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done()
    })
  });

  it('test /login', (done) => {
    request.post('http://localhost:7865/login', {json: {userName: 'Ini'}},  (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Ini');
      done()
    })
  });

  it('test /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments',  (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
	payment_methods: {
	  credit_cards: true,
	  paypal: false
	}
      });
      done()
    })
  });
})
