
// TC - O(n) , SC - O(n)
function largestRange(array) {
  var bestRange = [];
  var longestLength = 0;
  const nums = {};

  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    if (!nums[num]) continue;

    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    // accessing - O(1) . Not doing any operation
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }

    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
      currentLength = 0;
    }

  }

  return bestRange;
}

var arr = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
console.log(largestRange(arr));
