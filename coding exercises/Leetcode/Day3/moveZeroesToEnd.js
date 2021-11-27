// TC - O(n^2), SC - O(1)
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      let swapIdx = -1;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] != 0) {
          swapIdx = j;
          break;
        }
      }
      if (swapIdx == -1) {
        break;
      }

      [nums[i], nums[swapIdx]] = [nums[swapIdx], nums[i]];
    }
  }

  return nums;
};

// TC - O(n), SC - O(1)
var moveZeroes = function (nums) {
    var idx = 0;
    var zeroesCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[idx] = nums[i];        
          idx++;
      }else{
          zeroesCount++;
      }
    }
    
    for(let i=nums.length-zeroesCount; i<nums.length;i++ ){
        nums[i] = 0;
    }
    return nums;
  };
  