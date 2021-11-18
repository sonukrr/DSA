// TC- O(n)
//1. Find the peaks
//2. Traverse the left and right of peak
function longestPeak(array) {
  var highestPeakLength = 0;
  var i = 1;
  var leftIdx, rightIdx;
  while (i < array.length - 1) {
    let isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];

    if (!isPeak) {
      i++;
    } else {
      leftIdx = i - 2;
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx--;
      }

      rightIdx = i + 2;
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx++;
      }

      let currentPeakLength = rightIdx - leftIdx - 1;
      highestPeakLength = Math.max(highestPeakLength, currentPeakLength);
      i = rightIdx;
    }
  }

  return highestPeakLength;
}

var arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, -2, 3];
console.log(longestPeak(arr));
