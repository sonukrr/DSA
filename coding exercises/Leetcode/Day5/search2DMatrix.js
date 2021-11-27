var searchMatrix = function (matrix, target) {
  var left = 0;
  var right = matrix.length - 1;
  var mid;
  let foundArr = [];
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let midArr = matrix[mid];
    if (target >= midArr[0] && target <= midArr[midArr.length - 1]) {
      foundArr = midArr;
      break;
    } else if (target < midArr[0]) {
      right = mid - 1;
    } else if (target > midArr[midArr.length - 1]) {
      left = mid + 1;
    }
  }

  if (foundArr.length == 0) return false;

  return binarySearch(foundArr, target);
};

function binarySearch(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  var mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return true;

    if (target < arr[mid]) end = mid - 1;
    else if (target > arr[mid]) start = mid + 1;
  }

  return false;
}

var arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(searchMatrix(arr, 13));
