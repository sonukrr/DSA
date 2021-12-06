/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  var curr = 1;
  while (curr < n) {
    curr *= 2;
  }

  return curr == n;
};

console.log(isPowerOfTwo(60));
