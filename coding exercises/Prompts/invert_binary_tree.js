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

  invertBinaryTree(tree) {
    invertBinaryTreeHelper(tree);
    return tree;

    function invertBinaryTreeHelper(node) {
      if (!node) return;
      if (!node.left && !node.right) return;

      swapNodes(node);
      invertBinaryTreeHelper(node.left);
      invertBinaryTreeHelper(node.right);
    }

    function swapNodes(node) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
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
