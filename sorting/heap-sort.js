// TC - O(n log n)
function heapSort(array) {
  buildMaxHeap(array);

  //O(n)
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    [array[0], array[endIdx]] = [array[endIdx], array[0]];
    siftDown(0, endIdx - 1, array);
  }
  return array;
}

// converts an unsorted array to a max heap
function buildMaxHeap(array) {
  const firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length - 1, array);
  }
}

// O(log n)
function siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap;
    if (childTwoIdx != -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }

    if (heap[idxToSwap] > heap[currentIdx]) {
      [heap[idxToSwap], heap[currentIdx]] = [
        heap[currentIdx],
        heap[idxToSwap],
      ];
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}
