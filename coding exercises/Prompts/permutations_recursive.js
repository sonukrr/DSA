// TC - O(n^2 * n!), SC - O(n*n!)
function getPermutations(array) {
  var perms = [];
  permutationsHelper(array, [], perms);
  return perms;

  function permutationsHelper(arr, currPerm, perms) {
    if (!arr.length && currPerm.length) {
      perms.push(currPerm);
    } else {
      for (let i = 0; i < arr.length; i++) {  // n
        const newArr = arr.slice(0, i).concat(arr.slice(i + 1)); // n
        const newPermuation = currPerm.concat(arr[i]);
        permutationsHelper(newArr, newPermuation, perms); // n!
      }
    }
  }
}


var arr = [1, 2, 3];

console.log(getPermutations(arr));
