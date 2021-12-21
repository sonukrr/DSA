/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// TC - O(n^2) | SC - O(rowIndex)
var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1];
  
  let prev = [1];
  for (let i = 1; i <= rowIndex; i++) {
    let newArr = [prev[0]];
    for (let j = 0; j < prev.length - 1; j++) {
      newArr.push(prev[j] + prev[j + 1]);
    }
    newArr.push(prev[prev.length - 1]);
    prev = newArr;
  }
  return prev;
};

console.log(getRow(3));
