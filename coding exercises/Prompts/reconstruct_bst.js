class BST{
    constructor(value, left, right){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// TC - o(n^2), SC - O(h)
function reconstructBst(preOrderTraversalValues) {
    if(preOrderTraversalValues.length == 0) return null;

    let currentValue = preOrderTraversalValues[0];
    let rightSubTreeRootIdx = preOrderTraversalValues.length;
    for (let i = 1; i < preOrderTraversalValues.length; i++) {
        if(preOrderTraversalValues[i] >= currentValue){
            rightSubTreeRootIdx = i;
            break;
        }        
    }

    let leftSubTree = reconstructBst(preOrderTraversalValues.slice(1, rightSubTreeRootIdx));
    let rightSubTree = reconstructBst(preOrderTraversalValues.slice(rightSubTreeRootIdx));

    return new BST(currentValue, leftSubTree, rightSubTree);
    
  }



  class TreeInfo{
    constructor(rootIdx){
        this.rootIdx = rootIdx;
    }    
  }

// TC - O(n), SC - O(h)
function reconstructBst(preOrderTraversalValues) {
    const treeInfo = new TreeInfo(0);
    return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubTreeInfo){
    if(currentSubTreeInfo.rootIdx == preOrderTraversalValues.length) return null;

    const rootValue = preOrderTraversalValues[currentSubTreeInfo.rootIdx];
    if(rootValue < lowerBound  || rootValue >= upperBound) return null;

    currentSubTreeInfo.rootIdx++;

    const leftSubTree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubTreeInfo);
    const rightSubTree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubTreeInfo);

    return new BST(rootValue, leftSubTree, rightSubTree);
}
