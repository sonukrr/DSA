// TC - O(n), SC - O(n)
function zigzagTraverse(array) {
  const height = array.length - 1;
  const width = array[0].length - 1;
  var row = 0;
  var col = 0;
  const result = [];
  var goingDown = true;
  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col]);
    if (goingDown) {
      if (col == 0 || row == height) {
        goingDown = false;
        if (row == height) col++;
        else row++;
      } else {
        row++;
        col--;
      }
    } else {
      if (row == 0 || col == width) {
        goingDown = true;
        if (col == width) row++;
        else col++;
      } else {
        row--;
        col++;
      }
    }
  }

  return result;
}

function isOutOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width;
}

var arr = [
  [1, 2, 8],
  [9, 5, 6],
  [5, 0, 10],
];

console.log(zigzagTraverse(arr));
