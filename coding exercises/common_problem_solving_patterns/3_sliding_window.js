/**
 * This pattern involves creating a window which can either be an array or number from one position to another.
 * Depending on the certain condition, the window either increases or closes (and a new window is created).
 * Very useful in keeping track of a subset of data in an array/string etc...
 */

/**
 * To find the max sub array sum of passed number of conseqcutive digits
 */

function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;

  var maxSum = 0;
  var tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log(maxSubArraySum([1,10,9,4,5], 2));
console.log(maxSubArraySum([1, 2, 3, 4, 5, 1, 2, 3], 2));
