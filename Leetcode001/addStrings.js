/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var res = "";
  let carry = 0;
  var n1 = num1.length - 1;
  var n2 = num2.length - 1;

  while (n1 >= 0 || n2 >= 0) {
    let sum = carry;
    if (num1[n1] != undefined) {
      sum += +num1[n1];
    }
    if (num2[n2] != undefined) {
      sum += +num2[n2];
    }

    res = res + (sum % 10);
    carry = Math.floor(sum / 10);
    n1--;
    n2--;
  }
  if (carry != 0) res = res + carry;
  let revRes = "";
  for (let i = res.length - 1; i >= 0; i--) {
    revRes += res[i];
  }
  return revRes;
};

console.log(addStrings("11", "123"));
