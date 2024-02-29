const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe("sendPaymentRequestToAPI", () => {
  let con;

  beforeEach(() => {
    if (!con) {
      con = sinon.spy(console)
    }
  })

  afterEach(() => {
    con.log.resetHistory()
  })

  it("sendPaymentRequestToAPI with 100, and 20", () => {
    sendPaymentRequestToApi(100, 20)
    expect(con.log.calledWith('The total is: 120')).to.be.true;
    expect(con.log.calledOnce).to.be.true
  })

  it("sendPaymentRequestToAPI with 10, and 10", () => {
    sendPaymentRequestToApi(10, 10)
    expect(con.log.calledWith('The total is: 20')).to.be.true;
    expect(con.log.calledOnce).to.be.true
  })
})
