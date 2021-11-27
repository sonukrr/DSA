// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// TC - O(n+m), SC - O(max(n,m))
var mergeTrees = function (root1, root2) {
    if(root1 == null && root2 == null) return null;
    let val1 = root1 != null? root1.val: 0;
    let val2 = root2 != null? root2.val :0;

    let node = new TreeNode(val1+val2);
    node.left = mergeTrees(root1 != null? root1.left : null, root2 != null? root2.left: null);
    node.right = mergeTrees(root1 != null? root1.right : null, root2 != null? root2.right: null);
    return node;
};

var t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);

var t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);

console.log(mergeTrees(t1, t2));
