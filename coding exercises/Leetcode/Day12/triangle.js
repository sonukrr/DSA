/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let lastRowLen = triangle[triangle.length - 1].length;
  var d = new Array(lastRowLen + 1).fill(0);

  for (let i = triangle.length - 1; i >= 0; i--) {
    let row = triangle[i];
    for (let j = 0; j < row.length; j++) {
      d[j] = row[j] + Math.min(d[j], d[j + 1]);
    }
  }

  return d[0];
};

var arr = [[-1], [2, 3], [1, -1, -3]];
console.log(minimumTotal(arr));
