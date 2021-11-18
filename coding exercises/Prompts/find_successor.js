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

// in order traversal -> left, root, right
function findSuccessor(tree, node) {
  let arr = [];
  inOrderTraversal(tree);
  return arr;

  function inOrderTraversal(node) {
    if (!node) return;
    if (!node.left && !node.right) {
      arr.push(node.value);
      return;
    }

    inOrderTraversal(node.left);
    arr.push(node.value);
    inOrderTraversal(node.right);
  }
}

let node = new Node(8);
var bt = new BinaryTree(1);
bt.left = new Node(2);
bt.right = new Node(3);
bt.left.left = new Node(4);
bt.left.right = new Node(10);
bt.left.left.left = new Node(11);
bt.right.right = new Node(9);
bt.right.right.left = node;

console.log( findSuccessor(bt, node));

//       1
//     /  \
//    2    3
//    /\    \
//   4  10   9
//   /       /
//  11      8

// in order traverse -> 11 4 2 10 1 3 8 9
