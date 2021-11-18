class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // O(n) - sinkDown, O(n log n) - sinkUp
  buildHeap(array) {
    var currIdx = array.length - 1;
    var parentIdx;
    while (currIdx >= 0) {
      parentIdx = Math.floor((currIdx - 1) / 2);
      this.siftDown(parentIdx, array);
      --currIdx;
    }
    return array;
  }

  // O(log n)
  siftDown(parentIdx = 0, heap = this.heap) {
    while (true) {
      var leftChildIdx = 2 * parentIdx + 1;
      var rightChildIdx = 2 * parentIdx + 2;
      var minIdx;
      if (heap[rightChildIdx] === undefined) {
        minIdx = leftChildIdx;
      } else
        minIdx =
          heap[leftChildIdx] < heap[rightChildIdx]
            ? leftChildIdx
            : rightChildIdx;
      if (heap[parentIdx] > heap[minIdx]) {
        // swap
        [heap[parentIdx], heap[minIdx]] = [heap[minIdx], heap[parentIdx]];
        parentIdx = minIdx;
      } else {
        // node is already at correct place
        break;
      }
    }
  }

  // O(log n)
  siftUp(childIdx = this.heap.length - 1) {
    while (childIdx >= 0) {
      var parentIdx = Math.floor((childIdx - 1) / 2);
      if (this.heap[parentIdx] > this.heap[childIdx]) {
        //swap
        [this.heap[parentIdx], this.heap[childIdx]] = [
          this.heap[childIdx],
          this.heap[parentIdx],
        ];
        childIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  // remove the root
  remove() {
    //swap the root with last node
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    //pop the last / root
    var removed = this.heap.pop();

    //shift down the root to corect place
    this.siftDown(0);
    return !!removed ? removed : null;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp();
  }
}

var arr = [20, 10, 40, 90, 11, 65, 100, 58, 0, -12];
var minHeap = new MinHeap(arr);
// minHeap.siftDown();
// console.log(minHeap.remove());
// console.log(minHeap.remove());
// // heap: [ 9, 10, 60, 2000, 100 ]
// minHeap.insert(22);
// minHeap.insert(98);
// minHeap.insert(0);
// minHeap.insert(100);

console.log(minHeap);
