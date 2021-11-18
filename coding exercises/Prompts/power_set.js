// TC - O(n*2^n), SC - O(n*2^n)
function powerset(array) {
  const powerSet = [[]];

  for (let i = 0; i < array.length; i++) {
    // n
    var currIdx = 0;
    var subsetsCount = powerSet.length;
    while (currIdx < subsetsCount) {
      // 2^n
      let newSubSet = powerSet[currIdx].concat(array[i]);
      powerSet.push(newSubSet);
      currIdx++;
    }
  }

  return powerSet;
}

// TC - O(n*2^n), SC - O(n*2^n)
function powersetRecursive(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1;
  } 
  if (idx < 0) {
    return [[]];
  }

  const el = array[idx];
  const subsets = powersetRecursive(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(el));
  }
  return subsets;
}
var set = [1, 2, 3];
console.log(powersetRecursive(set));
