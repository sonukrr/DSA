function TreeNode(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

// TC - O(n), SC - O(log n)
function maxPathSum(tree) {
    const [_, maxSum] = findMaxSum(tree);
    return maxSum;
}

function findMaxSum(tree) {
    if(tree == null) return [0,-Infinity];

    const [leftMaxSumBranch, leftMaxPathSum] = findMaxSum(tree.left);
    const [rightMaxSumBranch, rightMaxPathSum] = findMaxSum(tree.right);
    const maxChildSumAsBranch = Math.max(leftMaxSumBranch, rightMaxSumBranch);

    const {value} = tree;
    const maxSumAsBranch = Math.max(maxChildSumAsBranch+value, value);
    const maxSumAsRootNode = Math.max(leftMaxSumBranch+value+rightMaxSumBranch, maxSumAsBranch);
    const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);

    return [maxSumAsBranch, maxPathSum];
}

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

console.log(tree);