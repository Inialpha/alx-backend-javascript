const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe("sendPaymentRequestToApi", () => {
  it("validate the usage of the Utils function", () => {
    const mod = sinon.spy(Utils)

    sendPaymentRequestToApi(100, 20)
    expect(mod.calculateNumber.calledWith('SUM', 100, 20)).to.be.true
    expect(mod.calculateNumber.callCount).to.be.equal(1)
    mod.calculateNumber.restore()
  })
})
