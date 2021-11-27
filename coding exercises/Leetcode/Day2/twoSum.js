// TC - O(n), SC - O(n)
var twoSum = function (nums, target) {
  const lookUpObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (lookUpObj[target - nums[i]] != undefined) {
      return [i, lookUpObj[target - nums[i]]];
    } else lookUpObj[nums[i]] = i;
  }
  console.log(lookUpObj);
  return [];
};


console.log(twoSum([2, 7, 11, 15], 9));
