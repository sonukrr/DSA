/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (height, maxSteps = 2) {
  let currentNumberOfWays = 0;
  var waysToTop = [1];

  for (let currentHeight = 1; currentHeight <= height + 1; currentHeight++) {
    let startOfWindow = currentHeight - maxSteps - 1;
    let endOfWindow = currentHeight - 1;

    if (startOfWindow >= 0) {
      currentNumberOfWays -= waysToTop[startOfWindow];
    }

    currentNumberOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumberOfWays);
  }

  return waysToTop[height];
};

// forms a fibonacci sequence
var climbStairs = function (height) {
  var waysToTop = { 0: 1, 1: 1 };
  return climbStairsHelper(height, waysToTop);  
};

function climbStairsHelper(height, waysToTop) {
  if (waysToTop[height]) return waysToTop[height];

  let last = climbStairsHelper(height - 1, waysToTop);
  let secLast = climbStairsHelper(height - 2, waysToTop);

  waysToTop[height] = last + secLast;
  return waysToTop[height];
}
