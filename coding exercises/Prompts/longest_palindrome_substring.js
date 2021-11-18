// TC - O(n^2), SC - O(n)
function longestPalindromicSubstring(string) {
  var currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    let odd = getLongestPalindromeFrom(string, i-1, i+1);
    let even = getLongestPalindromeFrom(string, i-1, i);
    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = longest[1] - longest[0] > currentLongest[1] - currentLongest[0] ? longest: currentLongest;
  }

  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, left, right){
  while(left >= 0 && right <= string.length-1){
    if(string[left] !== string[right]){
      break;
    }
    left--;
    right++;
  }

  return [left + 1, right];
}


var str = "b12365456321b";
console.log(longestPalindromicSubstring(str));
