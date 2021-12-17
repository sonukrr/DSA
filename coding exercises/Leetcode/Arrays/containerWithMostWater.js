/**
 * @param {number[]} height
 * @return {number}
 */
// TC - O(n) | SC - O(1)
var maxArea = function (height) {
  var area = 0;
  var left = 0;
  var right = height.length - 1;
  while (left < right) {
    let currArea = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(currArea, area);
    if (height[left] < height[right]) {
      left++;
    } else if (height[left] > height[right]) {
      right--;
    } else if (height[left] == height[right]) {
      left++;
    }
  }

  return area;
};

var heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights));
