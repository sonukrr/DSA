var maxAreaOfIsland = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  var maxArea = 0;
  var currArea = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        markVisitedAndCountForCurrLand(i, j);
        maxArea = Math.max(currArea, maxArea);
        currArea = 0;
      }
    }
  }
  return maxArea;

  function markVisitedAndCountForCurrLand(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    else if (grid[r][c] !== 1) return;

    if (grid[r][c] == 1) {
      currArea++;
      grid[r][c] = 2; //marking as visited
      markVisitedAndCountForCurrLand(r, c - 1); // LEFT
      markVisitedAndCountForCurrLand(r - 1, c); // TOP
      markVisitedAndCountForCurrLand(r, c + 1); // RIGHT
      markVisitedAndCountForCurrLand(r + 1, c); // BOTTOM
    }
    return;
  }
};

console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ])
);
