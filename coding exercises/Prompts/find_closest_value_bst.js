// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Avg: TC - O(log n), SC - O(log n)
// Worst: TC - O(n), SC - O(n)
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree == null) {
    return closest;
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value)
    return findClosestValueInBstHelper(tree.left, target, closest);
  else if (target > tree.value)
    return findClosestValueInBstHelper(tree.right, target, closest);
  else return closest;
}