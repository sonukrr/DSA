//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// TC - O(n), SC - O(n)
// BFS
var levelOrder = function (root) {
  const res = [];
  if (root == null) return [];

  var queue = [root];
  while (queue.length != 0) {
    let size = queue.length;
    let currrLevel = [];

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      currrLevel.push(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    res.push(currrLevel);
  }

  return res;
};

var tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.right = new TreeNode(7);
tree.right.left = new TreeNode(15);

console.log(levelOrder(tree));