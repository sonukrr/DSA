// TC - O(number_of_alphabets * len(s2)), SC - O(1)
var checkInclusion = function (s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;
  if (len1 > len2) return false;

  var counts1 = Array(26).fill(0);
  var counts2 = Array(26).fill(0);
  for (var right = 0; right < len1; right++) {
    counts1[s1.charCodeAt(right) - "a".charCodeAt(0)]++;
    counts2[s2.charCodeAt(right) - "a".charCodeAt(0)]++;
  }
  right--;
  var left = 0;
  while (right < len2) {
    if (equalCounts(counts1, counts2)) {
      return true;
    }
    right++;
    if (right != len2) {
      counts2[s2.charCodeAt(right) - "a".charCodeAt(0)]++;
    }
    counts2[s2.charCodeAt(left) - "a".charCodeAt(0)]--;
    left++;
  }

  return false;
};

function equalCounts(arr1, arr2) {    
  for (let i = 0; i < 26; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}

console.log(checkInclusion("ab", "eidbaooo"));
