/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  pattern = pattern.split("");
  s = s.split(" ");

  if (pattern.length != s.length) {
    return false;
  }

  const patternsFound = {};
  
  for (let i = 0; i < pattern.length; i++) {
    if (patternsFound[pattern[i]] == undefined) {
      patternsFound[pattern[i]] = s[i];
    } else if (patternsFound[pattern[i]] != s[i]) {
      return false;
    }
  }

  return (
    new Set(Object.values(patternsFound)).size ==
    Object.keys(patternsFound).length
  );
};

console.log(wordPattern("abba", "dog dog dog dog"));
