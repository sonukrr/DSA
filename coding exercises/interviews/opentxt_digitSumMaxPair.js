//Worst TC - O(nd log n), SC - O(n) where n- input array length, d - max number of digits a number can have
function solution(A) {
  const lookUpObj = {};

  for (let i = 0; i < A.length; i++) {
    let num = A[i].toString();
    let digitsSum = 0;
    for (let j = 0; j < num.length; j++) {
      digitsSum = digitsSum + +num[j];
    }

    lookUpObj[digitsSum]
      ? lookUpObj[digitsSum].push(A[i])
      : (lookUpObj[digitsSum] = [A[i]]);
  }

  for (const key in lookUpObj) {
    lookUpObj[key].sort((n1, n2) => n2 - n1);
  }

  var maxSum = -1;
  for (const key in lookUpObj) {
    if (lookUpObj[key].length >= 2) {
      maxSum = Math.max(maxSum, lookUpObj[key][0] + lookUpObj[key][1]);
    }
  }

  return maxSum;
}

console.log(solution([51, 32, 33]));
