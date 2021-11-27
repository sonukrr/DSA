class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// // TC - O(n), SC - O(n)
// function findKthLargestValueInBst(tree, k) {
//   const sortedArr = [];
//   inOrderTraverse(tree, sortedArr);
//   return sortedArr[sortedArr.length - k];
// }

// function inOrderTraverse(tree, sortedArr) {
//   if (tree == null) return;
//   inOrderTraverse(tree.left, sortedArr);
//   sortedArr.push(tree.value);
//   inOrderTraverse(tree.right, sortedArr);
// }

// TC - O(h + k), SC - O(h) h-> height, k -> input 
function findKthLargestValueInBst(tree, k) {
  var treeInfo = { count: 0, value: -1 };
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.value;
}

function reverseInOrderTraverse(tree, k, treeInfo) {
  if (tree == null || treeInfo.count >= k) return;
  reverseInOrderTraverse(tree.right, k, treeInfo);
  if (treeInfo.count < k) {
    treeInfo.count++;
    treeInfo.value = tree.value;
    if (k == treeInfo.count) {
      return treeInfo.value;
    }
    reverseInOrderTraverse(tree.left, k, treeInfo);
  }
}
