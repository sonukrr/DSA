// TC - O(n) | SC - O(n)
var majorityElement = function (nums) {
  let maxEl = -1;

  const freq = {};
  for (const num of nums) {
    freq[num] = freq[num] + 1 || 1;
  }
  let minFreq = Math.floor(nums.length / 2);
  for (const num in freq) {
    if (freq[num] > minFreq) {
      maxEl = num;
    }
  }

  return +maxEl;
};

// TC - O(n) | SC - O(1)
var majorityElement = function (nums) {
  let maxEl = nums[0];
  let count = 1;

  for (const num of nums) {    
    if (num == maxEl) {
      count++;
    } else {
      count--;
      if (count == 0) {
        maxEl = num;
        count++;
      }
    }
  }

  return +maxEl;
};

console.log(majorityElement([3, 2, 3]));
