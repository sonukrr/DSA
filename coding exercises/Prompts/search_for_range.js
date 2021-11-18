//TC - O(log n), SC - O(1)
function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
  var mid;
  while (left <= right) {
   mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      if (goLeft) {
        if (mid == 0 || array[mid - 1] != target) {
          finalRange[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid == array.length - 1 || array[mid + 1] != target) {
          finalRange[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
}

var arr = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73];
console.log(searchForRange(arr, 45));
