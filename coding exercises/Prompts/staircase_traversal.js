// TC - O(k^n), k - maxsteps, n - height
// SC - O(n)
// Recursive
// function stairCaseTraversal(height, maxSteps) {
//     return numberOfWaysToTop(height, maxSteps);
// }

// function numberOfWaysToTop(height, maxSteps){
//     if(height <= 1) return 1;
//     else{
//         let sum = 0;
//         for (let i = 1; i <= Math.min(height, maxSteps); i++) {
//             sum += numberOfWaysToTop(height-i, maxSteps);
//         }
//         return sum;
//     }
// }

// TC - O(n*k), SC - O(n)
// Recursive
// function stairCaseTraversal(height, maxSteps) {
//     return numberOfWaysToTop(height, maxSteps, {0:1,1:1});
// }

// function numberOfWaysToTop(height, maxSteps, memoize){
//     if(memoize[height]) return memoize[height];
//     else{
//         let sum = 0;
//         for (let i = 1; i <= Math.min(height, maxSteps); i++) {
//             sum += numberOfWaysToTop(height-i, maxSteps, memoize);
//         }
//         memoize[height] = sum;
//         return sum;
//     }
// }

// TC - O(n*k), SC - O(n)
// Iterative
// function stairCaseTraversal(height, maxSteps) {
//   const numberOfWays = Array(height + 1).fill(0);
//   numberOfWays[0] = 1;
//   numberOfWays[1] = 1;

//   for (let i = 2; i < numberOfWays.length; i++) {
//     let currNumberOfWays = 0;
//     for (let j = Math.min(maxSteps, i); j >= 0; j--) {
//       currNumberOfWays += numberOfWays[i - j];
//     }
//     numberOfWays[i] = currNumberOfWays;
//   }

//   return numberOfWays[numberOfWays.length - 1];
// }

// TC - O(n), SC - O(n)
// Iterative - Sliding Window
function stairCaseTraversal(height, maxSteps) {
    let currentNumberOfWays = 0;
    var waysToTop = [1];

    for (let currentHeight = 1; currentHeight <= height+1; currentHeight++) {
        let startOfWindow = currentHeight - maxSteps - 1;
        let endOfWindow = currentHeight - 1;
        
        if(startOfWindow >= 0){
            currentNumberOfWays -= waysToTop[startOfWindow];
        }

        currentNumberOfWays += waysToTop[endOfWindow];
        waysToTop.push(currentNumberOfWays);
        
    }

    return waysToTop[height];
}

console.log(stairCaseTraversal(4, 2));
