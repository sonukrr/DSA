/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  var hasPathSum = false;
  hasPathSumHelper(root, 0);
  return hasPathSum;

  function hasPathSumHelper(root, currSum) {
    if (root == null) return;

    let newSum = currSum + root.val;
    if (newSum == targetSum && root.left == null && root.right == null) {
      hasPathSum = true;
    } else {
      hasPathSumHelper(root.left, newSum);
      hasPathSumHelper(root.right, newSum);
    }
  }
};
