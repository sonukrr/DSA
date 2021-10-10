// TC - BC: O(n), AC - O(n), WC - O(n^2)
// SC - O(1)
function quickselect(array, k) {
  var pivotIdx = -1;
  quickSelectionHelper(array);
  return array[pivotIdx];

  function quickSelectionHelper(array, start = 0, end = array.length - 1) {
    pivotIdx = pivotHelper(array, start, end);
    if (pivotIdx == k - 1) return;
    if (k - 1 < pivotIdx) {
      // traverse left
      quickSelectionHelper(array, start, pivotIdx - 1);
    } else {
      //traverse right
      quickSelectionHelper(array, pivotIdx + 1, end);
    }
  }
}

// place pivot (0th el) to correct place
// all values less than are in left and all greater than are in right side of pivot
function pivotHelper(array, start, end) {
  if(start == end) return start;
  var pivot = start;
  var left = start + 1;
  var right = end;
  while (left <= right) {
    if (array[left] < array[pivot]) {
      left++;
    } else if (array[left] > array[pivot]) {
      if (array[right] < array[pivot]) {
        // do swap left and right
        [array[left], array[right]] = [array[right], array[left]];
        right--;
        left++;
      } else {
        right--;
      }
    }
  }

  //right holds the correct place of pivot
  [array[pivot], array[right]] = [array[right], array[pivot]];

  return right;
}


var arr = [8, 5, 2, 9, 7, 6, 3];

quickselect(arr, 3);
