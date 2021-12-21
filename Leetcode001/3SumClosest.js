/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var closestSum = Infinity;
  var difference = Infinity;
  nums.sort((n1, n2) => n1 - n2);

  for (let i = 0; i < nums.length; i++) {
    //1st el
    var left = i + 1;
    var right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let currDiff = Math.abs(target - sum);
      if(currDiff < difference){
            difference = currDiff;
            closestSum = sum;
      }
   
      if (sum == target) {
        break;
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }

  return closestSum;
};
