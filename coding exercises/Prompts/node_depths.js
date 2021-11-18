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

  nodeDepths(root) {
    var nodeDepthSum = 0;
    nodeDepthSumHelper(root, 0);
    return nodeDepthSum;

    function nodeDepthSumHelper(node, currRunningDepth) {
      if (!node) return;

      nodeDepthSum += currRunningDepth;
      if (!node.left && !node.right) {        
        return;
      }
      currRunningDepth++;
       nodeDepthSumHelper(node.left, currRunningDepth);
       nodeDepthSumHelper(node.right, currRunningDepth);
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
