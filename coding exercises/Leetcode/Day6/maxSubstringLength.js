
// TC - O(n), SC = O(min(n,A)) n- input string length, A- unique char length
var lengthOfLongestSubstring = function (s) {
  var start = 0;
  var maxLength = 0;

  var lookUpObj = {};
  for (let i = 0; i < s.length; i++) {
    let d = s[i];
    if (lookUpObj[d] == undefined) {
      lookUpObj[d] = i;
    } else {
      start = Math.max(start, lookUpObj[d] + 1);
      lookUpObj[d] = i;
    }
    let subStr = s.slice(start, i + 1);
    maxLength = subStr.length > maxLength ? subStr.length : maxLength;
  }
  return maxLength;
};


console.log(lengthOfLongestSubstring("abba"));
