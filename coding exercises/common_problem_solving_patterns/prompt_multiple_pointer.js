// TC - O(n)
function findPair1(arr, num) {
  const visiterObj = {};
  for (const itm of arr) {
    visiterObj[itm] = 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] + num;
    if (visiterObj[temp]) {
      return true;
    }
  }

  return false;
}

console.log(findPair1([-2, 3, 4, 10], 6));
console.log(findPair1([6, 1, 4, 10, 2, 4], 3));

// TC - O(n log n)
function findPair2(arr, num) {
  arr.sort((n1, n2) => n1 - n2); //O(n log n)
  for (let i = 0; i < arr.length; i++) { //O(n)
    let idx = binarySearch(i + 1, arr[i] + Math.abs(num)); //O(log n)
    if (idx != -1) return true;
  }

  return false;
  function binarySearch(startIdx, searchNum) {
    let idx = -1;
    let left = startIdx;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] == searchNum) {
        return mid;
      }
      if (searchNum > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return idx;
  }
}

console.log(findPair2([-2, 3, 4, 10], 6));
console.log(findPair2([-2, 3, 4, 10], 0));
console.log(findPair2([5,5], 0));
console.log(findPair2([-4,4],-8));


