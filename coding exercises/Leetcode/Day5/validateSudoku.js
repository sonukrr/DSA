var isValidSudoku = function (board) {
  var set = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];
      if (value == ".") continue;
      if (
        set.has(`${value} at row ${i}`) ||
        set.has(`${value} at col ${j}`) ||
        set.has(
          `${value} at sub box row - ${Math.floor(i / 3)}, col - ${Math.floor(
            j / 3
          )}`
        )
      ) {
        return false;
      }

      set.add(`${value} at row ${i}`);
      set.add(`${value} at col ${j}`);
      set.add(
        `${value} at sub box row - ${Math.floor(i / 3)}, col - ${Math.floor(
          j / 3
        )}`
      );
    }
  }
  
  return true;
};

var arr = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(arr));
