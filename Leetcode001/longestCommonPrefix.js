/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var arr = [];
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    for (let j = 0; j < str.length; j++) {
      if (arr[j] == undefined) {
        arr[j] = [str[j], 1];
      } else if (arr[j][0] == str[j]) {
        arr[j][1] = arr[j][1] + 1;
      }
    }
  }

  var res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == strs.length) {
      res = res + arr[i][0];
    } else {
      break;
    }
  }

  return res;
};

var longestCommonPrefix = function (strs) {
  if (strs.length == 1) return strs[0];

  var res = "";
  var rows = strs.length;
  var minCol = Infinity;
  for (let i = 0; i < rows; i++) {
    minCol = Math.min(minCol, strs[i].length);
  }

  // iterate column wise and check if all elements are same row wise
  for (let col = 0; col < minCol; col++) {
    let char = strs[0][col];

    for (let row = 1; row < rows; row++) {
      if (char == strs[row][col] && row == rows - 1) {
        res = res + strs[row][col];
      } else if (char != strs[row][col]) {
        return res;
      }
    }
  }

  return res;
};
console.log(longestCommonPrefix(["a"]));
