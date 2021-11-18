// TC - O(n), SC = O(min(n,A)) n- input string length, A- unique char length
function longestSubstringWithoutDuplication(string) {
  const lastSeen = {};
  var longestSubString = "";
  var startIdx = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if(lastSeen[char] == undefined){
      lastSeen[char] = i;
    }else{
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
			lastSeen[char] = i;
    }

    let currSub = string.slice(startIdx, i+1);
    longestSubString = currSub.length >= longestSubString.length ? currSub : longestSubString;
    
  }

  return longestSubString;
}
var str = "clementisacap";
console.log(longestSubstringWithoutDuplication(str));
