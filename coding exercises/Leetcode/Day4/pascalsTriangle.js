var generate = function (numRows) {
  if (numRows == 0) return [1];

  var res = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRowArr = res[i - 1];
    // add first
    res[i] = [prevRowArr[0]];

    //add middle
    let currIdx = 0;
    while (currIdx < prevRowArr.length - 1) {
      res[i].push(prevRowArr[currIdx] + prevRowArr[currIdx + 1]);
      currIdx++;
    }

    // add last
    res[i].push(prevRowArr[prevRowArr.length - 1]);
  }

  return res;
};

console.log(generate(5));
