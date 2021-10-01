/**
 * 
 * split into two halves until 0 or 1 element is left. Merge the two arrs, sort and return.
 * Decompositions - O(log n), Comparisons per decompositions - O(n), So, TC - O(n log n), SC - O(n)
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1 = [], arr2 = []) {
  var result = []; //sorted arr
  var i = 0; // arr1 idx
  var j = 0; // arr2 idx
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// console.log(mergeAndSort([30, 40, 50], [5, 10, 20, 98, 100, 300]));

console.log(mergeSort([50, 60, 70, 30, 20, 40]));
