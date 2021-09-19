/**
 * This pattern involves dividing a large data set into smaller chunks and then repeating the process with a subset of data.
 * This pattern tremendously decrease time complexity.
 * Uses - Binary Search, Quick sort, Merge sort and lot more...
 */

/**
 *
 * @param {*} arr - sorted array of integers
 * @param {*} num - number to be searched
 */
function binarySearch(arr, num) {
  if (arr.length == 0) return null;

  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == num) {
      return mid;
    }

    if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return "Not found";
}

console.log(binarySearch([1, 2, 5, 7, 12, 23, 56, 78, 489], 23));
console.log(binarySearch([], 23));
