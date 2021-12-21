/**
 * @param {string} s
 * @return {string}
 */
// TC - O(n^2) | SC - O(n)
 var longestPalindrome = function(s) {
     var currentLongest = [0,1];
    for (let i = 1; i < s.length; i++) {
        const odd = getLongestPalindromeFrom(s, i-1, i+1);
        const even = getLongestPalindromeFrom(s, i-1, i);
        const longest = odd[1]-odd[0] > even[1] - even[0] ? odd : even;
        currentLongest = longest[1]-longest[0] >= currentLongest[1]-currentLongest[0] ? longest : currentLongest;        
        
    }

    return s.slice(currentLongest[0], currentLongest[1]);
};

function getLongestPalindromeFrom(string, start, end){
    while(start >= 0 && end <= string.length-1){
        if(string[start] !== string[end]) break;
        start--;
        end++;
    }

    return [start+1, end];
}
console.log(longestPalindrome("ppnammmmanoooi"));
