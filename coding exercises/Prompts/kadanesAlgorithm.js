// TC - O(n), SC - O(1)
var findMaxSubArraySum = (arr) => {
    var maxSoFar = -Infinity;
    var maxEndingHere = 0;
    for (let i = 0; i < arr.length; i++) {
        // pick max of [sum upto i-1 + curr(i)] or curr(i)
        maxEndingHere = Math.max(maxEndingHere+arr[i], arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);        
    }
    return maxSoFar;
}

console.log(findMaxSubArraySum([3,2,-9,1,2,3,-1,10,-11,-20]));