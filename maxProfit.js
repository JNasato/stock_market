const maxProfit = function (stocks) {
  let profitMargins = [];

  const findMax = function (profitMargins) {
    const max = Math.max(...profitMargins);
    if (max < 0) {
      return -1;
    } else {
      return max;
    }
  }

  const loopStocks = function (stocks) {
    for (let x = 1; x < stocks.length; x++) {
      profitMargins.push(stocks[x] - stocks[0]);
    }
    stocks.shift();
    if (stocks.length > 2) {
      loopStocks(stocks);
    } else {
      profitMargins.push(stocks[1] - stocks[0]);
    }
    return profitMargins;
  }
  loopStocks(stocks);
  return findMax(profitMargins);
};

module.exports = maxProfit;