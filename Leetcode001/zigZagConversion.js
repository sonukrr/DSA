/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  const res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = [];
  }

  var row = 0;
  var col = 0;
  var isDownward = true;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    res[row][col] = char;
    if (row == 0) {
      isDownward = true;
    } else if (row == numRows - 1) {
      isDownward = false;
    }

    if (isDownward) {
      row++;
    } else {
      row--;
      col++;
    }
  }
  let string = "";
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      string = string + (res[i][j] || "");
    }
  }
  return string;
};

// TC - O(n) | SC - O(s)
var convert = function (s, numRows) {
  const res = [];
  var index = 0,
    step = 1;
  for (let i = 0; i < s.length; i++) {
    if (res[index] == undefined) {
      res[index] = "";
    }

    res[index] += s[i];
    if (index == 0) {
      step = 1;
    } else if (index == numRows - 1) {
      step = -1;
    }

    index += step;
  }

  return res.join("");
};
console.log(convert("PAYPALISHIRING", 3));
