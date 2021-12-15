// TC - O(wh) | SC - O(wh), w = width, h - height
function removeIslands(matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;

  // fill all non islands origin position to stack
  var stack = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i == 0 || j == 0 || i == rows - 1 || j == cols - 1) {
        if (matrix[i][j] == 1) {
          stack.push(new Cell(i, j));
        }
      }
    }
  }

  // mark all non islands as visited by replacing with 2
  while (stack.length) {
    var curr = stack.pop();
    markNonIslands(curr.row, curr.col, rows, cols, matrix);
  }

  // replace 2 with 1 and all 1 with 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 1) matrix[i][j] = 0;
      if (matrix[i][j] == 2) matrix[i][j] = 1;
    }
  }
  return matrix;
}

function markNonIslands(currRow, currCol, rows, cols, matrix) {
  if (
    currRow < 0 ||
    currRow >= rows ||
    currCol < 0 ||
    currCol >= cols ||
    matrix[currRow][currCol] != 1
  ) {
    return;
  }
  matrix[currRow][currCol] = 2;
  var directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  for (const dir of directions) {
    markNonIslands(currRow + dir[0], currCol + dir[1], rows, cols, matrix);
  }
}

class Cell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

var obj = {
  matrix: [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ],
};

removeIslands(obj.matrix);
