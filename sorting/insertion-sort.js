/**
 *@description left part is sorted , right is unsorted. We just need to pick element from right side unsorted array, keep moving the sorted arry elements to right
 * until the correct spot on sorted array is found. At end we insert the value at its correct spot.
 * TC - O(n^2), SC - O(1)
 */
function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    var comparator = (n1, n2) => n1 - n2;
  }
  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (comparator(arr[j], el) > 0) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = el;
  }

  return arr;
}

console.log(insertionSort([20, 3, 12, 67, 44, 23]));
