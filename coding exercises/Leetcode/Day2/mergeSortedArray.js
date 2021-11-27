/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function (nums1, m, nums2, n) {
    const nums1Copy = [...nums1];
    var mergedIdx = 0;
    var nums1Ptr = 0;
    var nums2Ptr = 0;
  
    while (nums1Ptr < m && nums2Ptr < n) {
      if (nums1Copy[nums1Ptr] < nums2[nums2Ptr]) {
        nums1[mergedIdx] = nums1Copy[nums1Ptr];
        nums1Ptr++;
        mergedIdx++;
      } else {
        nums1[mergedIdx] = nums2[nums2Ptr];
        nums2Ptr++;
        mergedIdx++;
      }
    }
    while (nums1Ptr < m) {
      nums1[mergedIdx] = nums1Copy[nums1Ptr];
      nums1Ptr++;
      mergedIdx++;
    }
    while (nums2Ptr < n) {
      nums1[mergedIdx] = nums2[nums2Ptr];
      nums2Ptr++;
      mergedIdx++;
    }
    return nums1;
  };

console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));
