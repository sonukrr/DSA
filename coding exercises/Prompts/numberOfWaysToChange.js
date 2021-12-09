// TC - O(Nd), SC - O(N) - d - denominations count, N - target amount of money
function numberOfWaysToMakeChange(n, denoms) {
  var target = new Array(n + 1).fill(0);
  // ways to get 0 amount is 1
  target[0] = 1;
    
  for (const denom of denoms) {
    for (let i = denom; i < target.length; i++) {
      target[i] += target[i - denom];
    }
  }

  return target[n];
}

console.log( numberOfWaysToMakeChange(10, [1, 5, 10, 25]));
