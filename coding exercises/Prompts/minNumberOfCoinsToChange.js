// TC - O(Nd), SC - O(N) d - denominations count, N - target amount
function minNumberOfCoinsForChange(n, denoms) {
    var minCoinsArr = new Array(n+1).fill(Infinity);
    // 0 number of coins are needed to make 0 amount
    minCoinsArr[0] = 0;

    for (const denom of denoms) {
        for (let amount = 0; amount < minCoinsArr.length; amount++) {
            if(denom <= amount){
                minCoinsArr[amount] = Math.min(minCoinsArr[amount], 1+ minCoinsArr[amount - denom]);            
            }
        }
    }

    return minCoinsArr[n] != Infinity ? minCoinsArr[n] : -1;
  }

  console.log( minNumberOfCoinsForChange(7, [1,5,10]));