/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// TC - O(n^k), SC - O(n) To be precise TC - O(n!/k!*(n-k)!)
 var combine = function(n, k) {
  const res = [];
  backtrack(1,[]);
  return res;

  function backtrack(start, currComb) {
      if(currComb.length == k){
          res.push([...currComb]);
      }

      for (let i = start; i <= n; i++) {
          currComb.push(i);
          backtrack(i+1, currComb);
          currComb.pop();
      }
  }
};


console.log(combine(4,2));
