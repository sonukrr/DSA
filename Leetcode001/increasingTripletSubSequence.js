/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC - O(n^3) | SC - O(1)
var increasingTriplet = function (nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k]) {
          return true;
        }
      }
    }
  }
  return false;
};

// TC - O(n) | SC - O(1)
var increasingTriplet = function (nums) {
    var first = Infinity;
    var second = Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < first) {
        first = nums[i];
      } else if (nums[i] < second && nums[i] > first) {
        second = nums[i];
      } else if(nums[i] > second){
        return true;
      }
    }
  
    return false;
  };
  