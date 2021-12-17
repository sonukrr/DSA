// TC - O(n log n), SC - O(1)
var merge = function (intervals) {
  intervals.sort((a1, a2) => a1[0] - a2[0]);
  const nonOverlappingIntervals = [];

  var tempArr;
  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i];
    if (!tempArr) {
      tempArr = [...curr];
    }
    if (i == intervals.length - 1) {
      nonOverlappingIntervals.push(tempArr);
      break;
    }
    let nextLowest = intervals[i + 1][0];
    if (nextLowest <= tempArr[1]) {
      tempArr[1] = Math.max(tempArr[1] , intervals[i + 1][1]);
    } else {
      nonOverlappingIntervals.push(tempArr);
      tempArr = null;
    }
  }
  return nonOverlappingIntervals;
};


