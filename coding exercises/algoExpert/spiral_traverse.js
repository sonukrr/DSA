//  TC- O(n), SC-O(n)
//  traverse the perimeter of array
//1.Iterative
function spiralTraverse(array) {
  var startRow = 0;
  var endRow = array.length - 1;
  var startCol = 0;
  var endCol = array[0].length - 1;

  var res = [];
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      res.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      res.push(array[row][endCol]);
    }

    if (startRow != endRow)
      for (let col = endCol - 1; col >= startCol; col--) {
        res.push(array[endRow][col]);
      }

    if (startCol != endCol)
      for (let row = endRow - 1; row >= startRow + 1; row--) {
        res.push(array[row][startCol]);
      }

    startRow += 1;
    endRow -= 1;
    startCol += 1;
    endCol -= 1;
  }

  return res;
}

//2.Recursive
function spiralTraverseRecursive(array) {
  var res = [];
  spiralFillHelper(array);
  return res;

  function spiralFillHelper(array, startRow = 0, endRow = array.length - 1, startCol = 0, endCol = array[0].length - 1) {
    if (startRow > endRow || startCol > endCol) return;

    for (let col = startCol; col <= endCol; col++) {
      res.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      res.push(array[row][endCol]);
    }

    if (startRow != endRow)
      for (let col = endCol - 1; col >= startCol; col--) {
        res.push(array[endRow][col]);
      }

    if (startCol != endCol)
      for (let row = endRow - 1; row >= startRow + 1; row--) {
        res.push(array[row][startCol]);
      }

    spiralFillHelper(array, startRow+=1, endRow-=1, startCol+=1, endCol-=1);
  }
}

var arr = [
  [2, 5, 4],
  [1, 23, 45],
  [11, 13, 14],
  [111, 113, 114],
];

var arr2 = [[10, 12, 13, 14, 15]];
var arr3 = [[10], [20], [30], [40]];
console.log(spiralTraverse(arr));
console.log(spiralTraverse(arr2));
console.log(spiralTraverse(arr3));


// console.log(spiralTraverseRecursive(arr));
console.log(spiralTraverseRecursive(arr2));
console.log(spiralTraverseRecursive(arr3));