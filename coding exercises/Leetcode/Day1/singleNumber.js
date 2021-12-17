// TC - O(n) | SC - O(1)
var singleNumber = (nums) => {
  var result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
    console.log(result);
  }

  return result;
};

singleNumber([2,3,2,5,5])