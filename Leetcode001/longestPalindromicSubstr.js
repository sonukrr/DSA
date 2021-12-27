// TC - O(n^2) | SC - O(n)
var longestPalindrome = function(s) {
    if(s === '' || s.length === 1) return s;

    var currentLongest = [0, 0];
    for (let i = 1; i < s.length; i++) {
        const odd = getPalindromeSubStr(i-1, i+1, s);
        const even = getPalindromeSubStr(i-1, i, s);
        let largest = odd[1]-odd[0] > even[1]-even[0] ? odd : even;
        currentLongest = largest[1]-largest[0] > currentLongest[1] - currentLongest[0] ? largest : currentLongest;
        
    }

    return s.slice(currentLongest[0], currentLongest[1]+1);
}

function getPalindromeSubStr(start, end, str) {
    const res = [0, 0];
    while (str[start] == str[end] && end < str.length) {
        res[0] = start;
        res[1] = end;
        start--;
        end++;
    }

    return res;
}

console.log(longestPalindrome("bb"));