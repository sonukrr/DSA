// 1. CountZeroes
// [1,1,1,1,0,0,0]  -> 3,
// [0,0,0,0,1,1]    -> 4
//TC - O(log n)
function countZeroes(arr) {
  var left = 0;
  var right = arr.length;
  var mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr.length - left;
}

console.log(countZeroes([1, 0, 0, 0, 0, 0]));

//2. sortedFrequency
// [1,1,1,2,2,2,3,4], 2  -> 3
function countSortedFrequecy(arr, num) {
  var left = 0;
  var right = arr.length;
  var mid = 0;
  var count = -1;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  while (arr[left] == num) {
    if (count == -1) count = 0;
    count++;
    left++;
  }

  return count;
}

// TC- O(log n)
function findRotatedIndex(arr, num) {
  var low = 0;
  var high = arr.length - 1;
  var mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == num) return mid;
    if (arr[low] < arr[mid]) {
      //sorted array
      if (num >= arr[low] && num < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //sorted array
      if (num > arr[mid] && num <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

console.log(findRotatedIndex([10,20,30,40,1,4,5,6,9], 6));