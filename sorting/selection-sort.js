/**
 * @description on each iteration smallest number is available in the beginning
 *              For each iteration find the smallest number index and swap it to the iteration index to make it appear in the beginning
 * TC - O(n^2), SC - O(1)
 */
function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    var comparator = (n1, n2) => n1 - n2;
  }
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[smallestIdx]) < 0) {
        smallestIdx = j;
      }
    }
    if (smallestIdx != i) {
      [arr[i], arr[smallestIdx]] = [arr[smallestIdx], arr[i]];
    }
    console.log(arr);
  }

  return arr;
}

selectionSort([100, 90, 80, 70, 60, 50]);
