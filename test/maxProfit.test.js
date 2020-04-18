const assert = require('chai').assert;
const maxProfit = require('../maxProfit');

describe('#stock market max profit', () => {
  it('returns the max profit given a list of stock prices', () => {
    assert.equal(maxProfit([45, 24, 35, 31, 40, 38, 11]), 16);
  });

  it('returns -1 if no profit could have been made', () => {
    assert.equal(maxProfit([45, 35, 31, 11]), -1);
  });
});