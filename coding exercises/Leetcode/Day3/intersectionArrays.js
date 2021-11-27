var intersect = function (nums1, nums2) {
  const intersectionArr = [];
  const freqCounterNums1 = {};

  for (const n of nums1) {
    freqCounterNums1[n] = (freqCounterNums1[n] || 0) + 1;
  }

  for (const n of nums2) {
    if (freqCounterNums1[n]) {
      intersectionArr.push(n);
      --freqCounterNums1[n];
    }
  }

  return intersectionArr;
};
