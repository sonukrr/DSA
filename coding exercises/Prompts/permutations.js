// TC - O(n*n*n!), SC - O(n*n!)
function permutations(arr) {
  const perms = [];
  permuationsHelper(arr, [], perms);
  return perms;
}

function permuationsHelper(arr, currPerm, perms) {
  if (arr.length == 0 && currPerm.length) {
    perms.push(currPerm);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let newPerm = currPerm.concat(arr[i]);
    let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
    permuationsHelper(newArr, newPerm, perms);
  }
}

// TC - O(n*n!), SC - O(n*n!)
function permutations(array) {
  const perms = [];
  permuationsHelper(0, array, perms);
  return perms;
}

function permuationsHelper(i, arr, perms) {
  if (i == arr.length-1) {
    perms.push([...arr]);
    return;
  }
  for (let j = i; j < arr.length; j++) {
    swap(arr, i, j);
    permuationsHelper(i + 1, arr, perms);
    swap(arr, i, j);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(permutations([1, 2, 3]));
