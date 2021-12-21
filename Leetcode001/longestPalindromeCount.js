/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const charCount = {};
  var containsOdd = false;
  var maxPalindromeStrCount = 0;
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = charCount[s[i]] + 1 || 1;
  }

  for (const char in charCount) {
    if (charCount[char] % 2 == 0) {
      // even
      maxPalindromeStrCount += charCount[char];
    } else {
      // odd
      containsOdd = true;
      maxPalindromeStrCount += charCount[char] - 1;
    }
  }

  if (containsOdd) {
    maxPalindromeStrCount++;
  }

  return maxPalindromeStrCount;
};
