/**
 * 
 *TC Best,Avg case - O(n log n), worst case - O(n^2)
 */
function quickSort(arr, left = 0, right = arr.length-1) {

    if(left < right){
        var pivotIdx = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);    
    }
    
    return arr;
}

/**
 * 
 *
 */
function pivotHelper(arr, startIdx = 0, endIdx = arr.length-1) {
  let swapIdx = startIdx;
  let pivotIdx = startIdx+1;
  while (pivotIdx != endIdx+1) {
    if (arr[pivotIdx] < arr[startIdx]) {
      [arr[swapIdx + 1], arr[pivotIdx]] = [arr[pivotIdx], arr[swapIdx + 1]];
      ++swapIdx;
    }
    pivotIdx++;
  }

  // move 0th to swapIdx
  [arr[startIdx], arr[swapIdx]] = [arr[swapIdx], arr[startIdx]];  
  return swapIdx;
}


console.log(quickSort([100, 13, 5, 1 ,12, 25,9]));
