/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const allBalancedParathesis = [];
  generateParenthesisHelper(0, 0, [], allBalancedParathesis);
  return allBalancedParathesis;

  function generateParenthesisHelper(open, close, currPattern, res) {
    if (open == n && close == n) {
      res.push(currPattern.join(''));
      return;
    }

    if (open < n) {
      currPattern.push('(');
      generateParenthesisHelper(open + 1, close, currPattern, res);
      currPattern.pop();
    }

    if (close < open) {
      currPattern.push(')')
      generateParenthesisHelper(open, close + 1, currPattern, res);
      currPattern.pop();
    }
  }
};

console.log(generateParenthesis(3));
