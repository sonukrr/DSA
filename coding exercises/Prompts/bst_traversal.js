class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// left, root, right
// TC - O(n), SC - o(n)
function inOrderTraverse(tree, array = []) {
  if (tree != null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }

  return array;
}

// root, left, right
// TC - O(n), SC - o(n)
function preOrderTraverse(tree, array) {
  if (tree != null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }

  return array;
}

// left, right, root
// TC - O(n), SC - o(n)
function postOrderTraverse(tree, array) {
  if (tree != null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
