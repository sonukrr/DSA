//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// TC - O(n), SC - O(d)
var isValidBST = function (root) {
  return validateBSTHelper(root, -Infinity, Infinity);
};

function validateBSTHelper(node, min, max) {
  if (node == null) return true;
  if (node.val <= min || node.val >= max) {
    return false;
  }

  let isLeftValid = validateBSTHelper(node.left, min, node.val);
  let isRightVaid = validateBSTHelper(node.right, node.val, max);

  return isLeftValid && isRightVaid;
}
