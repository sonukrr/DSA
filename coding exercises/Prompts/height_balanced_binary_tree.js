class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TC - O(n), SC - O(h)
function heightBalancedBinaryTree(tree) {
  let treeInfo = getTreeInfo(tree);
  return treeInfo.balanced;
}

function getTreeInfo(node) {
  if (node == null) return new TreeInfo(true, -1);

  let leftSubTreeInfo = getTreeInfo(node.left);
  let rightSubTreeInfo = getTreeInfo(node.right);

  let isBalanced =
    leftSubTreeInfo.balanced &&
    rightSubTreeInfo.balanced &&
    Math.abs(leftSubTreeInfo.height - rightSubTreeInfo.height) <= 1;

  let height = Math.max(leftSubTreeInfo.height, rightSubTreeInfo.height) + 1;

  return new TreeInfo(isBalanced, height);
}

class TreeInfo {
  constructor(balanced, height) {
    this.balanced = balanced;
    this.height = height;
  }
}
