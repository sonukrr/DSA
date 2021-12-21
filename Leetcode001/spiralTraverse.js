/**
 * @param {number} n
 * @return {number[][]}
 */
// TC - O(n) | SC - O(n), n - total number of elements
var generateMatrix = function (n) {
  var startRow = 0;
  var endRow = n - 1;
  var startCol = 0;
  var endCol = n - 1;

  const spiralMatrix = [];
  for (let i = 0; i < n; i++) {
    spiralMatrix[i] = [];
    for (let j = 0; j < n; j++) {
      spiralMatrix[i][j] = 0;
    }
  }
  
  var number = 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      spiralMatrix[startRow][col] = number;
      number++;
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      spiralMatrix[row][endCol] = number;
      number++;
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      spiralMatrix[endRow][col] = number;
      number++;
    }
    for (let row = endRow - 1; row > startRow; row--) {
      spiralMatrix[row][startCol] = number;
      number++;
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return spiralMatrix;
};

console.log(generateMatrix(3));
