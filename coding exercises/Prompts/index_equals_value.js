// TC - O(log n), SC - O(1)
function indexEqualsValue(array) {
  var left = 0;
  var right = array.length - 1;
  var mid;
  var minIdx = Infinity;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid === array[mid]) {
      minIdx = Math.min(minIdx, mid);
    }
    if (array[mid] < mid) {
      // explore right sub array
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return minIdx < array.length ? minIdx : -1;
}

var arr = [-5, -3, 0, 3, 4, 5, 9];

console.log(indexEqualsValue(arr));
