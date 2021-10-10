// TC - O(n), SC -  O(n)
function firstDuplicateValue(array) {
  var minIdx = array.length;
  for (let i = 0; i < array.length; i++) {
    let visitedIdx = Math.abs(array[i]) - 1;
    if (array[visitedIdx] < 0) {
      // duplicate found
      minIdx = Math.min(minIdx, i);
    } else {
      array[visitedIdx] *= -1;
    }
  }
  return minIdx == array.length ? -1 : Math.abs(array[minIdx]);
}

console.log(firstDuplicateValue([1, 2, 4, 5, 3, 2, 3, 4, 6]));
