// TC - O(n^2), SC - O(n^2)
function fourNumberSum(array, targetSum) {
  const allPairsSum = {};
  const quadruplets = [];

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currSum = array[i] + array[j];
      const diff = targetSum - currSum;
      if (allPairsSum[diff] !== undefined) {
        for (const pair of allPairsSum[diff]) {
          quadruplets.push(pair.concat(array[i], array[j]));
        }
      }
    }

    for (let k = 0; k < i; k++) {
      let currSum = array[i] + array[k];
      if (allPairsSum[currSum] === undefined) {
        allPairsSum[currSum] = [[array[i], array[k]]];
      } else {
        allPairsSum[currSum].push([array[i], array[k]]);
      }
    }
  }
  return quadruplets;
}
