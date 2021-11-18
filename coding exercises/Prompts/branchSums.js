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

  // TC - O(n), SC - O(n)
  branchSums(root) {
    const res = [];
    branchSumsHelper(root, 0);
    return res;

    function branchSumsHelper(node, runningSum) {
      if (!node) return;
      runningSum += node.value;

      if (node.left == null && node.right == null) {
        res.push(runningSum);
        return;
      }

      branchSumsHelper(node.left, runningSum);

      branchSumsHelper(node.right, runningSum);
    }
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
