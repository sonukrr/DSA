/**
 * @param {string} s
 * @return {string[]}
 */
// TC - O(10*n) |  SC - O(u), u - all unique sequences count
var findRepeatedDnaSequences = function (s) {
  var allSequences = {};
  var seq = "";
  for (let i = 0; i < s.length - 9; i++) {
    seq = "";
    seq += s[i];

    for (let j = i + 1; j < i + 10; j++) {
      seq += s[j];
      if (seq.length == 10) {
        allSequences[seq] = allSequences[seq] + 1 || 1;
        seq = "";
      }
    }
  }

  var res = [];
  for (const s in allSequences) {
    if (allSequences[s] > 1) {
      res.push(s);
    }
  }
  return res;
};

// multi pointer approach
// TC - O(n), SC - O(n)
var findRepeatedDnaSequences = function (s) {
  var start = 0;
  var end = 9;
  const res = [];
  const allSequences = {};
  while (end < s.length) {
    let seq = s.slice(start, end + 1);
    allSequences[seq] = allSequences[seq] + 1 || 1;
    if (allSequences[seq] == 2) {
      res.push(seq);
    }
    start++;
    end++;
  }

  return res;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
