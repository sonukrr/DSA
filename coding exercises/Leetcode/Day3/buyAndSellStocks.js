var maxProfit = function (prices) {
  var min = prices[0];
  var profit = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
