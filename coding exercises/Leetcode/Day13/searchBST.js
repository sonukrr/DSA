//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  var found = null;
  searchBSTHelper(root);
  return found;

  function searchBSTHelper(node) {
    if (node == null || node.val == val) {
      found = node;
      return;
    }
    if (val < node.val) {
      searchBSTHelper(node.left);
    } else {
      searchBSTHelper(node.right);
    }
  }
};
