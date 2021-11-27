// TC - O(log n), SC - O(1)
var search = function (nums, target) {
  var start = 0;
  var mid;
  var end = nums.length - 1;

  while (start <= end) {
    mid = Math.floor((start+end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log( search([1, 2, 56, 90, 211,900,912,999], 999));
