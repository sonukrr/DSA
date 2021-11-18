class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TC - O(n), SC - Avg: O(h), Worst: O(n) n - number of nodes, h - depth of tree
function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (tree == null) {
    return new TreeInfo(0, 0);
  }

  let leftTreeInfo = getTreeInfo(tree.left);
  let rightTreeInfo = getTreeInfo(tree.right);

  let longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  let maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  let currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  let currrentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currrentHeight);
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

var bt = new BinaryTree(1);
bt.left = new Node(2);
bt.right = new Node(3);
bt.left.left = new Node(4);
bt.left.right = new Node(10);
bt.left.left.left = new Node(11);
bt.right.right = new Node(9);
bt.right.right.left = new Node(8);
