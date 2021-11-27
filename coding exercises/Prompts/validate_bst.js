class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TC - O(n), SC - O(d)
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  let leftChild = validateBstHelper(tree.left, minValue, tree.value);
  return leftChild && validateBstHelper(tree.right, tree.value, maxValue);
}