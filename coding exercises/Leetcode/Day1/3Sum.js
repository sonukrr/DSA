// TC - O(n^2) | SC - O(n)
var threeSum = function (nums, targetSum = 0) {
  nums.sort((n1, n2) => n1 - n2);

  const triplets = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i - 1] == nums[i]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == targetSum) {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
};

var arr = [-2, 0, 0, 2, 2];
console.log(threeSum(arr));
