// TC - O(r*c), SC - O(r*c), r, c - row count, col count in input matrix
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;

  var reshapeMatrix = [];
  for (let i = 0; i < r; i++) {
    reshapeMatrix[i] = new Array(c).fill(0);
  }

  let currRow = 0;
  let currCol = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (currCol == c) {
        currCol = 0;
        currRow++;
      }

      reshapeMatrix[currRow][currCol] = mat[i][j];
      currCol++;
    }
  }

  return reshapeMatrix;
};

var mat = [[1, 2, 3, 4]];

console.log(matrixReshape(mat, 2, 2));
