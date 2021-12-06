
//   Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    invertTreeHelper(root);
    return root;    
};

function invertTreeHelper(node) {
    if(node == null) return;
    if(!node.left && !node.right) return;

    swap(node);
    invertTreeHelper(node.left);
    invertTreeHelper(node.right);
    
}

function swap(node) {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
}