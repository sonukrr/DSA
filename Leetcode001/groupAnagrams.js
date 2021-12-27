/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 // TC - O(m n log n), m - input arr length, n - avg str length
var groupAnagrams = function (strs) {
  var lookUpObj = {};

  for (const str of strs) {
    let sorted = [...str].sort().join('');
    lookUpObj[sorted] == undefined ? lookUpObj[sorted] = [str] : lookUpObj[sorted].push(str);
  }
  return Object.values(lookUpObj);
};

// TC - O(mn), m - input arr length, n - avg str length
var groupAnagrams = function (strs) {
  var lookUpObj = {};

  for (const str of strs) {
    let charsArr = Array(26).fill(0);
    for (const c of str) {
      let idx = c.charCodeAt(0) - 'a'.charCodeAt(0);            
      charsArr[idx]++;
    }
    
    let key = charsArr.join('#');
    lookUpObj[key] == undefined ? lookUpObj[key] = [str] : lookUpObj[key].push(str);
  }
  
  return Object.values(lookUpObj);
};


var arr = ["bdddddddddd","bbbbbbbbbbc"];
console.log(groupAnagrams(arr));
