var sortedSquares = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  const squaredSortedArr = Array(nums.length).fill(-1);
  var k = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      squaredSortedArr[k] = nums[left] * nums[left];
      left++;
    } else {
      squaredSortedArr[k] = nums[right] * nums[right];
      right--;
    }
    k--;
  }

  return squaredSortedArr;
};

console.log(sortedSquares([-4, -1, 0, 0, 3, 10]));
