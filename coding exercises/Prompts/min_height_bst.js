class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// TC - O(n log n), SC - O(n)
function minHeightBst(array) {
  return bstHelper(array, null, 0, array.length - 1);
}

function bstHelper(array, bst, start, end) {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  if (bst == null) bst = new BST(array[mid]);
  else bst.insert(array[mid]);
  bstHelper(array, bst, start, mid - 1);
  bstHelper(array, bst, mid + 1, end);
  return bst;
}
