// Tc - O(log n), SC - O(1)
var searchInsert = function (nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
  
    var start = 0;
    var end = nums.length - 1;
    var mid;
  
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return start;
  };

console.log(searchInsert([1, 3, 5, 6, 10, 15], 14));
