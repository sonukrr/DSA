class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// TC - O(n), SC - O(n)
function findSuccessor(tree, node) {
  const inOrderTraversedArr = inOrderTraversal(tree);

  return inOrderTraversedArr[
    inOrderTraversedArr.findIndex((n) => n == node) + 1
  ];
}

function inOrderTraversal(tree, arr = []) {
  if (tree == null) return;
  inOrderTraversal(tree.left, arr);
  arr.push(tree);
  inOrderTraversal(tree.right, arr);
  return arr;
}

// TC - O(h), SC - O(1); h -> height of tree
function findSuccessor(tree, node) {
  if (node.right != null) return getLeftMostChild(node.right);

  return getRightMostParent(node);
}

function getLeftMostChild(node) {
  var currNode = node;
  while (currNode.left != null) {
    currNode = currNode.left;
  }
  return currNode;
}

function getRightMostParent(node) {
  var currNode = node;
  while (currNode.parent !== null && currNode.parent.right == currNode) {
    currNode = currNode.parent;
  }
  return currNode.parent;
}
