//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
// TC - O(n), SC - O(h)
var maxDepth = function (root, depth = 0) {
    if(root == null) return depth;
        
    depth++;
    let depthLeft = maxDepth(root.left, depth);
    let depthRight = maxDepth(root.right, depth);

    return Math.max(depthLeft, depthRight);
};
