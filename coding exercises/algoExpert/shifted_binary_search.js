// TC - O(log n), SC - O(1)
function shiftedBinarySearch(array, target) {
  var left = 0;
  var right = array.length - 1;
  var mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] == target) {
      return mid;
    } else if (array[left] <= array[mid]) {
      // left sorted arr
      if (target >= array[left] && target < array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //right sorted array
      if (target > array[mid] && target <= array[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

var arr = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];

console.log(shiftedBinarySearch(arr, 33));
