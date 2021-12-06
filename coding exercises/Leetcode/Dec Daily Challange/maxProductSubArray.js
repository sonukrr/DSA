/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadanes Algorithm
//TC - O(n), SC - O(1)
var maxProduct = function (nums) {
  var ans = nums[0];
  var max = ans;
  var min = ans;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      //swap
      let temp = max;
      max = min;
      min = temp;
    }
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);

    ans = Math.max(ans, max);
  }

  return ans;
};

var nums = [-2, 3, -4];
console.log(maxProduct(nums));
