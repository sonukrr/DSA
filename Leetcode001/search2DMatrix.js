/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    var startRow = 0;
    var startCol = 0;
    var endRow = matrix.length - 1;
    var endCol = matrix[0].length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      let mid = matrix[startRow][endCol];
      if (mid == target) {
        return true;
      } else if (mid > target) {
        for (let col = startCol; col <= endCol; col++) {
          if (matrix[startRow][col] === target) {
            return true;
          }
        }
      } else if (mid < target) {
        for (let row = startRow + 1; row <= endRow; row++) {
          if (matrix[row][endCol] === target) {
            return true;
          }
        }
      }
  
      startRow++;    
      endCol--;
    }
  
    return false;
  };

// TC - O(m+n) | SC - O(1)
var searchMatrix = function (matrix, target) {
    var rows = matrix.length-1;
    var cols = matrix[0].length - 1;

    var i = 0;
    var j = cols;
    while(i <= rows && j >= 0){
        console.log(matrix[i][j]);
        if(matrix[i][j] === target)
            return true;
        else if (matrix[i][j] > target)
            j--;
        else 
            i++;
    }

  return false;
};



console.log( searchMatrix(
    [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
  18
));
