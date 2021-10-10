function mergeOverlappingIntervals(array) {
  var res = [];
  var tempArr;
  array.sort((a1, a2) => a1[0] - a2[0]);
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    if (!tempArr) {
      tempArr = [curr[0], curr[1]];
    }

    if (i == array.length - 1) {
      res.push(tempArr);
      break;
    }
    let nextLowest = array[i + 1][0];
    if (nextLowest <= tempArr[1]) {
      tempArr[1] = Math.max(tempArr[1], array[i + 1][1]);
    } else {
      res.push(tempArr);
      tempArr = null;
    }
  }
  return res;
}

var arr = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];
console.log(mergeOverlappingIntervals(arr));
