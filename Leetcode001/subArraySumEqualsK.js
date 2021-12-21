/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// TC - O(n^2) | SC - O(1)
var subarraySum = function (nums, k) {
  var count = 0;
  var curr = 0;

  var runningSum = 0;
  while (curr < nums.length) {
    runningSum = nums[curr];
    if (runningSum == k) {
      count++;
    }

    let next = curr + 1;
    while (next < nums.length) {
      runningSum += nums[next];
      if (runningSum == k) {
        count++;
      }
      next++;
    }

    runningSum = 0;
    curr++;
  }
  return count;
};

// TC - O(n) | SC - O(n)
// Approach - remove all possible prefixes sum to get the target
var subarraySum = function(nums, k){
    const prefixSumCount = {0: 1};
    var subArrayCount = 0;
    var runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        let prefixSumNeeded = runningSum - k;
        if(prefixSumCount[prefixSumNeeded] != undefined){
            subArrayCount += prefixSumCount[prefixSumNeeded];
        }

        prefixSumCount[runningSum] = (prefixSumCount[runningSum] + 1) || 1;
        
    }

    return subArrayCount;
}

console.log(subarraySum([1, -1, 0], 0));
